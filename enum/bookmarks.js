import { BookmarkGroupEnum } from ".";

/**
 * 常用书签
 */
const commonBookamrkConfig = [
  {
    title: "Github",
    link: "https://github.com/",
    icon: "https://bu.dusays.com/2023/10/26/653a3169dd00f.png",
    desc: "全球最大的面向开源及私有软件项目的托管平台。",
    type: [BookmarkGroupEnum.Common],
  },
  {
    title: "Npm",
    link: "https://www.npmjs.com/",
    icon: "https://bu.dusays.com/2023/10/26/6539e030cf9b1.png",
    desc: "通过 npm 可以安装、共享、分发代码，管理项目依赖关系。",
    type: [BookmarkGroupEnum.Common],
  },
  {
    title: "MDN",
    link: "https://developer.mozilla.org/",
    icon: "https://developer.mozilla.org/favicon-48x48.bc390275e955dacb2e65.png",
    desc: "自2005年以来，记录web技术，包括CSS、HTML和JavaScript。",
    type: [BookmarkGroupEnum.Common],
  },
  {
    title: "Notion",
    link: "https://www.notion.so/",
    icon: "https://www.notion.so/images/favicon.ico",
    desc: "notion",
    type: [BookmarkGroupEnum.Common],
  },
  {
    title: "Can i use",
    link: "https://caniuse.com/",
    icon: "https://caniuse.com/img/favicon-128.png",
    desc: "一个检测浏览器对JS、HTML5、CSS、SVG或者其他Web前端相关特性支持程度的列表。",
    type: [BookmarkGroupEnum.Common],
  },
  {
    title: "Uiverse",
    link: "https://uiverse.io/",
    icon: "https://uiverse.io/favicon-32x32.png",
    desc: "最大的开源UI库。",
    type: [BookmarkGroupEnum.Common],
  },
  {
    title: "Iconfont",
    link: "https://www.iconfont.cn/",
    icon: "https://img.alicdn.com/imgextra/i4/O1CN01XZe8pH1USpiUNT1QN_!!6000000002517-2-tps-114-114.png",
    desc: "阿里巴巴矢量图标库。",
    type: [BookmarkGroupEnum.Icon],
  },
  {
    title: "Convertio",
    link: "https://convertio.co/zh/",
    icon: "https://static.convertio.co/favicon.ico",
    desc: "文件转换器，将您的文件转换成任意格式。",
    type: [BookmarkGroupEnum.Common],
  },
  {
    title: "零代码",
    link: "https://www.lingdaima.com/",
    icon: "https://www.lingdaima.com/static/img/tool2.png",
    desc: "零代码工具箱 - 专为前端打造",
    type: [BookmarkGroupEnum.Common],
  },
  {
    title: "中国传统颜色",
    link: "https://colors.ichuantong.cn/",
    icon: "https://colors.ichuantong.cn/android-chrome-192x192.png",
    desc: "中国传统颜色手册",
    type: [BookmarkGroupEnum.Common],
  },
];

/**
 * react
 */
