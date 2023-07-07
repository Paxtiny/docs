"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,f=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="Manual Install Method",i={unversionedId:"unraid-os/manual/getting-started/manual-install-method",id:"unraid-os/manual/getting-started/manual-install-method",title:"Manual Install Method",description:"If for some reason the USB Flash Creator tool cannot be used, or your USB flash device is not detected,",source:"@site/docs/unraid-os/manual/getting-started/manual-install-method.md",sourceDirName:"unraid-os/manual/getting-started",slug:"/unraid-os/manual/getting-started/manual-install-method",permalink:"/fr/unraid-os/manual/getting-started/manual-install-method",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/getting-started/manual-install-method.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Getting Started",permalink:"/fr/unraid-os/manual/getting-started/"},next:{title:"Security",permalink:"/fr/unraid-os/manual/security"}},s={},u=[],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manual-install-method"},"Manual Install Method"),(0,r.kt)("p",null,"If for some reason the USB Flash Creator tool cannot be used, or your USB flash device is not detected,\nit is possible to manually format and prepare a bootable USB flash device.\n",(0,r.kt)("strong",{parentName:"p"},"Note: this method only works for devices 32GB and ",(0,r.kt)("em",{parentName:"strong"},"smaller"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plug the USB flash device into your Mac or PC."),(0,r.kt)("li",{parentName:"ul"},"Format the device using the FAT32 file system. It must ",(0,r.kt)("strong",{parentName:"li"},"not")," be\nex-FAT or NTFS. If your drive is larger than 32GB then you need to use\na 3rd party tool (e.g. Rufus) to format it to FAT32 as Windows will\nnot give this as an option on drives larger than 32GB."),(0,r.kt)("li",{parentName:"ul"},"Set the \u2018volume label\u2019 to ",(0,r.kt)("inlineCode",{parentName:"li"},"UNRAID")," (case-sensitive, use all caps)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://lime-technology.com/download/"},"Go to the downloads page.")," to\nget the zip file for the release you want to use."),(0,r.kt)("li",{parentName:"ul"},"Choose a version and download it to a temporary location on your\ncomputer (e.g. a \u201cdownloads\u201d folder)."),(0,r.kt)("li",{parentName:"ul"},"Extract the contents of the newly downloaded ZIP file onto your USB\nflash device."),(0,r.kt)("li",{parentName:"ul"},"Browse to the USB flash device to see the newly extracted contents\nfrom your Mac or PC."),(0,r.kt)("li",{parentName:"ul"},"If you need to enable UEFI boot, rename the ",(0,r.kt)("inlineCode",{parentName:"li"},"EFI-")," directory to ",(0,r.kt)("inlineCode",{parentName:"li"},"EFI")),(0,r.kt)("li",{parentName:"ul"},"Run the ",(0,r.kt)("em",{parentName:"li"},"make bootable")," script appropriate to the OS you are using:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Windows XP"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"double-click the ",(0,r.kt)("strong",{parentName:"li"},"make_bootable")," file."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Windows 7 or later"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"right-click the ",(0,r.kt)("strong",{parentName:"li"},"make_bootable")," file and select ",(0,r.kt)("em",{parentName:"li"},"Run as\nAdministrator"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mac"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"double-click the file ",(0,r.kt)("strong",{parentName:"li"},"make_bootable_mac")," file and enter your\nadmin password when prompted."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linux"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"copy ",(0,r.kt)("strong",{parentName:"li"},"make_bootable_linux")," file to hard drive"),(0,r.kt)("li",{parentName:"ul"},"unmount (not eject) USB drive"),(0,r.kt)("li",{parentName:"ul"},"run the following command from wherever you unpacked it to on your\nLinux system:"),(0,r.kt)("li",{parentName:"ul"},"sudo bash ./make_bootable_linux")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": during the process of running this script, the flash device\nmay seem to disappear and reappear on your workstation a few times \u2013\nthis is expected behavior."))}d.isMDXComponent=!0}}]);