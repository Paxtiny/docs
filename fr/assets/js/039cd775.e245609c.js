"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,h=l["".concat(d,".").concat(m)]||l[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Check Harddrive Speed",c={unversionedId:"legacy/FAQ/check-harddrive-speed",id:"legacy/FAQ/check-harddrive-speed",title:"Check Harddrive Speed",description:"The native Linux command hdparm (Hard Disk Parameters) can be used",source:"@site/docs/legacy/FAQ/check-harddrive-speed.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/check-harddrive-speed",permalink:"/fr/legacy/FAQ/check-harddrive-speed",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/check-harddrive-speed.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Checking and fixing file systems",permalink:"/fr/legacy/FAQ/check-disk-filesystems"},next:{title:"Console",permalink:"/fr/legacy/FAQ/console"}},d={},p=[],s={toc:p},l="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"check-harddrive-speed"},"Check Harddrive Speed"),(0,a.kt)("p",null,"The native Linux command ",(0,a.kt)("strong",{parentName:"p"},"hdparm")," (Hard Disk Parameters) can be used\nto determine your hard disk drive read speed."),(0,a.kt)("p",null,"Here is an example of the command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hdparm\xa0-tT\xa0/dev/hda")),(0,a.kt)("p",null,"You will need to change ",(0,a.kt)("em",{parentName:"p"},"hda")," to match the disk you want to check. You\nwill see a two line report with various numbers and timings, but the\nonly one you are interested in is the very last number, in MB/sec."),(0,a.kt)("p",null,"However, you should probably perform this test at least 5 times and look\nat the average. The following one-liner will conduct the test 12 times:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"for\xa0((i=0;i<12;i++))\xa0do\xa0hdparm\xa0-tT\xa0/dev/hda;\xa0done")),(0,a.kt)("p",null,"Convenient way of testing all drives read performance is provided by\nscript ",(0,a.kt)("strong",{parentName:"p"},"diskspeed.sh"),", listed on this ",(0,a.kt)("a",{parentName:"p",href:"http://lime-technology.com/wiki/index.php?title=UnRAID_Add_Ons#Disk_Speed"},"Wiki\npage"),"\nand downloadable from this ",(0,a.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=31073"},"forum\nthread"),". The\nscript creates reports and graphs of drive read speeds, at multiple\npoints across the surface of each drive."))}u.isMDXComponent=!0}}]);