(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9590:function(e,t,n){Promise.resolve().then(n.t.bind(n,3552,23)),Promise.resolve().then(n.bind(n,4724)),Promise.resolve().then(n.bind(n,3066)),Promise.resolve().then(n.bind(n,97)),Promise.resolve().then(n.bind(n,105))},3066:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(9268),a=n(6006),o=n(1387),i=n.n(o),l=n(6008),s=n(105);let c={dark:"224,224,224",light:"156,217,249"};function d(e){let{children:t}=e,{globalState:o}=(0,a.useContext)(s.GlobalContext),d=(0,l.useSelectedLayoutSegments)(),u=(0,a.useMemo)(()=>d.includes("blog"),[d]),m=(0,a.useRef)(null);return(0,a.useEffect)(()=>{m.current?m.current.themeChange(null==c?void 0:c[o.theme]):Promise.all([n.e(968),n.e(812)]).then(n.bind(n,4812)).then(e=>{let{default:t}=e;m.current=new t("__next_background",(null==c?void 0:c[o.theme])||c[1]),m.current.init()})},[o.theme]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("main",{className:i()("flex flex-col items-center justify-between mt-20",{"blog-wrapper":u}),style:{minHeight:"calc(100vh - 10rem)"},children:t}),(0,r.jsx)("div",{id:"__next_background",style:u?{position:"fixed",zIndex:-1}:{display:"none"}})]})}},105:function(e,t,n){"use strict";n.r(t),n.d(t,{GlobalContext:function(){return o}});var r=n(9268),a=n(6006);let o=(0,a.createContext)(),i=e=>{let{children:t}=e,[n,i]=(0,a.useState)({});(0,a.useEffect)(()=>{i({theme:function(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return document.body.className=e,localStorage.setItem("theme",e),e}()})},[]);let l=e=>{i({...n,...e})};return(0,r.jsx)(o.Provider,{value:{globalState:n,updateGlobalState:l},children:t})};t.default=i},4724:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(9268),a=n(6006),o=n(1387),i=n.n(o),l=n(5846),s=n.n(l),c=n(6008),d=n(4656),u=n(5589),m=n(3308),_=n.n(m),h=n(105);function f(){let e=(0,c.usePathname)(),[t,n]=function(e){let[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(null),o=(0,a.useCallback)(()=>{let t=document.getElementsByClassName(e)[0],a=t.children,o=0;r.current=setInterval(()=>{o<=a.length-1?(a[o].classList.add("progressive-display"),o++):(clearInterval(r.current),n(!0),o=0)},100)},[e]);return[t,o]}(_().Header_nav),{globalState:o,updateGlobalState:l}=(0,a.useContext)(h.GlobalContext),m=e=>{l({theme:e})};function f(){let e=localStorage.getItem("theme");switch(e){case"dark":m("light"),document.body.className="light",localStorage.setItem("theme","light");break;case"light":m("dark"),document.body.className="dark",localStorage.setItem("theme","dark")}}return(0,a.useEffect)(()=>{var e;n(),null===(e=document.getElementById("theme-toggle"))||void 0===e||e.addEventListener("click",f)},[]),(0,r.jsx)("div",{className:"".concat(_().Header_wrapper," h-20 opacity-bg-filter"),children:(0,r.jsxs)("div",{className:_().Header_container,children:[(0,r.jsx)("div",{className:_().Header_logo,children:(0,r.jsx)(s(),{href:"/",children:(0,r.jsxs)("div",{className:_().Logo_wrapper,children:[(0,r.jsx)("span",{className:"iconfont icon-tianxiezuo icon-logo"}),(0,r.jsx)("div",{className:_().Logo_title,children:"Fanxing".split("").map((e,t)=>(0,r.jsx)("span",{style:{transitionDelay:"".concat(.05*(t+1)+.05,"s")},children:e},t))})]})})}),(0,r.jsxs)("div",{className:_().Header_nav,children:[u.Gb.map((n,a)=>{let{title:o,link:l}=n;return(0,r.jsx)(s(),{href:l,className:i()(_()["nav-link"],{theme_nav_selected:-1!==e.indexOf(l),"progressive-display":t}),children:(0,r.jsx)(d.Z,{children:o})},a)}),(0,r.jsxs)("div",{className:_().Header_theme_button,children:[(0,r.jsx)("span",{id:"theme-toggle",className:i()("iconfont icon-theme-btn",{"icon-mingliangmoshi":"dark"===o.theme,"icon-heianmoshi":"light"===o.theme})}),(0,r.jsx)("span",{})]})]})]})})}},97:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(9268),a=n(6006),o=n(5589);function i(e){let{children:t}=e,[n,i]=(0,a.useState)(!0),[l,s]=(0,a.useState)("#8c4356");return(0,a.useEffect)(()=>{let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"no-preference",t=null===o.V0||void 0===o.V0?void 0:o.V0[e];t&&s(t)},[]),(0,a.useEffect)(()=>{let e=document.getElementById("progress"),t=document.getElementsByClassName("logo-text")[0],n=document.getElementsByClassName("loading_animate_wrapper")[0],r=e.getTotalLength();e.style["stroke-dasharray"]=r,e.style["stroke-dashoffset"]=r,t.addEventListener("animationend",e=>{e.stopPropagation();let t=setTimeout(()=>{n.classList.add("loading_animate_wrapper-hidden"),clearTimeout(t)},200)}),n.addEventListener("animationend",e=>{e.stopPropagation(),i(!1)});let a=0,o=.3,l=setInterval(()=>{let n=r-r*(a/100);e.style["stroke-dashoffset"]=n>0?n:0,a>=100?(a=0,o=.5,clearInterval(l),t.classList.add("logo-text-show")):(a>=15&&(o=1.5),a>=92&&(o=.15),a=Math.min(a+o,100))},10);return()=>clearInterval(l)},[]),(0,r.jsx)(r.Fragment,{children:n?(0,r.jsx)("div",{className:"h-screen flex justify-center items-center",children:(0,r.jsx)("div",{className:"loading_animate_wrapper",children:(0,r.jsxs)("svg",{viewBox:"0 0 84 96",width:"100",height:"100",children:[(0,r.jsx)("polygon",{id:"progress",stroke:l,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",points:"39 2 0 22 0 67 39 90 78 68 78 23",fill:"none"}),(0,r.jsx)("text",{className:"logo-text",x:"39",y:"48",fontSize:"34",fill:l,textAnchor:"middle",alignmentBaseline:"middle",children:"F"})]})})}):(0,r.jsx)("div",{className:"next-document-wrapper",children:t})})}},4656:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(9268);function a(e){let{children:t,...n}=e;return"string"!=typeof t?(console.warn("FXNavLink: children must be a string !"),null):(0,r.jsx)("div",{className:"FX_theme_nav_link",...n,children:t.split("").map((e,n)=>(0,r.jsx)("span",{style:{transitionDelay:"".concat(.35/t.length*(n+1),"s")},children:e},n))})}},5589:function(e,t,n){"use strict";n.d(t,{Gb:function(){return r},V0:function(){return a}});let r=[{title:"Blog",link:"/blog"},{title:"Collection",link:"/collection"},{title:"About",link:"/about"}],a={dark:"#8c4356",light:"#1e80ff"}},3552:function(){},3308:function(e){e.exports={Header_wrapper:"layout_Header_wrapper__0_mj0",Header_container:"layout_Header_container__GjmAG",Header_logo:"layout_Header_logo__JJC_O",Logo_wrapper:"layout_Logo_wrapper__R95Gx",Logo_title:"layout_Logo_title__C5ajd",Header_nav:"layout_Header_nav__SVqvj",Header_theme_button:"layout_Header_theme_button__jOkGR","nav-link":"layout_nav-link__KfRwi",blog_menu_wrapper:"layout_blog_menu_wrapper__wBqxq","menu-ul":"layout_menu-ul__zPwbZ","menu-expand-show-animate":"layout_menu-expand-show-animate__XLIRv","expand-show":"layout_expand-show__9zV8N","menu-expand-hidden-animate":"layout_menu-expand-hidden-animate__zQl5_","expand-hidden":"layout_expand-hidden__JjgS_","blog_menu-selected":"layout_blog_menu-selected__sn8MB"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},5846:function(e,t,n){e.exports=n(414)},6008:function(e,t,n){e.exports=n(167)},1387:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}(n)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()}},function(e){e.O(0,[414,667,139,744],function(){return e(e.s=9590)}),_N_E=e.O()}]);