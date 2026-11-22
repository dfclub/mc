/* ============================================================
 * 静态副本数据（原由后台 PHP 接口实时提供，此处固化为本地数据）
 * 想改服务器 IP、标语、配置项、团队、相册、QQ/微信二维码等，改这个文件即可。
 * 改完刷新页面生效；字段含义同后台「网站设置」。
 * ============================================================ */
window.MC_STATIC_DATA = {
  // content：站点全部可见内容的快照，结构与后台"网站设置"一一对应
  "content": {
    // 站点基础信息：标题、描述、服务器 IP、LOGO 文字、页签图标、版本模式
    "site": {
      "title": "DFClub 我的世界服",
      "description": "大型多人在线生存服务器，提供纯净生存、RPG冒险、建筑创造等多种玩法。",
      "server_ip": "暂未开放",
      "logo_text": "DFClub 我的世界服",
      "logo_image": "",
      "favicon_ico": "./assets/web/favicon.ico",
      "server_mode": "international",
      "netease_tier": "shangyao"
    },
    // 首屏主视觉：活动标签、两行标题、副标题、特色标签、背景图
    "hero": {
      "badge": "现在游玩就送大礼包！",
      "title_line1": "欢迎来到",
      "title_highlight": "Minecraft生存服",
      "subtitle": "由专业团队倾力打造的大型多人在线游戏，为您带来高质量的游戏体验",
      // 首屏三个绿色特色标签（会整体重建页面上的标签行）
      "features": [
        "支持生电",
        "肝帝老哥",
        "创世神"
      ],
      "bg_image": "./png/c6d2dd6a664242e2e5faa640d28c340b.jpg"
    },
    // 服务器配置版块：标题、副标题、背景图、卡片列表
    "specs": {
      "title": "服务器配置",
      "subtitle": "为了给您提供最流畅的游戏体验，我们不惜成本选用了顶级的企业级硬件设施",
      "bg_image": "./png/89ce487b74da31797c19a3dc4ffc0d79.jpg",
      // 配置卡片数组：按顺序填充页面上四张卡片，多出的不会显示
      "items": [
        {
          "title": "高频处理器",
          "desc": "Intel Core i9-14900K 超频至 6.0GHz，单核性能极致释放",
          "value": "i9-14900K",
          "icon": "./png/CPU.png"
        },
        {
          "title": "运行内存",
          "desc": "128GB DDR5 6000MHz ECC 纠错内存，告别卡顿与崩溃",
          "value": "128GB DDR5",
          "icon": "./png/RAM.png"
        },
        {
          "title": "网络带宽",
          "desc": "三线 BGP 优化线路，千兆上下行对等带宽，低延迟畅玩",
          "value": "1Gbps BGP",
          "icon": "./png/network.png"
        },
        {
          "title": "高速存储",
          "desc": "企业级 NVMe SSD RAID 10 阵列，地图加载瞬间完成",
          "value": "NVMe RAID 10",
          "icon": "./png/SSD.png"
        }
      ]
    },
    // 如何加入版块：标题、副标题、背景图、三步流程
    "help": {
      "title": "如何加入",
      "subtitle": "只需简单几步，即可开始你的冒险之旅",
      "bg_image": "./png/5e1e1be033cbd911e62327519886379f.jpg",
      // 三步流程：标题 + 说明，对应页面上的 01 / 02 / 03
      "steps": [
        {
          "title": "下载游戏",
          "desc": "前往我的世界官网或各大应用商店下载最新版本的Minecraft Java版。"
        },
        {
          "title": "添加服务器",
          "desc": "打开游戏，选择\"多人游戏\" → \"添加服务器\"，输入服务器地址。"
        },
        {
          "title": "开始冒险",
          "desc": "连接服务器后，跟随新手指引完成初始设置，即可开始你的冒险！"
        }
      ]
    },
    // 游戏特色版块：标题、副标题、背景图、三张特色卡
    "features": {
      "title": "游戏特色",
      "subtitle": "探索我们精心打造的独特玩法与系统",
      "bg_image": "./png/7649e2dbc7044ee71743022dd2d51701.jpg",
      // 特色卡片：标题 / 描述 / 图标路径
      "items": [
        {
          "title": "纯净生存",
          "desc": "原汁原味的生存体验，配合精心调整的平衡性，让每一次探索都充满乐趣。",
          "icon": "./egg/002.png"
        },
        {
          "title": "RPG系统",
          "desc": "独特的职业与技能系统，挑战强大的副本BOSS，获取传说级装备。",
          "icon": "./egg/003.png"
        },
        {
          "title": "建筑创造",
          "desc": "超大领地保护，丰富的装饰性方块，让你的建筑才华得到完美展示。",
          "icon": "./egg/001.png"
        }
      ]
    },
    // 游戏截图版块：标题、副标题、背景图、轮播列表
    "gallery": {
      "title": "游戏截图",
      "subtitle": "每一帧都是壁纸，记录我们在服务器的点点滴滴",
      "bg_image": "./png/f5ea0ca06bf5ac36704b7277536ab53d.jpg",
      // 轮播项：图片路径 + 说明文字，按顺序循环播放
      "items": [
        {
          "src": "./png/f5ea0ca06bf5ac36704b7277536ab53d.jpg",
          "caption": "出生点主城：第一次上线都会站在这儿"
        },
        {
          "src": "./png/5e1e1be033cbd911e62327519886379f.jpg",
          "caption": "玩家投稿的建筑，审核通过后挂进世界"
        },
        {
          "src": "./png/9cca3afcca8c0a79eac6a39aad5d65ec.jpg",
          "caption": "往外走几千格，还是没被踩过的地形"
        },
        {
          "src": "./egg/img1_bcd004c0.jpg",
          "caption": "节日活动合影，那天服务器差点满员"
        },
        {
          "src": "./egg/img2_ab032cdc.jpg",
          "caption": "临时搭的竞技场，打完就拆"
        }
      ]
    },
    // 管理团队版块：标题、副标题、背景图、成员列表
    "team": {
      "title": "管理团队",
      "subtitle": "专业的运营团队，致力于为您提供最好的游戏体验",
      "bg_image": "./png/achXdg.jpg",
      // 成员：名称 / 职位 / 简介 / 头像；这里改会重建整个团队列表
      "members": [
        {
          "name": "服主",
          "role": "Server Owner",
          "desc": "负责服务器整体规划与运营，确保服务器长期稳定运行。",
          "avatar": "./egg/cat.jpg"
        },
        {
          "name": "技术管理",
          "role": "Technical Admin",
          "desc": "负责插件配置、Bug修复及服务器性能优化。",
          "avatar": "./egg/cat2.jpg"
        },
        {
          "name": "社区巡查",
          "role": "Moderator",
          "desc": "维护游戏秩序，处理玩家纠纷，营造良好社区氛围。",
          "avatar": "./egg/cat3.jpg"
        },
        {
          "name": "建筑师",
          "role": "Builder",
          "desc": "负责主城及公共设施的建筑设计与搭建。",
          "avatar": "./egg/dsb.JPG"
        },
        {
          "name": "外挂巡查",
          "role": "Externals",
          "desc": "专门负责巡查玩家是否使用外挂，确保游戏公平性。",
          "avatar": "./egg/dsb2.jpg"
        }
      ]
    },
    // 联系我们版块：只保留背景图，文字内容写在 index.html 里
    "contact": {
      "bg_image": "./png/5e1e1be033cbd911e62327519886379f.jpg"
    },
    // 加入社区版块：标题、副标题、背景图、QQ 与微信两组字段
    "community": {
      "title": "加入社区",
      "subtitle": "加入我们的玩家交流群，获取最新资讯与福利",
      // 背景图相对路径（不带 ./ 也能正常加载）
      "bg_image": "png/wj_Narcissa_3.png",
      "qq_text": "官方QQ群",
      "qq_desc": "与其他玩家实时交流，获取最新公告",
      "qq_qr": "./assets/web/qq-qr.png",
      "qq_link": "#",
      "wechat_text": "微信交流群",
      "wechat_desc": "关注微信群，不错过任何活动通知",
      "wechat_qr": "",
      "wechat_link": "#"
    },
    // 页脚：简介、版权文案、友情链接
    "footer": {
      "desc": "由专业团队倾力打造的大型多人在线游戏，致力于为玩家提供最优质的游戏体验与最温馨的社区氛围。",
      "copyright": "© 2024 小狐狸生存服. All rights reserved.",
      // 友情链接：会重建页脚第三列
      "friend_links": [
        {
          "name": "DFClub 官网",
          "url": "https://dfclub.github.io/"
        },
        {
          "name": "DFClub 打洲社",
          "url": "https://dfclub.github.io/delta/index.html"
        },
        {
          "name": "GitHub 主页",
          "url": "https://github.com/dfclub"
        }
      ]
    }
  },
  // 首页公告快照：当前 home 与 popup 都是空数组，所以页面不显示公告条和弹窗
  "announcements": {
    "success": true,
    "data": {
      "home": [],
      "popup": []
    }
  },
  // 在线人数快照：导出时接口返回 "-"，所以页面显示连字符而不是具体人数
  "status": {
    "success": true,
    "data": {
      "p": "-",
      "mp": "-",
      "ping": "-"
    }
  },
  // 登录状态快照：logged_in 为 false，顶部只显示"登录/注册"
  "session": {
    "installed": true,
    "logged_in": false
  }
};