const reactBookmarkConfig = [
  {
    title: "Crate-React-App",
    link: "https://create-react-app.dev/",
    icon: "https://create-react-app.dev/img/favicon/favicon.ico",
    desc: "React 官方脚手架工具。",
    type: [BookmarkGroupEnum.React, BookmarkGroupEnum.Framework],
  },
  {
    title: "React",
    link: "https://react.dev/",
    icon: "https://bu.dusays.com/2023/10/25/653883d063b52.jpg",
    desc: "用于构建 Web 和原生交互界面的库。",
    type: [BookmarkGroupEnum.React, BookmarkGroupEnum.Framework],
  },
  {
    title: "Nextjs",
    link: "https://nextjs.org/",
    icon: "https://bu.dusays.com/2023/10/25/6538902d7df3a.png",
    desc: "扩展最新的 React 功能来创建全栈 Web 应用程序，并集成强大的基于 Rust 的 JavaScript 工具以实现最快的构建。",
    type: [BookmarkGroupEnum.React, BookmarkGroupEnum.Framework],
  },
  {
    title: "React Router",
    link: "https://reactrouter.com/en/main",
    icon: "https://bu.dusays.com/2023/10/25/6538842f97852.png",
    desc: "React Router 官方文档。",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "Redux",
    link: "https://cn.redux.js.org/",
    icon: "https://bu.dusays.com/2023/10/25/6538849c77d6e.png",
    desc: "Redux 官方中文文档。",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "Redux Toolkit",
    link: "https://redux-toolkit.js.org/",
    icon: "https://bu.dusays.com/2023/10/25/6538849c77d6e.png",
    desc: "The official， opinionated， batteries-included toolset for efficient Redux development.",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "Mobx",
    link: "https://zh.mobx.js.org/README.html",
    icon: "https://bu.dusays.com/2023/10/25/6538882e65a54.jpeg",
    desc: "Mobx官方中文文档。",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "Dvajs",
    link: "https://dvajs.com/guide/",
    icon: "https://bu.dusays.com/2023/10/25/653888458b72f.png",
    desc: "一个基于 redux 和 redux-saga 的数据流方案。",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "Recoil",
    link: "https://recoiljs.org/",
    icon: "https://recoiljs.org/img/favicon.png",
    desc: "React的状态管理库",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "Umi",
    link: "https://umijs.org/",
    icon: "https://bu.dusays.com/2023/10/25/653888cf60806.png",
    desc: "企业级前端框架，带给你简单而愉悦的 Web 开发体验。",
    type: [BookmarkGroupEnum.React, BookmarkGroupEnum.Framework],
  },
  {
    title: "Dumi",
    link: "https://d.umijs.org/",
    icon: "https://bu.dusays.com/2023/10/25/6538c133152c4.png",
    desc: "为组件研发而生的静态站点框架。",
    type: [BookmarkGroupEnum.React, BookmarkGroupEnum.Framework],
  },
  {
    title: "Umi-Request",
    link: "https://github.com/umijs/umi-request",
    icon: "https://bu.dusays.com/2023/10/25/653888cf60806.png",
    desc: "网络请求库，基于 fetch 封装， 兼具 fetch 与 axios 的特点， 旨在为开发者提供一个统一的 api 调用方式， 简化使用， 并提供诸如缓存， 超时， 字符编码处理， 错误处理等常用功能。",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "SWR",
    link: "https://swr.vercel.app/zh-CN",
    icon: "https://bu.dusays.com/2023/10/25/6538902d5194f.png",
    desc: "用于数据请求的 React Hooks 库。",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "aHooks",
    link: "https://ahooks.js.org/zh-CN/",
    icon: "https://bu.dusays.com/2023/10/25/6538902d5194f.jpeg",
    desc: "一套高质量可靠的 React Hooks 库。",
    type: [BookmarkGroupEnum.React, BookmarkGroupEnum.Common],
  },
  {
    title: "React Use",
    link: "https://github.com/streamich/react-use",
    icon: "https://bu.dusays.com/2023/10/25/653883d063b52.jpg",
    desc: "非常好用的 React Hooks 库。",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "Ant Motion",
    link: "https://motion.ant.design/index-cn",
    icon: "https://zos.alipayobjects.com/rmsportal/HzvPfCGNCtvGrdk.png",
    desc: "使用 Ant Motion 能够快速在 React 框架中使用动画。",
    type: [BookmarkGroupEnum.React],
  },
  {
    title: "Remix",
    link: "https://remix.run/",
    icon: "https://remix.run/favicon-32.png",
    desc: "Remix是一个全栈web框架，让您专注于用户界面，并通过web标准进行工作，以提供快速、流畅和有弹性的用户体验。",
    type: [BookmarkGroupEnum.React, BookmarkGroupEnum.Framework],
  },
];

/**
 * vue
 */
const vueBookmarkConfig = [
  {
    title: "Vue CLI",
    link: "https://cli.vuejs.org/zh/",
    icon: "https://bu.dusays.com/2023/10/24/65379d6bad8d7.png",
    desc: "Vue.js 官方脚手架工具。",
    type: [BookmarkGroupEnum.Vue, BookmarkGroupEnum.Framework],
  },
  {
    title: "Vue3",
    link: "https://cn.vuejs.org/",
    icon: "https://bu.dusays.com/2023/10/24/65379d6bad8d7.png",
    desc: "渐进式JavaScript 框架，易学易用，性能出色，适用场景丰富的 Web 前端框架。",
    type: [BookmarkGroupEnum.Vue, BookmarkGroupEnum.Framework],
  },
  {
    title: "Vue2",
    link: "https://v2.cn.vuejs.org/",
    icon: "https://bu.dusays.com/2023/10/24/65379d6bad8d7.png",
    desc: "Vue2 文档。",
    type: [BookmarkGroupEnum.Vue, BookmarkGroupEnum.Framework],
  },
  {
    title: "Vue Router",
    link: "https://router.vuejs.org/zh/",
    icon: "https://bu.dusays.com/2023/10/24/65379d6bad8d7.png",
    desc: "Vue.js 的官方路由，为 Vue.js 提供富有表现力、可配置的、方便的路由",
    type: [BookmarkGroupEnum.Vue],
  },
  {
    title: "Vuex",
    link: "https://vuex.vuejs.org/zh/",
    icon: "https://bu.dusays.com/2023/10/24/65379d6bad8d7.png",
    desc: "Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。",
    type: [BookmarkGroupEnum.Vue],
  },
  {
    title: "Pinia",
    link: "https://pinia.vuejs.org/zh/",
    icon: "https://pinia.vuejs.org/logo.png",
    desc: "符合直觉的 Vue.js 状态管理库。",
    type: [BookmarkGroupEnum.Vue],
  },
];

