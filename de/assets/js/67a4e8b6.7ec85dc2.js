"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3203],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4837:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={},i="Transferring Files from a Network Share to Unraid",s={unversionedId:"legacy/FAQ/transferring-files-from-a-network-share-to-unraid",id:"legacy/FAQ/transferring-files-from-a-network-share-to-unraid",title:"Transferring Files from a Network Share to Unraid",description:"Open a terminal session with SSH or Telnet",source:"@site/docs/legacy/FAQ/transferring-files-from-a-network-share-to-unraid.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/transferring-files-from-a-network-share-to-unraid",permalink:"/de/legacy/FAQ/transferring-files-from-a-network-share-to-unraid",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/transferring-files-from-a-network-share-to-unraid.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Terminal Access",permalink:"/de/legacy/FAQ/terminal-access"},next:{title:"Transferring Files Within the Unraid Server",permalink:"/de/legacy/FAQ/transferring-files-within-the-unraid-server"}},l={},c=[{value:"Another method using Netcat and Tar",id:"another-method-using-netcat-and-tar",level:2},{value:"Unicode issues",id:"unicode-issues",level:2},{value:"Permission issues after copying",id:"permission-issues-after-copying",level:2}],u={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transferring-files-from-a-network-share-to-unraid"},"Transferring Files from a Network Share to Unraid"),(0,o.kt)("p",null,"Open a ",(0,o.kt)("a",{parentName:"p",href:"/de/legacy/FAQ/terminal-access"},"terminal session with SSH or Telnet"),"\nto Unraid, and login as root. Create a temporary directory on the\nserver:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mkdir\xa0/work")),(0,o.kt)("p",null,"Mount a remote directory to the new directory:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mount\xa0-t\xa0cifs\xa0//workstation/share\xa0/work")),(0,o.kt)("p",null,"(Substitute name of your workstation for 'workstation', and it will\nprobably prompt you for a workstation user name/password)."),(0,o.kt)("p",null,"Copy all the files and folders from the workstation's share to a disk\nshare on the server:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cp\xa0-r\xa0/work/*\xa0/mnt/disk1")),(0,o.kt)("p",null,"(Of course you can copy from the workstation share to any disk/share.\nEg. /mnt/user/",(0,o.kt)("inlineCode",{parentName:"p"},"<sharename>"),"{=html})"),(0,o.kt)("p",null,"Edit: Another option is to use rsync to get speed/progress information:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rsync\xa0-av\xa0--stats\xa0--progress\xa0/work/\xa0/mnt/disk1/")),(0,o.kt)("p",null,"When done:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"umount\xa0/work\nrmdir\xa0/work\n")),(0,o.kt)("p",null,'Caution: If you have directory or file names with non-English\ncharacters, commonly found in titles and names for media files from\nEuropean and South American countries, I would recommend to use Windows\nExplorer. The Linux commands either skip the whole file or directory, or\nreplaces the "strange" letter with an underscore. Also, the cp command\nmay set all file attributes to system and hidden, so the files don\'t\nshow up in Windows Explorer. This may be corrected with chmod command,\nbut I found it better to avoid this altogether by sticking to the\nExplorer in Windows.'),(0,o.kt)("h2",{id:"another-method-using-netcat-and-tar"},"Another method using Netcat and Tar"),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=5045.msg47257#msg47257"},"this\npost"),"\nfor an alternative method of data transfer between Linux systems, such\nas Unraid."),(0,o.kt)("h2",{id:"unicode-issues"},"Unicode issues"),(0,o.kt)("p",null,"If you have any kind of foreign characters in your filenames (for\ninstance, an accented letter in a movie title), you want to mount the\ncifs share with the UTF-8 option as shown below, otherwise the mount\nwill give you a garbled character when doing the copy/rsync. When this\ngarbling happens, your directory will also be unlistable from a Mac\n(tested on 10.9) over AFP or SMB."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mount\xa0-t\xa0cifs\xa0//workstation/share\xa0/work\xa0-o\xa0iocharset=utf8")),(0,o.kt)("h2",{id:"permission-issues-after-copying"},"Permission issues after copying"),(0,o.kt)("p",null,"Because your SSH copy or rsync process is typically run as root, you may\nexperience 'Access Denied' messages with users writing to directories\nthat have been created as part of this job. This can be rectified by\nrunning the 'New Permissions' job from the tools menu in the web admin\nafter the copy process has completed."))}d.isMDXComponent=!0}}]);