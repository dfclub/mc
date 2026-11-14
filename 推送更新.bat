@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ==========================================
echo   一键推送《我的世界》官网到 GitHub Pages
echo ==========================================

rem 读取系统代理（Steam++ / Watt Toolkit 等加速器），git 直连 github 会被重置
for /f "tokens=2,*" %%a in ('reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer 2^>nul') do set "PROXY=%%b"
for /f "tokens=2,*" %%a in ('reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable 2^>nul') do set "PENABLE=%%b"

if "%PROXY%"=="" goto noproxy
if "%PENABLE%"=="0x0" goto noproxy
echo 使用系统代理：%PROXY%
goto push

:noproxy
echo [提示] 未检测到系统代理，将尝试直连（国内网络通常会失败）。
echo         如果失败，请先打开 Steam++ / 加速器再运行本脚本。
set "PROXY="

:push
echo.
echo [1/3] 收集改动 ...
git add -A
echo [2/3] 提交 ...
git commit -m "update: %date% %time%"
echo [3/3] 推送 ...
if "%PROXY%"=="" (
  git push
) else (
  git -c http.proxy=http://%PROXY% -c https.proxy=http://%PROXY% push
)
if errorlevel 1 goto fail
echo.
echo 推送成功！约 1 分钟后自动更新：https://dfclub.github.io/mc/
goto end

:fail
echo.
echo [失败] 推送没有完成，常见原因：
echo   1) 代理没开（先打开 Steam++ / 加速器再重试）
echo   2) 网络抖动（再运行一次本脚本）
goto end

:end
echo.
pause