/**
 * javascript
 */
const jsBookmarkConfig = [
  {
    title: "JavaScript 教程",
    link: "https://zh.javascript.info/",
    icon: "https://bu.dusays.com/2023/10/30/653f7a59c73e3.png",
    desc: "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",
    type: [BookmarkGroupEnum.JavaScript],
  },
  {
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
    icon: "https://bu.dusays.com/2023/10/30/653f744b57663.png",
    desc: "Typescript官网。",
    type: [BookmarkGroupEnum.JavaScript, BookmarkGroupEnum.Common],
  },
  {
    title: "WangDoc",
    link: "https://wangdoc.com/",
    icon: "https://wangdoc.com/assets/icons/favicon-32x32.png",
    desc: "网道 - 互联网开发文档",
    type: [BookmarkGroupEnum.JavaScript, BookmarkGroupEnum.Common],
  },
];

/**
 * css
 */
const cssBookmarkConfig = [
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "https://bu.dusays.com/2023/10/25/6538dbd2b5358.ico",
    desc: "一个功能类优先的 CSS 框架。",
    type: [BookmarkGroupEnum.Css, BookmarkGroupEnum.Common],
  },
  {
    title: "SASS",
    link: "https://sass.bootcss.com/",
    icon: "https://bu.dusays.com/2023/10/30/653f5b2d26edb.jpg",
    desc: "Sass 是世界上最成熟、稳定、强大的专业级 CSS 扩展语言。",
    type: [BookmarkGroupEnum.Css],
  },
  {
    title: "less",
    link: "https://less.bootcss.com/",
    icon: "https://bu.dusays.com/2023/10/30/653f5b292116a.png",
    desc: "给 CSS 加点料，是一门向后兼容的 CSS 扩展语言。",
    type: [BookmarkGroupEnum.Css, BookmarkGroupEnum.Common],
  },
  {
    title: "stylus",
    link: "https://stylus-lang.com/",
    icon: "https://bu.dusays.com/2023/10/30/653f5b2b336a5.png",
    desc: "富有表现力的、动态的、健壮的CSS。",
    type: [BookmarkGroupEnum.Css],
  },
  {
    title: "Animate",
    link: "https://animate.style/",
    icon: "https://animate.style/img/favicon.ico",
    desc: "css内置了很多典型的css3动画，兼容性好使用方便。",
    type: [BookmarkGroupEnum.Css],
  },
  {
    title: "Animista",
    link: "https://animista.net/",
    icon: "https://animista.net/images/favicons/android-chrome-144x144.png",
    desc: "CSS动态效果样式在线自定义。",
    type: [BookmarkGroupEnum.Css],
  },
  {
    title: "A Single Div",
    link: "https://a.singlediv.com/",
    icon: "https://a.singlediv.com/images/favicon.ico",
    desc: "纯CSS实现的div图片盒子，很有意思。",
    type: [BookmarkGroupEnum.Css],
  },
  {
    title: "CSS Inspiration",
    link: "https://chokcoco.github.io/CSS-Inspiration/#/",
    icon: "https://bu.dusays.com/2023/10/30/653f60d3a902d.png",
    desc: "学习 CSS 的灵感，以分类的形式，展示不同 CSS 属性或者不同的课题使用 CSS 来解决的各种方法。",
    type: [BookmarkGroupEnum.Css],
  },
];

/**
 * UI
 */
