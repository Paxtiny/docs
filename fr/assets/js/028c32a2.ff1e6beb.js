"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,d=m["".concat(u,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Apple Time Machine",l={unversionedId:"unraid-os/manual/configuring-time-machine",id:"unraid-os/manual/configuring-time-machine",title:"Apple Time Machine",description:"Guide: Setting up a Time Machine Share on your Unraid Server",source:"@site/docs/unraid-os/manual/configuring-time-machine.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/configuring-time-machine",permalink:"/fr/unraid-os/manual/configuring-time-machine",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/configuring-time-machine.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Changing the Flash Device",permalink:"/fr/unraid-os/manual/changing-the-flash-device"},next:{title:"Security",permalink:"/fr/unraid-os/manual/security"}},u={},s=[{value:"Guide: Setting up a Time Machine Share on your Unraid Server",id:"guide-setting-up-a-time-machine-share-on-your-unraid-server",level:2},{value:"Create a Time Machine Backup on your Unraid Server",id:"create-a-time-machine-backup-on-your-unraid-server",level:2},{value:"Unraid and Time Machine Setup",id:"unraid-and-time-machine-setup",level:2},{value:"Creating Multiple Time Machine Shares for Different People/Macs",id:"creating-multiple-time-machine-shares-for-different-peoplemacs",level:2}],c={toc:s},m="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apple-time-machine"},"Apple Time Machine"),(0,r.kt)("h2",{id:"guide-setting-up-a-time-machine-share-on-your-unraid-server"},"Guide: Setting up a Time Machine Share on your Unraid Server"),(0,r.kt)("p",null,"Apple's Time Machine is a built-in backup feature for your Mac that will\nautomatically backup all of your files, apps, music, photos, emails,\ndocuments, and system files. When you complete a backup, you can even\nrestore files from your backup if the original files are deleted from\nyour Mac or the hard disk (or SSD) in your Mac is erased or replaced.\nWith Unraid, you can now use Time Machine with the SMB protocol and\nstore your Time Machine backups on your Unraid server!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: This guide works with MacOS High Sierra.")),(0,r.kt)("h2",{id:"create-a-time-machine-backup-on-your-unraid-server"},"Create a Time Machine Backup on your Unraid Server"),(0,r.kt)("p",null,"To create backups with Time Machine and store them on your Unraid\nserver, all you'll need to do is connect it to your Unraid server and\nthen Time Machine will automatically make:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hourly backups for the past 24 hours"),(0,r.kt)("li",{parentName:"ul"},"Daily backups for the past month"),(0,r.kt)("li",{parentName:"ul"},"Weekly backups for all previous months"),(0,r.kt)("li",{parentName:"ul"},"The oldest backups are deleted when your backup disk is full")),(0,r.kt)("p",null,"If you want to control when backups are completed, we suggest you use a\ntool such as ",(0,r.kt)("a",{parentName:"p",href:"https://tclementdev.com/timemachineeditor/"},"Time Machine\nEditor")," so you can customize\nwhen backups are made and select a host of other options not available\nin Time Machine itself."),(0,r.kt)("h2",{id:"unraid-and-time-machine-setup"},"Unraid and Time Machine Setup"),(0,r.kt)("p",null,"Before you begin, make sure ",(0,r.kt)("strong",{parentName:"p"},"SMB")," is enabled in the Unraid webgui by\ngoing to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Settings ","-","-",">",' SMB under "Network Services"'),(0,r.kt)("li",{parentName:"ol"},'Set "Enable SMB" to "Yes" and click "Apply" (Array must be stopped\nto change this).'),(0,r.kt)("li",{parentName:"ol"},'Also, set "Enhanced macOS interoperability" to Yes as well.')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3993).Z,title:"File:SMBSettings.png",width:"800",height:"337"})),(0,r.kt)("p",null,"Now:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'In the Unraid webGUI, go to "Shares" and click "Add Share".'),(0,r.kt)("li",{parentName:"ol"},"Name the share (Ex: Time Machine)."),(0,r.kt)("li",{parentName:"ol"},"Set your minimum free space or leave default. This is the minimum\nfree space available to allow writing to any disk belonging to the\nshare."),(0,r.kt)("li",{parentName:"ol"},'Under "Included disk(s)" select the disk in the array that you\'d\nlike to use for your Time Machine share. You can still use this same\ndisk for other shares.'),(0,r.kt)("li",{parentName:"ol"},'Keep "Enable Copy-on-write" on "Auto".')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under SMB Security Settings.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Under "Export" select "Yes (Time Machine)"'),(0,r.kt)("li",{parentName:"ol"},'Set your "TimeMachine volume size limit". This limits the reported\nvolume size, preventing Time Machine from using the entire real disk\nspace for backup. Example: setting this value to "1024" would\nlimit the reported disk space to 1GB.'),(0,r.kt)("li",{parentName:"ol"},"Set your Security parameters to what you prefer."),(0,r.kt)("li",{parentName:"ol"},"Click Apply/Done.")),(0,r.kt)("p",null,"From here, there are just a few more steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to your Time Machine share by connecting to it through the\nFinder.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Next: go to Time Machine Preferences on your Mac and "Select Disk".'),(0,r.kt)("li",{parentName:"ol"},'Your newly mounted Time Machine share should show up. Select this\nshare, enable encryption if desired and click "Use Disk".'),(0,r.kt)("li",{parentName:"ol"},"Now, Time Machine will say it's trying to connect to your share.\n",(0,r.kt)("em",{parentName:"li"},"Before clicking connect, it's recommended to eject your mounted\nshare from your desktop and then connect.")),(0,r.kt)("li",{parentName:"ol"},"Time Machine immediately begins making periodic\nbackups---automatically and without further action by you.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The first backup may take a long time, depending on how many\nfiles you have and the size of your Mac's harddrive.")," Thereafter, Time\nMachine backs up only the files that changed since the previous backup,\nso future backups should be faster."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reminder: We suggest you use a 3rd party tool such as ",(0,r.kt)("a",{parentName:"em",href:"https://tclementdev.com/timemachineeditor/"},"Time Machine\nEditor")," so you can customize\nwhen backups are made and select a host of other options not available\nin the Time Machine program itself.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9747).Z,title:"File:TimeMachineEditor.png",width:"922",height:"506"})),(0,r.kt)("p",null,"That's it. Now, all of your Time Machine backups will be stored on your\nUnraid server and if something bad happens to your Mac, you will be able\nto restore files, settings, and apps from these backups!"),(0,r.kt)("h2",{id:"creating-multiple-time-machine-shares-for-different-peoplemacs"},"Creating Multiple Time Machine Shares for Different People/Macs"),(0,r.kt)("p",null,"So, say you want to create multiple time machine backups for different\npeople/Macs in the house? You will need to create a separate share for\neach Time Machine backup and separate users in Unraid. For example, say\nthe Stooges want to backup their Macs. If the username on each of the\nMacs is larry, curly, and moe, you would create Unraid users larry,\ncurly, and moe. Once the users are set up then you would create the\nindividual Time Machine shares (ex: tm-larry, tm-curly, tm-moe). From\nthere, simply follow the instructions above!"),(0,r.kt)("p",null,"For more info on Time Machine shares, be sure to also check out Space\nInvader One's excellent video on ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5J955nNIdo0&feature=youtu.be"},"Unraid Shares and\nMacOS!")))}p.isMDXComponent=!0},3993:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SMBSettings-5c272afe01a58b9ac4c3a96f70e39092.png"},9747:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/TimeMachineEditor-dba0619f7f1972574e58ca3ddae626dd.png"}}]);