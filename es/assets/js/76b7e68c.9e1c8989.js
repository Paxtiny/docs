"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6909],{3642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>f});var r=t(5893),o=t(1151),s=t(7294),d=t(1048);function i(e){let{children:n,fallback:t}=e;return(0,d.Z)()?(0,r.jsx)(r.Fragment,{children:n?.()}):t??null}function a(){const[e,n]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch("https://releases.unraid.net/json?archived=true"),t=await e.json();n(t)}catch(e){console.error(e)}})()}),[]),(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Version"}),(0,r.jsx)("th",{children:"Created"}),(0,r.jsx)("th",{children:"Download"}),(0,r.jsx)("th",{children:"Changelog"}),(0,r.jsx)("th",{children:"MD5"})]}),(0,r.jsx)("tbody",{children:e.map((e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.version}),(0,r.jsx)("td",{children:e.date}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{download:!0,href:e.url,children:e.basefile})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:e.changelog_pretty,children:"Changelog"})}),(0,r.jsx)("td",{children:e.md5})]})))})]})}function c(e){return(0,r.jsx)(i,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:()=>(0,r.jsx)(a,{})})}const l={},h="Download Archive",u={id:"unraid-os/download_list",title:"Download Archive",description:"Use the content below to download Unraid zip files.",source:"@site/docs/unraid-os/download_list.mdx",sourceDirName:"unraid-os",slug:"/unraid-os/download_list",permalink:"/es/unraid-os/download_list",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/download_list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.9.2",permalink:"/es/unraid-os/release-notes/6.9.2"},next:{title:"FAQ",permalink:"/es/category/faq"}},x={},f=[];function j(e){const n={h1:"h1",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"download-archive",children:"Download Archive"}),"\n",(0,r.jsx)(n.p,{children:"Use the content below to download Unraid zip files."}),"\n",(0,r.jsx)(c,{})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>d});var r=t(7294);const o={},s=r.createContext(o);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);