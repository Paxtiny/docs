"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=h(n),p=i,y=u["".concat(s,".").concat(p)]||u[p]||c[p]||r;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var h=2;h<r;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=n(7462),i=(n(7294),n(3905));const r={},o="Changing the Flash Device",l={unversionedId:"unraid-os/manual/changing-the-flash-device",id:"unraid-os/manual/changing-the-flash-device",title:"Changing the Flash Device",description:"There are two ways to swap out your USB flash device. If you are using a",source:"@site/docs/unraid-os/manual/changing-the-flash-device.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/changing-the-flash-device",permalink:"/unraid-os/manual/changing-the-flash-device",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/changing-the-flash-device.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Additional Settings",permalink:"/unraid-os/manual/additional-settings"},next:{title:"Getting Started",permalink:"/category/getting-started"}},s={},h=[{value:"Why replace your USB Flash boot device?",id:"why-replace-your-usb-flash-boot-device",level:2},{value:"What if I can&#39;t backup my device?",id:"what-if-i-cant-backup-my-device",level:2},{value:"Changing a Flash Device Before Purchasing",id:"changing-a-flash-device-before-purchasing",level:2},{value:"Using the Flash Creator",id:"using-the-flash-creator",level:2},{value:"Manual Method",id:"manual-method",level:2},{value:"Notes About Replacing your Registration Key",id:"notes-about-replacing-your-registration-key",level:2},{value:"Warning on Sandisk Brand USBs",id:"warning-on-sandisk-brand-usbs",level:2},{value:"What to do if you have no backup and do not know your disk assignments",id:"what-to-do-if-you-have-no-backup-and-do-not-know-your-disk-assignments",level:2},{value:"Option 1",id:"option-1",level:3},{value:"Option 2 If you have the Unassigned Devices plugin installed",id:"option-2-if-you-have-the-unassigned-devices-plugin-installed",level:3}],d={toc:h},u="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"changing-the-flash-device"},"Changing the Flash Device"),(0,i.kt)("p",null,"There are two ways to swap out your USB flash device. If you are using a\nPC or Mac, you should use the ",(0,i.kt)("a",{parentName:"p",href:"https://unraid.net/download"},"USB Flash Creator\ntool")," for the easiest and most streamlined\nexperience."),(0,i.kt)("p",null,"Alternatively, if you are using a Linux system or if the USB Flash\nCreator tool is not working for some reason, ",(0,i.kt)("a",{parentName:"p",href:"./getting-started/manual-install-method"},"please use the legacy\nmethod"),"."),(0,i.kt)("p",null,"In either case, you will first need to have a full backup of your\noriginal Unraid OS USB flash boot device. It is ",(0,i.kt)("strong",{parentName:"p"},"highly recommended"),"\nthat you always have an up-to-date backup of your Unraid USB flash\ndevice."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is done via the 'Main' tab in the Unraid webGui then clicking\non 'Flash'."),(0,i.kt)("li",{parentName:"ul"},"From here you will see the option 'FLASH BACKUP', click this and a\nfull zipped backup of your current flash drive will be downloaded to\nyour Mac or PC.")),(0,i.kt)("p",null,"NOTE: All the information that is specific to your Unraid installation\nis contained in the ",(0,i.kt)("strong",{parentName:"p"},"config")," folder on the flash drive."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6730).Z,width:"1618",height:"810"})),(0,i.kt)("h2",{id:"why-replace-your-usb-flash-boot-device"},"Why replace your USB Flash boot device?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," Replacing your Unraid USB Flash Device transfers the\nlicense to a new USB Flash Device. Once this is done, the previous Flash\ndevice is ",(0,i.kt)("em",{parentName:"p"},"blacklisted and cannot be used with Unraid going forward.\nThis action cannot be undone.")),(0,i.kt)("p",null,"There are a number of different reasons that you may wish to replace\nyour USB flash device running Unraid OS including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Current device is failing or has failed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Current device has been lost.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Current device is physically too large.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Current device is too slow or does not have enough storage.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Current device is old."))),(0,i.kt)("p",null,"In practice, speed is not normally an issue as Unraid runs from RAM once\nbooted, and since they tend to be more reliable, ",(0,i.kt)("em",{parentName:"p"},"USB2 devices are\ntypically recommended")," over USB3."),(0,i.kt)("p",null,"Do you want to select the ",(0,i.kt)("em",{parentName:"p"},"best Flash device for Unraid?")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=jjkaidlZmgs"},"See this\nvideo!")),(0,i.kt)("p",null,'Prior to replacing the current flash, it may be worthwhile to shut down\nyour server, remove the flash, and insert it into a Windows or Mac\ncomputer. Using Windows scandisk or Disk Utilities in Mac, you should be\nable to try to "repair" the existing flash. If this operation works,\nyou may want to consider continuing the use of the flash. If you\'ve\ndone this before and are still having issues with your flash, then\nreplacement is probably necessary.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," Replacing your Unraid USB Flash Device transfers the\nlicense to a new USB Flash Device. Once this is done, the previous Flash\ndevice is ",(0,i.kt)("em",{parentName:"p"},"blacklisted and cannot be used with Unraid going forward.\nThis action cannot be undone.")),(0,i.kt)("h2",{id:"what-if-i-cant-backup-my-device"},"What if I can't backup my device?"),(0,i.kt)("p",null,"In the event that your flash device has failed and you do not have a\nbackup, you can still reconfigure Unraid onto a new flash device and\ntransfer your registration key to that device. Simply install Unraid to\na new flash drive using the normal process and then either 'Install'\nyour old key file, or equivalently, copy it to the 'config' directory\non your USB flash device. The server will then notice a GUID mismatch\nand offer a Replace Key button on the Tools/Registration page."),(0,i.kt)("p",null,"To ensure no data loss after the server is booted, you will need to make\nsure you assign each disk to the array / cache exactly as it was prior\nto the failure. If you do not know which disks were assigned where,\ncreate a post in the forum for further assistance."),(0,i.kt)("h2",{id:"changing-a-flash-device-before-purchasing"},"Changing a Flash Device Before Purchasing"),(0,i.kt)("p",null,"If you're currently using a Trial key and you're ready to purchase,\nyou may want to use a better flash drive for your paid key. Perform the\nsame steps in this guide for replacing the flash and when done, purchase\na registration key from the Tools ",">"," Registration page."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": Once you transfer a Trial configuration to a new flash device,\nyou will be unable to start the array until you purchase a valid\nregistration key (Trial keys can only work on the original device to\nwhich they were registered)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," Replacing your Unraid USB Flash Device transfers the\nlicense to a new USB Flash Device. Once this is done, the previous Flash\ndevice is ",(0,i.kt)("em",{parentName:"p"},"blacklisted and cannot be used with Unraid going forward.\nThis action cannot be undone.")),(0,i.kt)("h2",{id:"using-the-flash-creator"},"Using the Flash Creator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once you have a backup of your Unraid flash device, you will need to\nuse the Unraid USB Flash Creator tool to restore your backup to the\nnew USB flash device. This can be downloaded for Windows or macOS\nhere ","-","-","-",">"," ",(0,i.kt)("a",{parentName:"li",href:"https://unraid.net/download"},"Download USB Creator"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9716).Z,width:"353",height:"329"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtain a new good quality USB flash device. This should be at least\n1 GB and a max of 32GB (8GB or 16GB seem to be popular choices).\nUSB2 is fine and anecdotally has proved more reliable."),(0,i.kt)("li",{parentName:"ul"},"Plug it into your computer and then run the Unraid USB Creator\nsoftware."),(0,i.kt)("li",{parentName:"ul"},"Select the version 'Local Zip' then browse to the location of the\nbackup that you created earlier and open that."),(0,i.kt)("li",{parentName:"ul"},"Next, make sure that you select your new USB Flash device for the\ndestination, then click '",(0,i.kt)("strong",{parentName:"li"},"Write"),"' and your backup will be\nrestored to the new USB flash device.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3395).Z,width:"539",height:"514"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shutdown the server. Remove the original USB flash device and\nreplace it with the new one created above. Power on the server."),(0,i.kt)("li",{parentName:"ul"},"Once booted the array will not start and you will see the message\n'Invalid, missing or expired registration Key' Click\n'Registration Key'")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6581).Z,width:"1619",height:"766"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if you are not restoring from a backup (which would contain a copy\nof your licence key file) then copy your existing licence key file\ninto the 'config' folder on the flash drive so that Unraid knows you\nwant to switch your licence to this new flash drive."),(0,i.kt)("li",{parentName:"ul"},"Click on the option to 'REPLACE KEY' then enter the email\naddress to which you would like to have the new key delivered to."),(0,i.kt)("li",{parentName:"ul"},"Click 'REPLACE KEY'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IMPORTANT:")," Replacing your Unraid USB Flash Device transfers the\nlicense to a new USB Flash Device. Once this is done, the previous\nFlash device is ",(0,i.kt)("em",{parentName:"li"},"blacklisted and cannot be used with Unraid going\nforward. This action cannot be undone."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(73).Z,width:"1619",height:"742"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once you have received the email, copy the key file URL, then paste\nit into the box and click 'INSTALL KEY"),(0,i.kt)("li",{parentName:"ul"},"Finished! You have replaced the USB flash device and the\nregistration key. You will see a screen showing the date this key\nwas registered and the next date on which your registration key will\nbe eligible to be replaced again. Click 'DONE'.")),(0,i.kt)("h2",{id:"manual-method"},"Manual Method"),(0,i.kt)("p",null,"Prepare a new flash device using the procedure documented in the\n",(0,i.kt)("a",{parentName:"p",href:"./getting-started/manual-install-method"},"Getting Started")," guide."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before removing the flash from the PC, copy the 'config' folder\nfrom the backup you made into the flash drive, overwriting existing\nfiles."),(0,i.kt)("li",{parentName:"ul"},"Shutdown the server. Remove the original USB flash device and\nreplace it with the new one created above. Power on the server."),(0,i.kt)("li",{parentName:"ul"},"Once booted the array will not start and you will see the message\n'Invalid, missing or expired registration Key' Click\n'Registration Key'")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6581).Z,width:"1619",height:"766"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the option to 'REPLACE KEY' Then enter the email\naddress to which you would like to have the new key delivered to."),(0,i.kt)("li",{parentName:"ul"},"Click 'REPLACE KEY'")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(73).Z,width:"1619",height:"742"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," Replacing your Unraid USB Flash Device transfers the\nlicense to a new USB Flash Device. Once this is done, the previous Flash\ndevice is ",(0,i.kt)("em",{parentName:"p"},"blacklisted and cannot be used with Unraid going forward.\nThis action cannot be undone.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once you have received the email, copy the key file URL, then paste\nit into the box and click 'INSTALL KEY"),(0,i.kt)("li",{parentName:"ul"},"Finished! You have replaced the USB flash device and the\nregistration key. You will see a screen showing the date this key\nwas registered and the next date on which your registration key will\nbe eligible to be replaced again. Click 'DONE'")),(0,i.kt)("h2",{id:"notes-about-replacing-your-registration-key"},"Notes About Replacing your Registration Key"),(0,i.kt)("p",null,"You may replace your original registration key at any time. After\nreplacing your license key once, you may replace your key using the\nonline automated method after a further period of 12 months."),(0,i.kt)("p",null,"Should you need to replace it again within that 12 month period, please\nsend an email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:licensing@support.unraid.net"},"licensing@support.unraid.net")," to discuss your options.\nFor expedited service, please email in with your old and new USB GUIDs\nand purchasing email."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," We strive to manually replace licenses ASAP. If you cannot\nreplace your registration key yourself (having done so more than once\nper year) and you need access to your server right away, it is\nrecommended that you first ",(0,i.kt)("a",{parentName:"p",href:"https://unraid.net/download"},"set up a new Unraid\ntrial")," with a new USB drive and then\ncontact us to manually transfer your license."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," Replacing your Unraid USB Flash Device transfers the\nlicense to a new USB Flash Device . Once this done, the previous (old)\nFlash device is ",(0,i.kt)("em",{parentName:"p"},"blacklisted and cannot be used with Unraid going\nforward. This action cannot be undone.")),(0,i.kt)("h2",{id:"warning-on-sandisk-brand-usbs"},"Warning on Sandisk Brand USBs"),(0,i.kt)("p",null,"Please see the forum announcement below regarding an unfortunate level\nof counterfeit SanDisk USBs on the market:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/119052-psa-on-sandisk-usbs/"},"PSA on SanDisk\nUSBs")),(0,i.kt)("p",null,"At this time, we cannot officially recommend SanDisk USBs due to the\nissue of generic GUIDs found in knock off/counterfeit units."),(0,i.kt)("h2",{id:"what-to-do-if-you-have-no-backup-and-do-not-know-your-disk-assignments"},"What to do if you have no backup and do not know your disk assignments"),(0,i.kt)("p",null,"If your Unraid boot device has failed, you have no recent backup and are\nnot sure of their disk assignments it is very important that you do not\nassign a data disk as a parity drive as this will cause data loss as\nUnraid overwrites it with parity data thus destroying its contents. It\ncan also happen if you accidentally use an old backup and have increased\nthe size of your parity drive and have re-used the old parity drive from\nthat time as a data drive."),(0,i.kt)("p",null,"The procedure below exploits the fact that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any parity drive will not have a mountable file system so if you can\nidentify which drive(s) have unmountable file systems then these are\nprobably your parity drives."),(0,i.kt)("li",{parentName:"ul"},"Data drives previously used by Unraid will not have their contents\nwiped if you reset the array configuration.")),(0,i.kt)("p",null,"If you find you have more unmountable drives than you had parity drives\nthen you should ask for help in the Unraid forums."),(0,i.kt)("p",null,"In such a case the following steps can help you get your array drives\nback without data loss:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a fresh install of the Unraid flash drive as shown earlier."),(0,i.kt)("li",{parentName:"ul"},"Edit the file ",(0,i.kt)("em",{parentName:"li"},"config/disk.cfg")," on the flash drive and if necessary\nchange the ",(0,i.kt)("inlineCode",{parentName:"li"},'startArray="yes"')," entry to ",(0,i.kt)("inlineCode",{parentName:"li"},'startArray="no"'))),(0,i.kt)("p",null,"This is to avoid any accidents that might result in a data drive getting over-written with parity information.\nYou can achieve the same effect from the Unraid GUI via the\n",(0,i.kt)("em",{parentName:"p"},"Settings-",">","Disk Settings")," option."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to Tools -",">"," New Config and select the option to create a new\narray configuration.")),(0,i.kt)("p",null,"At this point there are two ways to proceed:"),(0,i.kt)("h3",{id:"option-1"},"Option 1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assign ALL drives as data drives."),(0,i.kt)("li",{parentName:"ul"},"Start the array"),(0,i.kt)("li",{parentName:"ul"},"Make a note of the serial numbers of drives showing as unmountable\nas these are probably our parity drives.")),(0,i.kt)("h3",{id:"option-2-if-you-have-the-unassigned-devices-plugin-installed"},"Option 2 If you have the Unassigned Devices plugin installed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Try to Mount each drive in turn to see which ones fail to mount."),(0,i.kt)("li",{parentName:"ul"},"Make a note of the serial numbers of drives showing as unmountable\nas these are probably our parity drives.")),(0,i.kt)("p",null,"Now that you have identified the parity drives then:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to Tools -",">"," New Config and select the option to create a new\narray configuration. This time it is advisable to use the option to\nretain all currently configured drives as this avoids the need to\nrearrange all drives (and thus reduces the chances of error)."),(0,i.kt)("li",{parentName:"ul"},"Go to the Main tab and assign the drives as required with the\ncorrect drive(s) assigned as parity."),(0,i.kt)("li",{parentName:"ul"},'If you only had a single (parity1) drive then the order of the data\ndrives is not important as far as parity is concerned so you can\nprobably safely tick the "Parity is Valid" checkbox. With dual\nparity then since the parity1 and parity2 drives use different\ncalculations they are ',(0,i.kt)("strong",{parentName:"li"},"not")," interchangeable so you will need to\ngenerate parity from scratch on both drives."),(0,i.kt)("li",{parentName:"ul"},"Start the array to commit the drive assignments and you should see\nall your data drives have mounted and their contents are intact."),(0,i.kt)("li",{parentName:"ul"},'If you ticked the "Parity is Valid" checkbox then run a correcting\nparity check to make sure this was a valid assumption.')),(0,i.kt)("p",null,"The above process will not necessarily mean the data drives are in the\nsame order so if you have any shares that have specific drive\ninclude/exclude then you will need to look at the contents of the\nindividual data drives to make sure these are as you want them (and\ncorrect them if not)."))}c.isMDXComponent=!0},6730:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Backup_flash_drive-017807361dffbac915098b60d2a07116.png"},6581:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Invalidkey-50c3f3163a051b6275dbaef06ccbcb4b.png"},73:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Replacekey-6ba2def31bd3519f5702d9a06a9441a3.png"},3395:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Selectversion-85d591f61c0456095ce33a9034e6325c.png"},9716:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Usbcreator-570d904c896fac5296853634b65022d6.png"}}]);