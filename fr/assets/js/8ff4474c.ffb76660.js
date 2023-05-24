"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=o,m=p["".concat(s,".").concat(c)]||p[c]||h[c]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},i="Getting Started",l={unversionedId:"unraid-os/manual/getting-started",id:"unraid-os/manual/getting-started",title:"Getting Started",description:"In this guide, we will be covering how to prepare your flash device,",source:"@site/docs/unraid-os/manual/getting-started.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/getting-started",permalink:"/fr/unraid-os/manual/getting-started",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"unraidSidebar",previous:{title:"Overview",permalink:"/fr/unraid-os/manual/what-is-unraid"},next:{title:"Storage Management",permalink:"/fr/unraid-os/manual/storage-management"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Install Guide",id:"quick-install-guide",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Connecting to the Unraid webGui",id:"connecting-to-the-unraid-webgui",level:3},{value:"Setting a Root Password",id:"setting-a-root-password",level:2},{value:"Registering and Installing Your Key",id:"registering-and-installing-your-key",level:3},{value:"Utilizing Unraid Connect",id:"utilizing-unraid-connect",level:2},{value:"Assigning Devices to the Array and Pool(s)",id:"assigning-devices-to-the-array-and-pools",level:2},{value:"Starting the Array and Formatting Your Devices",id:"starting-the-array-and-formatting-your-devices",level:2},{value:"Stopping Array, Shutting Down, and Rebooting",id:"stopping-array-shutting-down-and-rebooting",level:2},{value:"Important Considerations",id:"important-considerations",level:2},{value:"Backing Up the Flash Drive",id:"backing-up-the-flash-drive",level:3},{value:"Using the built-in help",id:"using-the-built-in-help",level:3},{value:"Security Best Practices",id:"security-best-practices",level:3},{value:"Manual Install Method",id:"manual-install-method",level:2},{value:"M\xe9todo Manual - Espa\xf1ol",id:"m\xe9todo-manual---espa\xf1ol",level:3},{value:"M\xe9thode Manuelle - Fran\xe7ais",id:"wikilink",level:3},{value:"Manuelle Methode - Deutsch",id:"wikilink-1",level:3},{value:"\u624b\u52a8\u65b9\u5f0f",id:"wikilink-2",level:3},{value:"Advanced BIOS Configuration Guide",id:"advanced-bios-configuration-guide",level:2},{value:"Boot Mode Selector (Syslinux)",id:"boot-mode-selector-syslinux",level:2},{value:"Privacy",id:"privacy",level:2},{value:"F.A.Q",id:"faq",level:2}],d={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"In this guide, we will be covering how to prepare your flash device,\nboot the system, and configure your first array. The entire process\nshould take less than 15 minutes."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before we begin:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should have your server assembled and connected via power and\nEthernet."),(0,o.kt)("li",{parentName:"ul"},"You should have a monitor and keyboard attached for the initial\nconfiguration and to be ready to alter configuration settings in your\nBIOS."),(0,o.kt)("li",{parentName:"ul"},"You will also need a high-quality, name brand USB flash device that is\n2GB or larger that must contain a unique GUID (Globally Unique\nIdentifier)."),(0,o.kt)("li",{parentName:"ul"},"Your system must be capable of booting from a USB device.")),(0,o.kt)("p",null,"For full hardware requirements, visit our ",(0,o.kt)("a",{parentName:"p",href:"https://unraid.net/product"},"product\npage"),"."),(0,o.kt)("h2",{id:"quick-install-guide"},"Quick Install Guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Insert a quality USB flash device into your Mac or PC."),(0,o.kt)("li",{parentName:"ul"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://unraid.net/download"},"USB Flash Creator")," and use\nit to install Unraid OS onto your USB flash device, or use the\n",(0,o.kt)("a",{parentName:"li",href:"#manual-install-method"},"Manual Install method"),"."),(0,o.kt)("li",{parentName:"ul"},"Remove the flash device from your PC and plug it into your server."),(0,o.kt)("li",{parentName:"ul"},"Boot into your server's BIOS settings and make the following changes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configure the system to boot from the USB flash device."),(0,o.kt)("li",{parentName:"ul"},"Enable virtualization-specific features (including IOMMU).")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Save your BIOS configuration changes and exit to boot Unraid OS.")),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Once Unraid OS has booted, you can now bring up the browser-based\nManagement Utility, a.k.a., the ",(0,o.kt)("em",{parentName:"p"},"webGui"),", and complete the process of\nconfiguring your system."),(0,o.kt)("h3",{id:"connecting-to-the-unraid-webgui"},"Connecting to the Unraid webGui"),(0,o.kt)("p",null,"There are two methods to connect to the webGui in Unraid:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Boot Unraid in GUI mode and login (username is ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),", no password by\ndefault); or"),(0,o.kt)("li",{parentName:"ul"},"Open a web browser from your Mac or PC and navigate to\n",(0,o.kt)("inlineCode",{parentName:"li"},"http://tower.local")," Note: if you configured a different host name in\nthe USB Flash Creator, use that name instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"tower"),".")),(0,o.kt)("h2",{id:"setting-a-root-password"},"Setting a Root Password"),(0,o.kt)("p",null,"Once you are connected to the webGui, you will immediately be prompted\nto set a strong root password (as of version 6.10):\n",(0,o.kt)("img",{src:n(2231).Z,title:"Set_root_password.png",width:"518",height:"655"})," Strong passwords are\nunique (not reused), have at least 8 characters (the more the better),\nare a combination of alphabetic, numeric, and special characters, and\nare not common dictionary words. Better yet, use a password manager."),(0,o.kt)("p",null,"If you happen to forget your root password, the steps to reset it can be\nfound ",(0,o.kt)("a",{parentName:"p",href:"https://unraid.net/blog/unraid-new-users-blog-series"},"here"),"."),(0,o.kt)("h3",{id:"registering-and-installing-your-key"},"Registering and Installing Your Key"),(0,o.kt)("p",null,"Once a root password is set, you will be logged into the webGui. Now you\nneed to sign in to Unraid.net and obtain a key."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sign in or Sign up under the Get Started section in the top-right of\nthe webGui.\n",(0,o.kt)("img",{alt:"UPC getting started",src:n(7757).Z,width:"575",height:"322"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upon signing in, a registration key will be downloaded and installed\nto your system automatically."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UPC installing a trial key",src:n(4150).Z,width:"597",height:"866"})," The purpose\nof the sign-in is to provide a way for you to manage your registration\nkeys for Unraid OS (obtain a Trial key, purchase a paid key, recover a\nlost key, replace your key with a new flash device, or upgrade a keybo\nfrom one edition to another)."),(0,o.kt)("p",null,"When signing up w*e ",(0,o.kt)("strong",{parentName:"p"},"highly recommend*")," you enable 2FA for your\nUnraid.net Account. Click\n",(0,o.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/104007-enhanced-forum-account-security-2fa/"},"here"),"\nfor how to set this up."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: On versions 6.9 and earlier, registering for a Trial, installing\na key, or purchasing a key is done from the webGui Tools ",">"," Registration\npage.")),(0,o.kt)("h2",{id:"utilizing-unraid-connect"},"Utilizing Unraid Connect"),(0,o.kt)("p",null,"Once you have installed the ",(0,o.kt)("a",{parentName:"p",href:"/fr/connect/about"},"Unraid Connect")," plugin\nand signed in with your Unraid.net account, you will be able to manage\nyour server through the ",(0,o.kt)("a",{parentName:"p",href:"https://connect.myunraid.net/"},"Unraid Connect Dashboard"),"."),(0,o.kt)("h2",{id:"assigning-devices-to-the-array-and-pools"},"Assigning Devices to the Array and Pool(s)"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7281).Z,title:"Configuringarray1.png",width:"1648",height:"859"})," After installing a\nregistration key, you are ready to begin assigning devices for Unraid to\nmanage. Click on the ",(0,o.kt)("strong",{parentName:"p"},"Main")," tab from the Unraid webGui and follow\nthese guidelines when assigning disks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Always pick the largest storage device available to act as your\nparity device(s)"),". When expanding your array in the future (adding\nmore devices to data disk slots), you cannot assign a data disk that\nis larger than your parity device(s). For this reason, it is highly\nrecommended to purchase the largest HDD available for use as your\ninitial parity device, so future expansions aren\u2019t limited to small\ndevice sizes. If assigning dual parity disks, your two parity disks\ncan vary in size, but the same rule holds true that no data disk in\nthe array can be larger than your smallest parity device.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SSD support in the array is experimental"),". Some SSDs may not be\nideal for use in the array due to how TRIM/Discard may be implemented.\nUsing SSDs as data/parity devices may have unexpected/undesirable\nresults. This does NOT apply to the cache / cache pool.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using a pool as a cache will improve array performance"),". It does\nthis by redirecting write operations to a dedicated disk (or pool of\ndisks in Unraid 6) and moves that data to the array on a schedule that\nyou define (by default, once per day at 3:40AM). Data written to a\ncache pool is still presented through your user shares, making use of\nthis function completely transparent. You control at the User Share\nlevel which shares should use a pool for cache purposes and which pool\nthat should be.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Creating a multi-device pool adds protection for cached data"),". If\nyou only assign one device to the cache pool, data residing there\nbefore being moved to the array on a schedule is not protected from\ndata loss. To ensure data remains protected at all times (both on data\nand cache disks), you must assign more than one device to the pool,\ncreating what is typically called a cache-pool. Cache pools can be\nexpanded on demand, similar to the array.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SSD-based pools are ideal for applications and virtual machines"),".\nApps and VMs benefit from SSDs as they can leverage their raw IO\npotential to perform faster when interacting with them. Use SSDs in a\npool for the ultimate combination of functionality, performance, and\nprotection.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: Your array will not start if you have attached more storage\ndevices than your license key allows.")),(0,o.kt)("h2",{id:"starting-the-array-and-formatting-your-devices"},"Starting the Array and Formatting Your Devices"),(0,o.kt)("p",null,"Once you have all your devices assigned, you can click the ",(0,o.kt)("strong",{parentName:"p"},"Start"),"\nbutton under Array Operation. This will mount your devices and start the\narray. New devices added to disk or cache device slots will appear as\n'Unformatted' and will be unusable for storing files until you format\nthem. Unraid 6 defaults to using the XFS filesystem for all devices, but\nif you define a cache pool then BTRFS will automatically be used for\nthose devices (you can change the default file system under\n",(0,o.kt)("em",{parentName:"p"},"Settings-",">","System Settings-",">","Disk Settings"),")."),(0,o.kt)("p",null,"To format your devices for use, you must click the check box under\n\u2018Array Operation\u2019 that says ",(0,o.kt)("strong",{parentName:"p"},"Format"),", acknowledge the resulting prompt\n(read it carefully), and then click the ",(0,o.kt)("strong",{parentName:"p"},"Format")," button."),(0,o.kt)("p",null,"Even before the devices are formatted, a ",(0,o.kt)("em",{parentName:"p"},"parity sync")," will be performed\nin the background to initialize the protection of the array. Until the\nsync is completed, the array will operate but in an unprotected state.\nIt is recommended to wait until the initial parity sync completes before\nadding data to the array."),(0,o.kt)("h2",{id:"stopping-array-shutting-down-and-rebooting"},"Stopping Array, Shutting Down, and Rebooting"),(0,o.kt)("p",null,"In order to perform one of these operations, visit the ",(0,o.kt)("strong",{parentName:"p"},"Main")," tab and\nscroll down to the section titled ",(0,o.kt)("em",{parentName:"p"},"Array Operation")," and click on the\nbutton appropriate to the operation you wish to carry out."),(0,o.kt)("h2",{id:"important-considerations"},"Important Considerations"),(0,o.kt)("p",null,"Once you've completed your initial setup, there are a few more things\nyou should know how to do on your server."),(0,o.kt)("h3",{id:"backing-up-the-flash-drive"},"Backing Up the Flash Drive"),(0,o.kt)("p",null,"It is a good idea to have your Unraid flash device backed up any time\nyou make a significant configuration change. Regular flash backups are\nhighly recommended:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Main")," tab, click on your Flash and Click ",(0,o.kt)("strong",{parentName:"li"},"Flash Backup"),".\nPlease make sure to store your backups off of your Unraid array so it\nis easily accessible even if the array is not operational."),(0,o.kt)("li",{parentName:"ul"},"If you are running Unraid 6.10.0 (or later) install the ",(0,o.kt)("a",{parentName:"li",href:"/fr/connect/about"},"Unraid Connect"),"\nplugin which provides for automated backups of the flash drive to\nLimeTech cloud-based servers.")),(0,o.kt)("h3",{id:"using-the-built-in-help"},"Using the built-in help"),(0,o.kt)("p",null,"Unraid has extensive help text for all major settings built into the\nwebGui. When enabled the Help text will be displayed under the relevant\nsetting."),(0,o.kt)("p",null,'The help text can be toggled on/off at the global level by clicking the\n"',(0,o.kt)("strong",{parentName:"p"},'?"')," icon at the top right of the Unraid GUI. It can be switched\non/off at the individual field level by clicking on the name of the\nfield."),(0,o.kt)("p",null,"It is ",(0,o.kt)("strong",{parentName:"p"},"strongly")," recommended that you make use of this feature as the\ninformation available via that route is likely to be more extensive and\nup-to-date than any documentation."),(0,o.kt)("h3",{id:"security-best-practices"},"Security Best Practices"),(0,o.kt)("p",null,"Your Unraid server is likely to end up containing data that is valuable\nto you so it can be a good idea to review the ",(0,o.kt)("a",{parentName:"p",href:"/fr/unraid-os/manual/security"},"Security Good\nPractices")," part of the documentation to\nensure you are not doing something that may leave your system open to\nattack while leaving your valuable data at risk."),(0,o.kt)("h2",{id:"manual-install-method"},"Manual Install Method"),(0,o.kt)("h3",{id:"m\xe9todo-manual---espa\xf1ol"},(0,o.kt)("a",{parentName:"h3",href:"https://wiki.unraid.net/M%C3%A9todo_Manual"},"M\xe9todo Manual - Espa\xf1ol")),(0,o.kt)("h3",{id:"wikilink"},(0,o.kt)("a",{parentName:"h3",href:"M%C3%A9thode_Manuelle_-_Fran%C3%A7ais",title:"wikilink"},"M\xe9thode Manuelle - Fran\xe7ais")),(0,o.kt)("h3",{id:"wikilink-1"},(0,o.kt)("a",{parentName:"h3",href:"Manuelle_Methode_-_Deutsch",title:"wikilink"},"Manuelle Methode - Deutsch")),(0,o.kt)("h3",{id:"wikilink-2"},(0,o.kt)("a",{parentName:"h3",href:"%E6%89%8B%E5%8A%A8%E6%96%B9%E5%BC%8F",title:"wikilink"},"\u624b\u52a8\u65b9\u5f0f")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1291).Z,title:"Sdcruzerfit.jpg",width:"287",height:"300"}),"If for some reason the USB Flash\nCreator tool cannot be used, or your USB flash device is not detected,\nit is possible to manually format and prepare a bootable USB flash\ndevice. ",(0,o.kt)("strong",{parentName:"p"},"Note: this method only works for devices 32GB and ",(0,o.kt)("em",{parentName:"strong"},"smaller"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plug the USB flash device into your Mac or PC."),(0,o.kt)("li",{parentName:"ul"},"Format the device using the FAT32 file system. It must ",(0,o.kt)("strong",{parentName:"li"},"not")," be\nex-FAT or NTFS. If your drive is larger than 32GB then you need to use\na 3rd party tool (e.g. Rufus) to format it to FAT32 as Windows will\nnot give this as an option on drives larger than 32GB."),(0,o.kt)("li",{parentName:"ul"},"Set the \u2018volume label\u2019 to ",(0,o.kt)("inlineCode",{parentName:"li"},"UNRAID")," (case-sensitive, use all caps)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://lime-technology.com/download/"},"Go to the downloads page.")," to\nget the zip file for the release you want to use."),(0,o.kt)("li",{parentName:"ul"},"Choose a version and download it to a temporary location on your\ncomputer (e.g. a \u201cdownloads\u201d folder)."),(0,o.kt)("li",{parentName:"ul"},"Extract the contents of the newly downloaded ZIP file onto your USB\nflash device."),(0,o.kt)("li",{parentName:"ul"},"Browse to the USB flash device to see the newly extracted contents\nfrom your Mac or PC."),(0,o.kt)("li",{parentName:"ul"},"If you need to enable UEFI boot, rename the ",(0,o.kt)("inlineCode",{parentName:"li"},"EFI-")," directory to ",(0,o.kt)("inlineCode",{parentName:"li"},"EFI")),(0,o.kt)("li",{parentName:"ul"},"Run the ",(0,o.kt)("em",{parentName:"li"},"make bootable")," script appropriate to the OS you are using:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows XP"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"double-click the ",(0,o.kt)("strong",{parentName:"li"},"make_bootable")," file."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows 7 or later"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"right-click the ",(0,o.kt)("strong",{parentName:"li"},"make_bootable")," file and select ",(0,o.kt)("em",{parentName:"li"},"Run as\nAdministrator"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mac"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"double-click the file ",(0,o.kt)("strong",{parentName:"li"},"make_bootable_mac")," file and enter your\nadmin password when prompted."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Linux"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"copy ",(0,o.kt)("strong",{parentName:"li"},"make_bootable_linux")," file to hard drive"),(0,o.kt)("li",{parentName:"ul"},"unmount (not eject) USB drive"),(0,o.kt)("li",{parentName:"ul"},"run the following command from wherever you unpacked it to on your\nLinux system:"),(0,o.kt)("li",{parentName:"ul"},"sudo bash ./make_bootable_linux")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": during the process of running this script, the flash device\nmay seem to disappear and reappear on your workstation a few times \u2013\nthis is expected behavior."),(0,o.kt)("h2",{id:"advanced-bios-configuration-guide"},"Advanced BIOS Configuration Guide"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6187).Z,title:"Booting.jpg",width:"300",height:"187"})," Configuring your motherboard BIOS (as\nwell as your storage controller) correctly is an important step to\nensuring a solid experience using Unraid. The basic guidelines are as\nfollows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must configure the USB flash device as the primary boot device\n(most motherboards support this)."),(0,o.kt)("li",{parentName:"ul"},"Your storage controller should support AHCI and SATA connections and\nbe configured in standard HBA mode (not RAID mode)."),(0,o.kt)("li",{parentName:"ul"},"Enable any and all virtualization support in your BIOS if your\nhardware supports it or you wish to create virtual machines (Intel\nVT-x / AMD-V)."),(0,o.kt)("li",{parentName:"ul"},"Enable IOMMU support in your BIOS if your hardware supports it or you\nwish to assign physical PCI devices (GPUs, media controllers, USB\ncontrollers, etc.) to virtual machines."),(0,o.kt)("li",{parentName:"ul"},"Avoid using front panel USB ports in favor of ports available directly\non the motherboard I/O panel.")),(0,o.kt)("p",null,"If after configuring your BIOS you cannot get Unraid to boot properly,\ntry the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the boot order to as follows: Forced-FDD, USB-HDD, USB-ZIP"),(0,o.kt)("li",{parentName:"ul"},"Try disabling USB 2.0/3.0 support (this will default to USB 1.1)."),(0,o.kt)("li",{parentName:"ul"},"Try switching on or off any ",(0,o.kt)("em",{parentName:"li"},"Fast Boot")," feature."),(0,o.kt)("li",{parentName:"ul"},"Try Switching on or off ",(0,o.kt)("em",{parentName:"li"},"USB keyboard")," support.")),(0,o.kt)("p",null,"If you still are unable to boot the OS, please post a message in our\n",(0,o.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?board=71.0"},"general support"),"\nforum."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: Many motherboards support only up to 12 hard drives for purposes\nof boot selection. This is normally not an issue for Unraid\xae OS;\nhowever, if your Flash device is recognized by the bios as a hard drive,\nyou may not be able to boot from the Flash after installing your 12th\n\u201creal\u201d hard drive. To avoid this, if possible set up your bios so that\nthe Flash is treated as a removable device.")),(0,o.kt)("h2",{id:"boot-mode-selector-syslinux"},"Boot Mode Selector (Syslinux)"),(0,o.kt)("p",null,"After configuring your BIOS and booting from the Unraid flash drive, you\nwill be prompted with the Unraid Server OS boot menu on a directly\nattached monitor (or via IPMI if your server supports that feature)."),(0,o.kt)("p",null,"There are a number of standard options available for you to select:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unraid OS (Headless)"))),(0,o.kt)("p",null,"The standard boot mode for Unraid Server OS, headless mode utilizes less\nmemory than desktop mode but relies on the use of another device capable\nof running a web browser to access the webGui for management. If a\nmonitor is attached then a console login will be displayed that can be\nused to access the Linux command line on the server."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unraid OS GUI Mode"))),(0,o.kt)("p",null,"Loads a lightweight desktop interface on a directly attached monitor\nwith a quick-launch menu for accessing the webGui, product\ndocumentation, and useful Linux utilities including a bash shell,\nmidnight commander, and htop. This mode may be helpful for users trying\nto diagnose network connectivity problems or for users that don't have a\nseparate device to use for connecting to the webGui."),(0,o.kt)("p",null,"The management interface presented in this mode is the same one that is\ndisplayed when running the system in ",(0,o.kt)("em",{parentName:"p"},"headless")," mode and accessing the\nserver remotely using a web browser."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unraid OS Safe Mode (no plugins, no GUI)"))),(0,o.kt)("p",null,"In this mode, Unraid suppresses loading any plugins that the user may\nhave installed. Use this boot mode to diagnose if plugins are causing\nstability issues on your system."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unraid OS GUI Safe Mode (no plugins)"))),(0,o.kt)("p",null,"In this mode, Unraid suppresses loading any plugins that the user may\nhave installed. Use this boot mode to diagnose if plugins are causing\nstability issues on your system."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memtest86+"))),(0,o.kt)("p",null,"If you suspect faulty RAM on your system, you can use Memtest86+ to test\nit. Please post in the ",(0,o.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?board=71.0"},"general\nsupport")," forum\nfor assistance in using this tool."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"memtest86+")," tool supplied with Unraid will only work correctly if\nyou are booting in non-UEFI (legacy) mode. If you want a version that\ncan be run when booting in UEFI mode then you need to download your own\ncopy from the memtest86+ ",(0,o.kt)("a",{parentName:"p",href:"http://www.memtest.org/"},"web site"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you use EEC RAM in your Unraid server then memtest86+ will\nnot normally detect faulty RAM modules unless you have disabled the EEC\nfeature in the BIOS (since the EEC feature automatically corrects any\nRAM error it detects)."),(0,o.kt)("p",null,"The user can change the boot menu to add additional options or amend\nexisting ones by editing the ",(0,o.kt)("em",{parentName:"p"},"syslinux/syslinux.cfg")," file on the flash\ndrive or by clicking on the ",(0,o.kt)("em",{parentName:"p"},"flash")," drive on the Main tab within the\nManagement interface and using the ",(0,o.kt)("em",{parentName:"p"},"Syslinux Configuration")," section on\nthe resulting dialog."),(0,o.kt)("h2",{id:"privacy"},"Privacy"),(0,o.kt)("p",null,"Signing in with your Unraid.net account from the webGui sends the\nfollowing information using a secure connection to our cloud servers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your email address and password used to sign in to Unraid.net."),(0,o.kt)("li",{parentName:"ul"},"The GUID of your flash device."),(0,o.kt)("li",{parentName:"ul"},"The key file on your flash device if present."),(0,o.kt)("li",{parentName:"ul"},"The server's hostname and description."),(0,o.kt)("li",{parentName:"ul"},"The server's LAN IP address."),(0,o.kt)("li",{parentName:"ul"},"The version number of Unraid OS you are running.")),(0,o.kt)("h2",{id:"faq"},"F.A.Q"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"I'm unable to get the USB Flash Creator to install Unraid to my flash\ndevice. What do I do?")),(0,o.kt)("p",null,"In the event the flash creator doesn't see or can't install Unraid to\nthe device, it could be for one of many reasons. The simplest solution\nwould be to try an alternate device, but if that is not an option for\nyou, you can try installing Unraid using the legacy ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.unraid.net/Articles/Getting_Started#Manual_Install_Method"},"manual method\ndocumented\nhere"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"I can't seem to connect to the webGui using ",(0,o.kt)("a",{parentName:"strong",href:"http://tower"},"http://tower")," or\n",(0,o.kt)("a",{parentName:"strong",href:"http://tower.local"},"http://tower.local"),". What do I do?")),(0,o.kt)("p",null,"Sometimes your local DNS server won't resolve by hostname and if that is\nthe case here, you can try connecting to the server by IP address. You\ncan discover the IP address of the server in multiple ways (by manually\nsetting it during the creation of the flash device, reviewing your\nrouter/switch DHCP address pool, or by connecting a monitor to the\nserver)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How do I change the hostname of my server?")),(0,o.kt)("p",null,"You can change the name used for your Unraid server from the webGui by\ngoing to Settings-",">","System Settings-",">","Identification"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"My flash drive is reporting an invalid GUID. What do I do?")),(0,o.kt)("p",null,"The USB Flash device ",(0,o.kt)("strong",{parentName:"p"},"must")," be one that has a unique hardware GUID\n(serial number) built into it. Some manufacturers re-use the same GUID\non the drives they manufacture, use a GUID that is all zeroes, or use an\nobviously made-up number. These drives are not able to be used as an\nUnraid boot device. Although it is difficult to generalize, drives from\nmost major manufacturers ",(0,o.kt)("strong",{parentName:"p"},"do")," satisfy the requirement of having a\nunique GUID."),(0,o.kt)("p",null,"Note: SSDs, USB card readers, SD card readers, or other devices cannot\nbe used to boot Unraid at this time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The USB flash creator tool isn't detecting my flash drive. What do I\ndo?")),(0,o.kt)("p",null,"In the event this tool doesn't work for you, we have additionally\ndocumented a manual process by which you can also create your flash\ndevice. As an FYI, the manual method only works for devices 32GB and\n",(0,o.kt)("em",{parentName:"p"},"smaller"),"."),(0,o.kt)("p",null,"USB flash devices and the Flash Creator tool are discussed further in\nthis New Users Blog."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"I need to configure my system to boot using UEFI. How do I do this?")),(0,o.kt)("p",null,"UEFI boot mode can be configured in 3 ways. When creating the flash\ndevice using the flash creator, there is an option to enable UEFI boot\nmode. After booting in legacy mode, you can change to UEFI boot from the\nFlash Device Settings page. And lastly, you can always rename the folder\non the flash drive called ",(0,o.kt)("strong",{parentName:"p"},"efi~")," to ",(0,o.kt)("strong",{parentName:"p"},"efi")," (i.e. removing the\ntrailing ",(0,o.kt)("strong",{parentName:"p"},"~")," character)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"I'm having issues using my web browser with the Unraid webGui. What\ncan I do?")),(0,o.kt)("p",null,"Unraid's management interface (the webGui) is incompatible with most\nad-blocker solutions. It is for this reason that we strongly suggest\nthat users leveraging an ad-blocker in their browser first add the\nUnraid server to the ad-blocker whitelist to ensure the ad-blocker\ndoesn't affect the webGui. Failure to do so is likely to result in parts\nof the webGui not displaying correctly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How Do I Extend My Unraid Trial?")),(0,o.kt)("p",null,"Did you know that you can extend the ",(0,o.kt)("a",{parentName:"p",href:"https://unraid.net/download"},"30 day free\ntrial"),' of Unraid? Hardware can be\nill-suited. Things break. Life happens. We get it. To try out Unraid a\nlittle longer, once your original trial shows "expired" in the upper\nleft of the header, ',(0,o.kt)("em",{parentName:"p"},"Stop the array"),"."),(0,o.kt)("p",null,"Next, go to the ",(0,o.kt)("em",{parentName:"p"},"Registration")," page, and now a button shows up where you\ncan click for a 15 day extension. You can do this a total of two times\nbefore you must decide if you would like to purchase Unraid or not."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: You cannot change the USB flash device for Unraid Trials if you\nwish to continue where you left off.")))}h.isMDXComponent=!0},6187:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Booting-9977af57bbf1e65a60d9b3af01cece07.jpg"},7281:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Configuringarray1-b563b7a09206ee11573eb77ad400c45c.png"},1291:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Sdcruzerfit-61750d20c1aba6b1f62d9def01a4fdbf.jpg"},2231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Set_root_password-4ff6b82e5658cb5c8fb377baf3f53a8e.png"},7757:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Upc_get_started-4630213996717795a6d0c89481d61bdd.png"},4150:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Upc_install_trial_key-441ac5223d84cf58dfa291d8814f1c62.png"}}]);