(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},101:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},111:function(e,t,n){"use strict";var a=n(0),r=n(112);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return v})),n.d(t,"metadata",(function(){return g})),n.d(t,"toc",(function(){return O})),n.d(t,"default",(function(){return w}));var a=n(3),r=n(8),o=n(0),i=n.n(o),l=n(100),c=n(111),s=n(101),u=n(93),b=n.n(u);var p=37,m=39;var d=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,l=e.groupId,u=e.className,d=Object(c.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,g=Object(o.useState)(a),O=g[0],h=g[1],w=o.Children.toArray(e.children),j=[];if(null!=l){var y=f[l];null!=y&&y!==O&&r.some((function(e){return e.value===y}))&&h(y)}var N=function(e){var t=e.currentTarget,n=j.indexOf(t),a=r[n].value;h(a),null!=l&&(v(l,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case m:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case p:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},r.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(s.a)("tabs__item",b.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:N,onClick:N},n)}))),t?Object(o.cloneElement)(w.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))};var f=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},v={id:"installation",title:"Installation",sidebar_position:1},g={unversionedId:"getting_started/installation",id:"getting_started/installation",isDocsHomePage:!1,title:"Installation",description:"There are a few ways to install FVM, and we are working on other ways to make it even simpler.",source:"@site/docs/getting_started/installation.mdx",sourceDirName:"getting_started",slug:"/getting_started/installation",permalink:"/docs/getting_started/installation",editUrl:"https://github.com/leoafarias/fvm/edit/master/website/docs/getting_started/installation.mdx",version:"current",sidebarPosition:1,frontMatter:{id:"installation",title:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/getting_started/overview"},next:{title:"Configuration",permalink:"/docs/getting_started/configuration"}},O=[{value:"Pub package",id:"pub-package",children:[]},{value:"Standalone",id:"standalone",children:[]}],h={toc:O};function w(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"There are a few ways to install FVM, and we are working on other ways to make it even simpler."),Object(l.b)("h2",{id:"pub-package"},"Pub package"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"dart pub global activate fvm\n")),Object(l.b)("h2",{id:"standalone"},"Standalone"),Object(l.b)("p",null,"You can download the standalone packages from the GitHub repo ",Object(l.b)("a",{parentName:"p",href:"https://github.com/leoafarias/fvm/releases"},"here"),"."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Other package manager support is still work in progress"))),Object(l.b)(d,{defaultValue:"macos",values:[{label:"MacOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(l.b)(f,{value:"macos",mdxType:"TabItem"},Object(l.b)("p",null,"If you use the ",Object(l.b)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew package manager")," for Mac OS X, you can install FVM by running"),Object(l.b)("p",null,"Install"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"brew tap leoafarias/fvm\nbrew install fvm\n")),Object(l.b)("p",null,"Uninstall"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"brew uninstall fvm\nbrew untap leoafarias/fvm\n"))),Object(l.b)(f,{value:"windows",mdxType:"TabItem"},Object(l.b)("p",null,"To install fvm (Install), run the following command from the command line or from PowerShell:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"choco install fvm\n"))),Object(l.b)(f,{value:"linux",mdxType:"TabItem"},Object(l.b)("p",null,"If you use the ",Object(l.b)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew package manager")," for Linux, you can install FVM by running"),Object(l.b)("p",null,"Install"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"brew tap leoafarias/fvm\nbrew install fvm\n")),Object(l.b)("p",null,"Uninstall"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"brew uninstall fvm\nbrew untap leoafarias/fvm\n")))))}w.isMDXComponent=!0}}]);