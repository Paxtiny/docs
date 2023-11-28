"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8710],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={},i="Version 6.12.5 2023-11-27",l={unversionedId:"unraid-os/release-notes/6.12.5",id:"unraid-os/release-notes/6.12.5",title:"Version 6.12.5 2023-11-27",description:"Upgrade notes",source:"@site/docs/unraid-os/release-notes/6.12.5.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.5",permalink:"/de/unraid-os/release-notes/6.12.5",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.5.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Version 6.12.4 2023-08-31",permalink:"/de/unraid-os/release-notes/6.12.4"},next:{title:"6.11.0",permalink:"/de/unraid-os/release-notes/6.11.0"}},s={},u=[{value:"Upgrade notes",id:"upgrade-notes",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Rolling back",id:"rolling-back",level:3},{value:"Changes vs. 6.12.4",id:"changes-vs-6124",level:2},{value:"Bug fixes and improvements",id:"bug-fixes-and-improvements",level:3},{value:"Package updates",id:"package-updates",level:3},{value:"Linux kernel",id:"linux-kernel",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"version-6125-2023-11-27"},"Version 6.12.5 2023-11-27"),(0,a.kt)("h2",{id:"upgrade-notes"},"Upgrade notes"),(0,a.kt)("p",null,"This release includes bug fixes and security updates.  All users are encouraged to upgrade."),(0,a.kt)("h3",{id:"known-issues"},"Known issues"),(0,a.kt)("p",null,"There is a mitigation included for a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openzfs/zfs/issues/15526"},"ZFS Data Corruption")," issue.  This is accomplished\nby including this option in the default ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/zfs.conf")," file:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"zfs_dmu_offset_next_sync=0")),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"/de/unraid-os/release-notes/6.12.0#known-issues"},"6.12.0 release notes")," for general known issues."),(0,a.kt)("h3",{id:"rolling-back"},"Rolling back"),(0,a.kt)("p",null,"If rolling back earlier than 6.12.4, also see the ",(0,a.kt)("a",{parentName:"p",href:"/de/unraid-os/release-notes/6.12.4#rolling-back"},"6.12.4 release notes"),"."),(0,a.kt)("h2",{id:"changes-vs-6124"},"Changes vs. ",(0,a.kt)("a",{parentName:"h2",href:"/de/unraid-os/release-notes/6.12.4"},"6.12.4")),(0,a.kt)("h3",{id:"bug-fixes-and-improvements"},"Bug fixes and improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Replace very old 'MemTest86+' with Memtest86+ version: 6.20",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"There are also ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/memtest86plus/memtest86plus#boot-options"},"Boot Options")," available."))),(0,a.kt)("li",{parentName:"ul"},"When 'mirror syslog to flash' is enabled, view syslog-previous at Tools -> Syslog, and in diagnostics"),(0,a.kt)("li",{parentName:"ul"},"Docker:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Docker containers were not always stopping, preventing docker from unmounting"),(0,a.kt)("li",{parentName:"ul"},"Docker containers using IPv6 on custom networks were unable to start"))),(0,a.kt)("li",{parentName:"ul"},"emhttpd: if User Shares not enabled, update_cron was not called during array Start sequence"),(0,a.kt)("li",{parentName:"ul"},"rc.nginx stop - force nginx to stop"),(0,a.kt)("li",{parentName:"ul"},"shfs: Allocation method was not working correctly if 6 or more disks were specified in the 'include' mask"),(0,a.kt)("li",{parentName:"ul"},"webgui:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Downgrade.php was not updated for 6.12"),(0,a.kt)("li",{parentName:"ul"},"always show ipvlan / macvlan setting"))),(0,a.kt)("li",{parentName:"ul"},"ZFS: use 'zfs import -f' to ensure pools from other systems get imported"),(0,a.kt)("li",{parentName:"ul"},"prevent auto-spindown of unformatted devices")),(0,a.kt)("h3",{id:"package-updates"},"Package updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"curl: version 8.4.0 (CVE-2023-38546 CVE-2023-38545 CVE-2023-38039)"),(0,a.kt)("li",{parentName:"ul"},"firefox: version 119.0.r20231106151204 (AppImage)"),(0,a.kt)("li",{parentName:"ul"},"intel-microcode: version 20231114"),(0,a.kt)("li",{parentName:"ul"},"kernel-firmware: 20231024_4ee0175"),(0,a.kt)("li",{parentName:"ul"},"qemu: version 7.2.0"),(0,a.kt)("li",{parentName:"ul"},"samba: version 4.17.12 (CVE-2023-3961 CVE-2023-4091 CVE-2023-4154 CVE-2023-42669 CVE-2023-42670)"),(0,a.kt)("li",{parentName:"ul"},"smartmontools: version 7.4"),(0,a.kt)("li",{parentName:"ul"},"zfs: version 2.1.13")),(0,a.kt)("h3",{id:"linux-kernel"},"Linux kernel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"version 6.1.63"),(0,a.kt)("li",{parentName:"ul"},"CONFIG_USB_NET_CDC_NCM: CDC NCM support"),(0,a.kt)("li",{parentName:"ul"},"CONFIG_NFS_V4_1: NFS client support for NFSv4.1"),(0,a.kt)("li",{parentName:"ul"},"CONFIG_NFS_V4_1_MIGRATION: NFSv4.1 client support for migration"),(0,a.kt)("li",{parentName:"ul"},"CONFIG_NFS_V4_2: NFS client support for NFSv4.2"),(0,a.kt)("li",{parentName:"ul"},"CONFIG_NFS_V4_2_READ_PLUS: NFS: Enable support for the NFSv4.2 READ_PLUS operation"),(0,a.kt)("li",{parentName:"ul"},"CONFIG_NFSD_V4_2_INTER_SSC: NFSv4.2 inter server to server COPY")))}d.isMDXComponent=!0}}]);