"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3826],{2702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(5893),i=t(1151);const s={sidebar_position:3},r="Manual install method",a={id:"unraid-os/getting-started/manual-install-method",title:"Manual install method",description:"If for some reason the USB Flash Creator tool cannot be used, or your USB flash device is not detected, it is possible to manually format and prepare a bootable USB flash device.",source:"@site/docs/unraid-os/getting-started/manual-install-method.md",sourceDirName:"unraid-os/getting-started",slug:"/unraid-os/getting-started/manual-install-method",permalink:"/de/unraid-os/getting-started/manual-install-method",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/getting-started/manual-install-method.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"unraidSidebar",previous:{title:"Quick install guide",permalink:"/de/unraid-os/getting-started/quick-install-guide"},next:{title:"Advanced BIOS configuration",permalink:"/de/unraid-os/getting-started/advanced-bios-config"}},l={},d=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"manual-install-method",children:"Manual install method"}),"\n",(0,o.jsx)(n.p,{children:"If for some reason the USB Flash Creator tool cannot be used, or your USB flash device is not detected, it is possible to manually format and prepare a bootable USB flash device."}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsx)(n.p,{children:"This method only works for devices 32GB and smaller."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Plug the USB flash device into your Mac or PC."}),"\n",(0,o.jsxs)(n.li,{children:["Format the device using the FAT32 file system. It must ",(0,o.jsx)(n.strong,{children:"not"})," be ex-FAT or NTFS. If your drive is larger than 32GB then you need to use a 3rd party tool (e.g. Rufus) to format it to FAT32 as Windows will not give this as an option on drives larger than 32GB."]}),"\n",(0,o.jsxs)(n.li,{children:["Set the \u2018volume label\u2019 to ",(0,o.jsx)(n.code,{children:"UNRAID"})," (case-sensitive, use all caps)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://unraid.net/download/",children:"Go to the downloads page."})," to get the zip file for the release you want to use."]}),"\n",(0,o.jsx)(n.li,{children:"Choose a version and download it to a temporary location on your computer (e.g. a \u201cdownloads\u201d folder)."}),"\n",(0,o.jsx)(n.li,{children:"Extract the contents of the newly downloaded ZIP file onto your USB flash device."}),"\n",(0,o.jsx)(n.li,{children:"Browse to the USB flash device to see the newly extracted contents from your Mac or PC."}),"\n",(0,o.jsxs)(n.li,{children:["If you need to enable UEFI boot, rename the ",(0,o.jsx)(n.code,{children:"EFI-"})," directory to ",(0,o.jsx)(n.code,{children:"EFI"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Run the ",(0,o.jsx)(n.em,{children:"make bootable"})," script appropriate to the OS you are using:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Windows XP"})," - double-click the ",(0,o.jsx)(n.strong,{children:"make_bootable"})," file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Windows 7 or later"})," - right-click the ",(0,o.jsx)(n.strong,{children:"make_bootable"})," file and select ",(0,o.jsx)(n.em,{children:"Run as Administrator"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Mac"})," - double-click the file ",(0,o.jsx)(n.strong,{children:"make_bootable_mac"})," file and enter your admin password when prompted."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Linux"}),":","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["copy ",(0,o.jsx)(n.strong,{children:"make_bootable_linux"})," file to hard drive"]}),"\n",(0,o.jsx)(n.li,{children:"unmount (not eject) USB drive"}),"\n",(0,o.jsxs)(n.li,{children:["run the following command from wherever you unpacked on your Linux system: ",(0,o.jsx)(n.code,{children:"sudo bash ./make_bootable_linux"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"During the process of running this script, the flash device may seem to disappear and reappear on your workstation a few times \u2013 this is expected behavior."})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);