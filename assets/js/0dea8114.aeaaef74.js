(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=i,m=s["".concat(r,".").concat(d)]||s[d]||p[d]||o;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),o=(n(0),n(114)),r={id:"os",title:"os",sidebar_label:"OS"},l={unversionedId:"os",id:"os",isDocsHomePage:!1,title:"os",description:"What",source:"@site/docs/segment-os.md",slug:"/os",permalink:"/docs/os",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-os.md",version:"current",sidebar_label:"OS",sidebar:"docs",previous:{title:"Node",permalink:"/docs/node"},next:{title:"Path",permalink:"/docs/path"}},c=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what"},"What"),Object(o.b)("p",null,"Display OS specific info. Defaults to Icon."),Object(o.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "os",\n  "style": "plain",\n  "foreground": "#26C6DA",\n  "background": "#546E7A",\n  "properties": {\n    "postfix": " \\uE0B1",\n    "macos": "mac"\n  }\n}\n')),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"macos: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the string to use for macOS - defaults to macOS icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF179")),Object(o.b)("li",{parentName:"ul"},"linux: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Linux - defaults to Linux icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF17C")),Object(o.b)("li",{parentName:"ul"},"windows: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Windows - defaults to Windows icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uE62A")),Object(o.b)("li",{parentName:"ul"},"wsl: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the string/icon to use for WSL - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"WSL")),Object(o.b)("li",{parentName:"ul"},"wsl_separator: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the string to use for separating WSL from Linux - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"-")),Object(o.b)("li",{parentName:"ul"},"display_distro_name: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - display the distro name or icon (for WSL and Linux) - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"alpine: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Alpine - defaults to Alpine icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF300")),Object(o.b)("li",{parentName:"ul"},"aosc: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Aosc - defaults to Aosc icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF301")),Object(o.b)("li",{parentName:"ul"},"arch: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Arch - defaults to Arch icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF303")),Object(o.b)("li",{parentName:"ul"},"centos: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Centos - defaults to Centos icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF304")),Object(o.b)("li",{parentName:"ul"},"coreos: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Coreos - defaults to Coreos icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF305")),Object(o.b)("li",{parentName:"ul"},"debian: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Debian - defaults to Debian icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF306")),Object(o.b)("li",{parentName:"ul"},"devuan: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Devuan - defaults to Devuan icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF307")),Object(o.b)("li",{parentName:"ul"},"raspbian: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Raspbian - defaults to Raspbian icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF315")),Object(o.b)("li",{parentName:"ul"},"elementary: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Elementary - defaults to Elementary icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF309")),Object(o.b)("li",{parentName:"ul"},"fedora: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Fedora - defaults to Fedora icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF30a")),Object(o.b)("li",{parentName:"ul"},"gentoo: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Gentoo - defaults to Gentoo icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF30d")),Object(o.b)("li",{parentName:"ul"},"mageia: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Mageia - defaults to Mageia icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF310")),Object(o.b)("li",{parentName:"ul"},"manjaro: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Manjaro - defaults to Manjaro icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF312")),Object(o.b)("li",{parentName:"ul"},"mint: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Mint - defaults to Mint icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF30e")),Object(o.b)("li",{parentName:"ul"},"nixos: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Nixos - defaults to Nixos icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF313")),Object(o.b)("li",{parentName:"ul"},"opensuse: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Opensuse - defaults to Opensuse icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF314")),Object(o.b)("li",{parentName:"ul"},"sabayon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Sabayon - defaults to Sabayon icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF317")),Object(o.b)("li",{parentName:"ul"},"slackware: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Slackware - defaults to Slackware icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF319")),Object(o.b)("li",{parentName:"ul"},"ubuntu: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use for Ubuntu - defaults to Ubuntu icon - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF31b"))))}b.isMDXComponent=!0}}]);