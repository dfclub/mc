我的世界官网 · 纯静态副本
==========================

一、怎么打开
  直接双击 index.html 即可在浏览器里看到和线上官网一模一样的页面。
  也可以把整个文件夹上传到任意静态空间（GitHub Pages 见第六节），访问 index.html 即可。

二、和线上官网的关系
  - 本副本的 index.html 是线上服务器实际返回的页面原文（标题、结构一致），
    标签页标题"我的世界生存服 - 首页"与线上一致。
  - 图片、样式、脚本全部取自线上站点并已完整打包，离线打开也正常显示。
  - 线上首页由后台接口动态填充的内容（服务器 IP、首屏标语、配置项、团队、相册、
    QQ/微信二维码、页脚版权等）已固化到 data.js，所以断开网络也能显示同样的内容。

三、想改内容，改哪里（只改 index.html 就行）
  - 页面上的文字：首屏标语、大标题、副标题、三个特色标签、配置卡片、教程三步、
    特色卡、各版块标题、团队五人、社区两张卡、页脚版权 —— 全部直接在 index.html 里改。
    改完双击「同步页面.bat」：脚本会把 index.html 里的文案抽出来写进 page-text.js
    （页面立刻生效，不用再手改 data.js），接着自动提交并推送到 GitHub Pages。
  - 为什么还要 page-text.js：页面运行时是按 data.js 的数据重建 DOM 的，
    直接改 index.html 会被 data.js 的旧值盖回去；page-text.js 就是"以 index.html 为准"
    的那一层，由脚本生成，不用手改、也别手改。
  - 只有 index.html 里没有的东西才需要动 data.js：相册轮播的 5 张图和说明（gallery.items）、
    各版块背景图（bg_image）、QQ/微信二维码路径、页签图标、服务器 IP。
  - 换图片：直接替换 png\、egg\、assets\ 下的同名文件即可（文件名不变就不用改代码）。
    页签图标在 assets\web\favicon.ico。
  - 样式：style.css；交互/动画：script.js（一般不用动）。

四、需要服务器的功能
  - 登录/注册、商城、用户中心：静态副本本身没有这些页面，但导航里的"商城""登录/注册"
    （以及登录后的"用户中心/退出"）已改成指向线上官网
    https://mcserver.tailaf01bf.ts.net/user/... ，点进去仍可正常使用。
  - 留言表单：已接通线上接口。在副本里填好并提交，会真实提交到官网后台留言管理，
    和直接访问官网提交的效果一样（最多 3 张图、每张 ≤5MB、同一 IP 一分钟内最多 5 次）。
    需要联网 + 官网在线才能提交，断网时会提示"发送出错"。
  - 实时在线人数：data.js 里保存的是导出那一刻的值 "-"，不会实时刷新。
  - 这份副本是独立的静态站：在 XAMPP 后台改网站内容，这里不会自动变；
    想让线上官网也跟着变，要分别改（两边是两套文件）。

五、验证记录
  - 用 Chrome 无头浏览器分别渲染"静态副本"和"线上官网"，对比渲染完成后的整个 DOM：
    除不影响画面的内部差异（favicon/二维码换成了副本内同一张图、相册轮播恰好停在
    不同的帧、新增的一行 data.js 引用）外，内容完全一致。
  - 两边 1400x900 首屏截图逐像素目视对比：版式、文字、颜色、图片完全一致。
  - 本地引用检查：44 处资源引用，实际文件全部存在（0 缺失）。
  - 链路核对：index.html 与 script.js 中已无相对 user/*.php 链接，全部指向线上官网。
  - 留言接口实测：带跨域来源（Origin: null，等同双击本地文件打开的情形）向线上接口
    提交一条测试留言，返回 HTTP 200、响应头含 Access-Control-Allow-Origin: *、
    内容为 {"success":true}，说明跨域提交能真正成功；测试留言已从后台删除。

六、传到 GitHub Pages（本机已用 git 推送，网页上传只是备用）
  1. 打开 github.com，注册/登录后点 New repository，仓库名随意（例如 mc-site），
     可见性选 Public，不要勾选任何初始化文件，Create repository。
  2. 进入仓库页，点 "Add file" → "Upload files"，把本文件夹里的
     index.html、script.js、data.js、page-text.js、style.css、favicon.ico、README.txt
     以及 png、egg、assets 三个文件夹一起拖进去，然后 Commit changes。
  3. 进入仓库 Settings → Pages，Source 选 "Deploy from a branch"，
     Branch 选 main、目录选 /(root)，点 Save。
  4. 等 1～2 分钟，访问 https://你的用户名.github.io/仓库名/ 就是完整网站。
  注意：
  - 网页上传只能传文件、不能传 zip，所以要先解压再拖；文件多时可以直接
    把整个文件夹拖进上传框。
  - page-text.js 必须一起上传，否则页面会退回 data.js 里的旧文案。
  - 推送更新.bat、同步页面.bat、sync-page.py、同步报告.txt 是本机工具，
    已被 .gitignore 排除，不用也不该传上去。
  - 网站上显示的仍是线上官网的域名内容（留言也提交到线上后台），
    GitHub Pages 只是又一个访问入口。
  - 公开仓库任何人都能看到源码；不想公开就把仓库设为 Private（Private 仓库
    也能开 Pages，但需要你的账号付费计划，免费账号请用 Public）。