const uiBookmarkConfig = [
  {
    title: "Ant Design",
    link: "https://ant.design/index-cn",
    icon: "https://bu.dusays.com/2023/10/25/653887ecdec8f.png",
    desc: "蚂蚁金服的开箱即用的中台前端/设计解决方案。",
    type: [
      BookmarkGroupEnum.Ui,
      BookmarkGroupEnum.React,
      BookmarkGroupEnum.Common,
    ],
  },
  {
    title: "Element Plus",
    link: "https://element-plus.org/zh-CN/#/zh-CN",
    icon: "https://element-plus.org/images/element-plus-logo-small.svg",
    desc: "基于 Vue 3，面向设计师和开发者的组件库。",
    type: [BookmarkGroupEnum.Ui, BookmarkGroupEnum.Vue],
  },
  {
    title: "Element UI",
    link: "https://element.eleme.cn/#/zh-CN",
    icon: "https://element.eleme.cn/favicon.ico",
    desc: "一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。",
    type: [BookmarkGroupEnum.Ui, BookmarkGroupEnum.Vue],
  },
  {
    title: "Vant",
    link: "https://vant-ui.github.io/vant/#/zh-CN",
    icon: "https://bu.dusays.com/2023/10/24/6537a6b6eda46.png",
    desc: "有赞团队出品的轻量、可靠的移动端 Vue 组件库。",
    type: [BookmarkGroupEnum.Ui, BookmarkGroupEnum.Vue],
  },
  {
    title: "Material UI",
    link: "https://mui.com/material-ui/",
    icon: "https://bu.dusays.com/2023/10/25/6538dcb606ecf.png",
    desc: "Material UI是一个开源的React组件库，实现了谷歌的Material Design。它很全面，可以开箱即用。",
    type: [BookmarkGroupEnum.Ui],
  },
  {
    title: "Bootstrap",
    link: "https://www.bootcss.com/",
    icon: "https://www.bootcss.com/assets/img/navlogo-small.png",
    desc: "简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。",
    type: [BookmarkGroupEnum.Ui],
  },
  {
    title: "Ant Design Vue",
    link: "https://www.antdv.com/components/overview",
    icon: "https://next.antdv.com/assets/logo.1ef800a8.svg",
    desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品。",
    type: [BookmarkGroupEnum.Ui, BookmarkGroupEnum.Vue],
  },
  {
    title: "iView Weapp",
    link: "https://weapp.iviewui.com/",
    icon: "https://file.iviewui.com/file/favicon.ico",
    desc: "一套高质量的微信小程序 UI 组件库。",
    type: [BookmarkGroupEnum.Ui, BookmarkGroupEnum.MiniProgram],
  },
  {
    title: "WeUI",
    link: "https://weui.io/",
    icon: "https://bu.dusays.com/2023/10/25/6538d32279002.png",
    desc: "WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。",
    type: [BookmarkGroupEnum.Ui, BookmarkGroupEnum.MiniProgram],
  },
];

/**
 * 可视化图表
 */
