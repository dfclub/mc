# 我的世界生存服 · 官网（GitHub Pages 静态副本）

《我的世界》生存服官网的**纯静态副本**，托管在 GitHub Pages，不依赖本机开机。
动态功能（登录注册、商城、用户中心、留言）仍由本机的 PHP 后台提供，本仓库里只有静态页面。

## 在线地址

| 用途 | 地址 | 说明 |
| --- | --- | --- |
| **静态主入口（本仓库）** | <https://dfclub.github.io/mc/> | 稳定，关机也能访问 |
| 真实动态站点（Tailscale Funnel） | <https://mcserver.tailaf01bf.ts.net/> | 依赖本机 XAMPP 开机，登录/商城/留言可用 |
| 后台管理 | <http://127.0.0.1:8080/admin/index.php> | 仅本机 |
| 计划中（自定义域名） | <https://mc.dfclub.eu.org/> | 等 eu.org 人工审核，暂不可用 |

## 仓库信息

- 仓库：`dfclub/mc`（Public，默认分支 `main`）
- 发布方式：Settings → Pages → Deploy from a branch → `main` → 目录 `/(root)`
- 访问路径带 `/mc/` 后缀，因为仓库名是 `mc`
- 页面是纯静态 HTML/CSS/JS，不需要 `.nojekyll`（没有中文资源目录）

## 目录结构

| 路径 | 内容 |
| --- | --- |
| `index.html` | 首页，**页面文案以这份文件为准** |
| `style.css` | 全站样式 |
| `script.js` | 交互与动画；运行时按 `data.js` 数据重建 DOM |
| `data.js` | 后台内容快照：服务器 IP、标语、配置卡、教程、相册、二维码、背景图、页脚 |
| `page-text.js` | 由脚本生成的「文案覆盖层」，只含与 `data.js` 不一致的字段，优先覆盖 `data.js` |
| `png/` `egg/` `assets/` | 图片、二维码、图标等静态资源（换图用同名文件替换） |
| `favicon.ico` | 页签图标（线上实际用 `assets/web/favicon.ico`） |
| `README.txt` | 原始部署说明（静态副本版） |

当前仓库共 **45 个文件 / 约 7.3 MB**。

## 两套文件，别改错地方

| 位置 | 角色 | 改动效果 |
| --- | --- | --- |
| `D:\我的世界官网\MC宣传官网V2.4` | 线上真实站点（PHP + MariaDB），是 `C:\xampp\htdocs\mc` 的联接目标 | 改这里，Tailscale 地址即时生效 |
| `D:\我的世界官网\我的世界官网-GitHubPages版`（**即本仓库**） | 静态副本，GitHub Pages 用 | 改这里并推送，`/mc/` 生效 |

静态副本**不会自动跟随后台更新**：后台改了内容，需要重新导出或手改 `data.js`。

## 更新流程

### A. 只改文字（标语、标题、配置卡、教程、特色、版块标题、团队、社区、页脚）

1. 直接编辑本仓库的 `index.html`；
2. 双击同目录 `同步页面.bat`。它会用 `python sync-page.py` 抽取 `index.html` 文案 → 写 `page-text.js` → `git add/commit/push`；
3. 约 1 分钟后 <https://dfclub.github.io/mc/> 生效。

只把「和 `data.js` 不一样」的字段写进 `page-text.js`，所以将来 `data.js` 更新了、`index.html` 没改，旧文案不会被盖回去。

### B. 改图片 / 轮播 / 二维码 / 背景图

这些 `index.html` 里没有，只存在 `data.js`：改完 `data.js` 后双击 `推送更新.bat`（只 add/commit/push，不碰文案）。

### 手动命令（等价写法）

```bat
cd /d D:\我的世界官网\我的世界官网-GitHubPages版
python sync-page.py
git add -A
git commit -m "更新内容"
git push origin main
```

直连 GitHub 不通时，脚本会自动借用系统代理（`-c http.proxy=http://127.0.0.1:26561` 之类）。

## 注意事项

- `推送更新.bat`、`同步页面.bat`、`sync-page.py`、`同步报告.txt` 已写进 `.gitignore`，不会上传到公开仓库。
- **仓库里不写任何密码**：数据库口令、后台账号只留在本机 `D:\我的世界官网\README.txt`，不要提交。
- 网页端 Upload files 有三个坑：
  1. 不要拖「我的世界官网-GitHubPages版」这个文件夹本身，会多套一层目录、地址变 `/mc/我的世界官网-GitHubPages版/` 导致 404；要进文件夹后拖里面的内容；
  2. 中文文件名容易触发 GitHub 报错，仓库内文件名尽量用 ASCII；
  3. 一次最多 100 个文件、单文件 ≤ 25 MB。
- 静态副本里的「商城」「登录/注册」已指向线上 Tailscale 地址；留言表单通过 `public_api.php` 的 CORS 头真实提交到后台（需要联网 + 本机站点在线）。
- 实时在线人数不会刷新，显示的是导出那一刻的快照值。
- 模板自带作者横幅与完整性校验，删广告或改校验文件会锁后台，非病毒，建议保留。
- 内容需遵守中国法律；托管在境外无需备案，违法违规内容仍可能被封停。

## 相关文件（本机，不入仓库）

- `D:\我的世界官网\README.txt`：完整部署说明（含动态站、后台、数据库、服务管理）
