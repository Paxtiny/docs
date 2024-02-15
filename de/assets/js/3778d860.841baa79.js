"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5722],{4737:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=t(5893),n=t(1151);const a={sidebar_position:1},s="Getting started",o={id:"unraid-os/getting-started/getting-started",title:"Getting started",description:"In this guide, we cover how to prepare your flash device, boot the system, and configure your first array. The entire process should take less than 15 minutes.",source:"@site/docs/unraid-os/getting-started/getting-started.md",sourceDirName:"unraid-os/getting-started",slug:"/unraid-os/getting-started/",permalink:"/de/unraid-os/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/getting-started/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"unraidSidebar",previous:{title:"Unraid OS",permalink:"/de/category/unraid-os"},next:{title:"Quick install guide",permalink:"/de/unraid-os/getting-started/quick-install-guide"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"Application Servers",id:"application-servers",level:4},{value:"Creating Virtual Machines",id:"creating-virtual-machines",level:4}];function l(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(r.p,{children:"In this guide, we cover how to prepare your flash device, boot the system, and configure your first array. The entire process should take less than 15 minutes."}),"\n",(0,i.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(r.p,{children:"Before you begin:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"You should have your server assembled and connected via power and Ethernet."}),"\n",(0,i.jsx)(r.li,{children:"You should have a monitor and keyboard attached for the initial configuration and to be ready to alter configuration settings in your\nBIOS."}),"\n",(0,i.jsxs)(r.li,{children:["You will also need a high-quality, named-brand ",(0,i.jsx)(r.a,{href:"/de/unraid-os/manual/changing-the-flash-device#recommendations-on-buying-usb-drives",children:"USB flash device"})," that is at least 2 GB in size, but no larger than 32 GB, that must contain a unique GUID (Globally Unique Identifier)."]}),"\n",(0,i.jsx)(r.li,{children:"Your system must be capable of booting from a USB device."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,i.jsxs)(r.p,{children:["As of the ",(0,i.jsx)(r.a,{href:"https://unraid.net/product",children:"current release"})," of Unraid OS, the minimum system hardware requirements for data storage are as follows:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"A 64-bit capable processor, that runs 1 GHz or higher."}),"\n",(0,i.jsx)(r.li,{children:"A minimum of 4 GB of RAM for basic NAS functionality."}),"\n",(0,i.jsx)(r.li,{children:"Linux hardware driver support for storage, Ethernet, and USB controllers."}),"\n",(0,i.jsxs)(r.li,{children:["Two hard disk drives to ensure data protection with a ",(0,i.jsx)(r.a,{href:"/de/legacy/FAQ/Parity",children:"parity disk"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Additional requirements apply when adding applications or virtual machines."}),"\n",(0,i.jsxs)(r.admonition,{type:"important",children:[(0,i.jsx)(r.p,{children:"Plan ahead for any containers or VMs you want to add to your Unraid server, consider the hardware requirements for each one. For example, if you add a Windows 11 virtual machine to Unraid, you must meet the minimum requirements for that OS, in addition to those required for Unraid, to maintain functionality."}),(0,i.jsx)(r.p,{children:"Virtual Machines, in particular, require that you have a CPU and chipset combination that supports hardware virtualization. In the enterprise space these are usually identified by the Intel VPro\xae or AMD Ryzen Pro\xae badge."})]}),"\n",(0,i.jsx)(r.h4,{id:"application-servers",children:"Application Servers"}),"\n",(0,i.jsx)(r.p,{children:"To run many applications, your system should have at least a quad-core CPU (2.4 GHz or faster) and 4-8GB of RAM. As you load more applications, you\u2019ll need to add additional resources."}),"\n",(0,i.jsx)(r.h4,{id:"creating-virtual-machines",children:"Creating Virtual Machines"}),"\n",(0,i.jsx)(r.p,{children:"To run VMs, you must have hardware-assisted virtualization (HVM) support on your processor/motherboard (Intel VT-x / AMD-V). To assign host-based PCI devices, like graphics and sound, to your VMs, your CPU and motherboard must also support IOMMU (Intel VT-d / AMD-Vi)."}),"\n",(0,i.jsx)(r.p,{children:"Each of the three types of VMs have slightly different requirements for virtualization support:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Virtual Servers: HVM Required, IOMMU Not Required"}),"\n",(0,i.jsx)(r.li,{children:"Virtual Desktops: HVM Required, IOMMU Not Required"}),"\n",(0,i.jsx)(r.li,{children:"Hybrid VMs: HVM Required, IOMMU Required"}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["For more information, see our ",(0,i.jsx)(r.a,{href:"/de/unraid-os/manual/vm-support",children:"VM documentation"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var i=t(7294);const n={},a=i.createContext(n);function s(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);