const vsBookmarkConfig = [
  {
    title: "ECharts",
    link: "https://echarts.apache.org/zh/index.html",
    icon: "https://bu.dusays.com/2023/11/02/6543461a439bb.png",
    desc: "一个使用 JavaScript 可高度个性化定制的数据可视化图表。",
    type: [
      BookmarkGroupEnum.Visualization,
      BookmarkGroupEnum.React,
      BookmarkGroupEnum.Vue,
      BookmarkGroupEnum.Common,
    ],
  },
  {
    title: "AntV",
    link: "https://antv.antgroup.com/",
    icon: "https://bu.dusays.com/2023/11/02/654358262cd65.png",
    desc: "蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
    type: [
      BookmarkGroupEnum.Visualization,
      BookmarkGroupEnum.React,
      BookmarkGroupEnum.Vue,
      BookmarkGroupEnum.Common,
    ],
  },
  {
    title: "D3.js",
    link: "https://d3js.org/",
    icon: "https://d3js.org/logo.png",
    desc: "用动态图形显示数据的JavaScript库。",
    type: [
      BookmarkGroupEnum.Visualization,
      BookmarkGroupEnum.React,
      BookmarkGroupEnum.Vue,
    ],
  },
  {
    title: "Three.js",
    link: "https://threejs.org/",
    icon: "https://threejs.org/files/favicon_white.ico",
    desc: "一个广泛应用并且功能强大的JavaScript 3D库。支持WebGL渲染，也支持SVG、Canvas和CSS3D渲染。",
    type: [
      BookmarkGroupEnum.Visualization,
      BookmarkGroupEnum.React,
      BookmarkGroupEnum.Vue,
    ],
  },
  {
    title: "HighCharts",
    link: "https://www.highcharts.com/",
    icon: "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2021/05/19085042/favicon-1.ico",
    desc: "Make your data come alive.",
    type: [
      BookmarkGroupEnum.Visualization,
      BookmarkGroupEnum.React,
      BookmarkGroupEnum.Vue,
    ],
  },
  {
    title: "Bizcharts",
    link: "https://bizcharts.taobao.com/",
    icon: "https://img.alicdn.com/tfs/TB1v_SfxCzqK1RjSZFLXXcn2XXa-50-50.png",
    desc: "企业中后台的，可视化解决方案。",
    type: [
      BookmarkGroupEnum.Visualization,
      BookmarkGroupEnum.React,
      BookmarkGroupEnum.Vue,
    ],
  },
  {
    title: "高德地图",
    link: "https://lbs.amap.com/",
    icon: "https://a.amap.com/pc/static/favicon.ico",
    desc: "高德地图开放平台。",
    type: [
      BookmarkGroupEnum.Visualization,
      BookmarkGroupEnum.React,
      BookmarkGroupEnum.Vue,
      BookmarkGroupEnum.Common,
    ],
  },
  {
    title: "百度地图",
    link: "https://lbsyun.baidu.com/",
    icon: "https://mapopen-website-wiki.cdn.bcebos.com/LOGO/lbsyunlogo_icon.ico",
    desc: "百度地图开放平台。",
    type: [
      BookmarkGroupEnum.Visualization,
      BookmarkGroupEnum.React,
      BookmarkGroupEnum.Vue,
    ],
  },
];

/**
 * 打包工具
 */
const buildBookmarkConfig = [
  {
    title: "Webpack",
    link: "https://www.webpackjs.com/",
    icon: "https://bu.dusays.com/2023/10/26/6539e02f54aa6.png",
    desc: "一个模块打包器，主要目标是将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换（transform）、打包（bundle）或包裹（package）任何资源(resource or asset)。",
    type: [BookmarkGroupEnum.Build],
  },
  {
    title: "Vite",
    link: "https://cn.vitejs.dev/",
    icon: "https://bu.dusays.com/2023/10/26/6539e02f4c14d.png",
    desc: "下一代的前端工具链，为开发提供极速响应。",
    type: [BookmarkGroupEnum.Build, BookmarkGroupEnum.Common],
  },
];

/**
 * nodejs
 */
const nodejsBookmarkConfig = [
  {
    title: "Node.js",
    link: "https://nodejs.cn/",
    icon: "https://bu.dusays.com/2023/10/25/6538fc1ce872a.png",
    desc: "Node.js 是一个开源的、跨平台的 JavaScript 运行时环境。",
    type: [BookmarkGroupEnum.Nodejs],
  },
  {
    title: "Egg",
    link: "https://www.eggjs.org/zh-CN",
    icon: "https://bu.dusays.com/2023/10/25/6538fc1cd7c73.jpg",
    desc: "为企业级框架和应用而生。",
    type: [BookmarkGroupEnum.Nodejs, BookmarkGroupEnum.Framework],
  },
  {
    title: "Express",
    link: "https://www.expressjs.com.cn/",
    icon: "https://bu.dusays.com/2023/10/25/6538fc1ce87c9.png",
    desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架。",
    type: [BookmarkGroupEnum.Nodejs],
  },
  {
    title: "Koa",
    link: "https://koa.bootcss.com/",
    icon: "https://bu.dusays.com/2023/10/25/6538fc1cdd259.jpg",
    desc: "基于node平台的下一代web开发框架。",
    type: [BookmarkGroupEnum.Nodejs],
  },
  {
    title: "Nest",
    link: "https://docs.nestjs.cn/",
    icon: "https://bu.dusays.com/2023/10/25/6538fc1cdd61e.png",
    desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架。",
    type: [BookmarkGroupEnum.Nodejs],
  },
];

/**
 * 小程序
 */
const miniProgramBookmarkConfig = [
  {
    title: "微信官方文档",
    link: "https://developers.weixin.qq.com/doc/",
    icon: "https://bu.dusays.com/2023/10/25/6538d32279002.png",
    desc: "微信小程序，微信小游戏，微信公众号，微信支付等等文档入口。",
    type: [BookmarkGroupEnum.MiniProgram],
  },
  {
    title: "微信开放社区",
    link: "https://developers.weixin.qq.com/community/develop/mixflow?id=",
    icon: "https://bu.dusays.com/2023/10/25/6538d32279002.png",
    desc: "小程序开发者专区，微信公众平台，微信开放社区，开发者专区。",
    type: [BookmarkGroupEnum.MiniProgram],
  },
  {
    title: "Uni-app",
    link: "https://uniapp.dcloud.net.cn/",
    icon: "https://bu.dusays.com/2023/10/25/6539006ad670e.png",
    desc: "是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。",
    type: [BookmarkGroupEnum.MiniProgram],
  },
  {
    title: "WePY",
    link: "https://bu.dusays.com/2023/10/25/6539006ad5f4b.png",
    icon: "https://bu.dusays.com/2023/10/25/6538d32279002.png",
    desc: "支持组件化的小程序开发框架。",
    type: [BookmarkGroupEnum.MiniProgram],
  },
  {
    title: "Taro",
    link: "https://taro.js.org/",
    icon: "https://bu.dusays.com/2023/10/25/6539006ac3582.jpg",
    desc: "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发。",
    type: [BookmarkGroupEnum.MiniProgram],
  },
  {
    title: "Mpvue",
    link: "http://mpvue.com/",
    icon: "https://bu.dusays.com/2023/10/25/6539006ae56c6.png",
    desc: "基于 Vue.js 的小程序开发框架，从底层支持 Vue.js 语法和构建工具体系",
    type: [BookmarkGroupEnum.MiniProgram, BookmarkGroupEnum.Vue],
  },
  {
    title: "Chameleon",
    link: "https://cml.js.org/",
    icon: "https://bu.dusays.com/2023/10/25/6539006adeab2.png",
    desc: "一套代码运行多端，一端所见即多端所见。",
    type: [BookmarkGroupEnum.MiniProgram],
  },
];

/**
 * 图标库
 */
const iconBookmarkConfig = [
  {
    title: "Iconfont",
    link: "https://www.iconfont.cn/",
    icon: "https://img.alicdn.com/imgextra/i4/O1CN01XZe8pH1USpiUNT1QN_!!6000000002517-2-tps-114-114.png",
    desc: "阿里巴巴矢量图标库。",
    type: [BookmarkGroupEnum.Icon, BookmarkGroupEnum.Common],
  },
  {
    title: "IconPark",
    link: "https://iconpark.oceanengine.com/home",
    icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
    desc: "字节跳动旗下开源图标库。",
    type: [BookmarkGroupEnum.Icon],
  },
  {
    title: "Emoji sercher",
    link: "https://emoji.muan.co/",
    icon: "https://bu.dusays.com/2023/10/26/653a28b8e9a14.png",
    desc: "Emoji表情大全。",
    type: [BookmarkGroupEnum.Icon],
  },
];

/**
 * 开发框架
 */
const frameworkBookmarkConfig = [
  {
    title: "Flutter",
    link: "https://flutter.dev/",
    icon: "https://bu.dusays.com/2023/10/30/653f2924b00e0.png",
    desc: "Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。",
    type: [BookmarkGroupEnum.Framework],
  },
  {
    title: "Electron",
    link: "https://www.electronjs.org/zh/",
    icon: "https://bu.dusays.com/2023/10/30/653f2931543a2.ico",
    desc: "Build cross-platform desktop apps with JavaScript， HTML， and CSS.",
    type: [BookmarkGroupEnum.Framework],
  },
  {
    title: "React Native",
    link: "https://zh-hans.react.dev/",
    icon: "https://bu.dusays.com/2023/10/25/653883d063b52.jpg",
    desc: "the best parts of native development with React， a best-in-class JavaScript library for building user interfaces.",
    type: [BookmarkGroupEnum.Framework],
  },
];

export const bookmarkConfig = [
  ...commonBookamrkConfig,
  ...cssBookmarkConfig,
  ...jsBookmarkConfig,
  ...reactBookmarkConfig,
  ...vueBookmarkConfig,
  ...uiBookmarkConfig,
  ...vsBookmarkConfig,
  ...buildBookmarkConfig,
  ...nodejsBookmarkConfig,
  ...miniProgramBookmarkConfig,
  ...frameworkBookmarkConfig,
  ...iconBookmarkConfig,
];
