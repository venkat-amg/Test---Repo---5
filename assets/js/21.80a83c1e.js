/*! For license information please see 21.80a83c1e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{138:function(e,t,r){"use strict";var n=r(0),o=r.n(n);class a extends n.PureComponent{constructor(e){super(e),this.$=o.a.createRef(),this._=o.a.createRef()}render(){return o.a.createElement("span",{ref:this.$},o.a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(null,139)).then((({render:t})=>{t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}t.a=a},139:function(e,t,r){"use strict";r.r(t),r.d(t,"render",(function(){return F}));var n=window.document,o=window.Math,a=window.HTMLElement,i=window.XMLHttpRequest,c=function(e){return function(t,r,n){var o=e.createElement(t);if(null!=r)for(var a in r){var i=r[a];null!=i&&(null!=o[a]?o[a]=i:o.setAttribute(a,i))}if(null!=n)for(var c=0,l=n.length;c<l;c++){var s=n[c];o.appendChild("string"==typeof s?e.createTextNode(s):s)}return o}},l=c(n),s=function(e,t){return{}.hasOwnProperty.call(e,t)},u=function(e){return(""+e).toLowerCase()},d="github.com",h=i&&"prototype"in i&&"withCredentials"in i.prototype,f=h&&a&&"attachShadow"in a.prototype&&!("prototype"in a.prototype.attachShadow),p=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},g=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},v={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#cfd3d6;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd0;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#cacdd0;border-color:rgba(27,31,35,.15);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,35,.15)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#c9d1d9;background-color:#1a1e23;border-color:#30363d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#21262d;border-color:#30363d}.social-count:focus,.social-count:hover{color:#58a6ff}.octicon-heart{color:#bf4b8a}",dark_dimmed:".btn{color:#adbac7;background-color:#30363d;border-color:#444c56;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#373e47;border-color:#444c56}.social-count:focus,.social-count:hover{color:#539bf5}.octicon-heart{color:#ae4c82}"},m=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+v[s(v,t)?t:e]+"}"},b=function(e){if(null==e)return v.light;if(s(v,e))return v[e];var t=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.decodeURIComponent);for(var o={},a=e.split(t),i=0,c=a.length;i<c;i++){var l=a[i];if(""!==l){var s=l.split(r);o[n(s[0])]=null!=s[1]?n(s.slice(1).join(r)):void 0}}return o}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return v[s(v,t["no-preference"])?t["no-preference"]:"light"]+m("light",t.light)+m("dark",t.dark)},w={"comment-discussion":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},package:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>'}}},play:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}}},y=function(e,t){e=u(e).replace(/^octicon-/,""),s(w,e)||(e="mark-github");var r=t>=24&&24 in w[e].heights?24:16,n=w[e].heights[r];return'<svg viewBox="0 0 '+n.width+" "+r+'" width="'+t*n.width/r+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+n.path+"</svg>"},x={},k=function(e,t){var r=x[e]||(x[e]=[]);if(!(r.push(t)>1)){var n=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete x[e];t=r.shift();)t.apply(null,arguments)}));if(h){var o=new i;p(o,"abort",n),p(o,"error",n),p(o,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void n(t)}n(200!==this.status,e)})),o.open("GET",e),o.send()}else{var a=this||window;a._=function(e){a._=null,n(200!==e.meta.status,e.data)};var l=c(a.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};p(l,"load",s),p(l,"error",s),l.readyState&&function(e,t,r){var n="readystatechange",o=function(){if(t.test(e.readyState))return g(e,n,o),r.apply(this,arguments)};p(e,n,o)}(l,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(l)}}},L=function(e,t,r){var n=c(e.ownerDocument),o=e.appendChild(n("style",{type:"text/css"})),a="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+b(t["data-color-scheme"]);o.styleSheet?o.styleSheet.cssText=a:o.appendChild(e.ownerDocument.createTextNode(a));var i="large"===u(t["data-size"]),l=n("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:y(t["data-icon"],i?16:14)},[" ",n("span",{},[t["data-text"]||""])]),s=e.appendChild(n("div",{className:"widget"+(i?" widget-lg":"")},[l])),h=l.hostname.replace(/\.$/,"");if(("."+h).substring(h.length-d.length)!=="."+d)return l.removeAttribute("href"),void r(s);var f=(" /"+l.pathname).split(/\/+/);if(((h===d||h==="gist."+d)&&"archive"===f[3]||h===d&&"releases"===f[3]&&("download"===f[4]||"latest"===f[4]&&"download"===f[5])||h==="codeload."+d)&&(l.target="_top"),"true"===u(t["data-show-count"])&&h===d&&"marketplace"!==f[1]&&"sponsors"!==f[1]&&"orgs"!==f[1]&&"users"!==f[1]&&"-"!==f[1]){var p,g;if(!f[2]&&f[1])g="followers",p="?tab=followers";else if(!f[3]&&f[2])g="stargazers_count",p="/stargazers";else if(f[4]||"subscription"!==f[3])if(f[4]||"fork"!==f[3]){if("issues"!==f[3])return void r(s);g="open_issues_count",p="/issues"}else g="forks_count",p="/network/members";else g="subscribers_count",p="/watchers";var v=f[2]?"/repos/"+f[1]+"/"+f[2]:"/users/"+f[1];k.call(this,"https://api.github.com"+v,(function(e,t){if(!e){var o=t[g];s.appendChild(n("a",{className:"social-count",href:t.html_url+p,rel:"noopener",target:"_blank","aria-label":o+" "+g.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(s)}))}else r(s)},C=window.devicePixelRatio||1,z=function(e){return(C>1?o.ceil(o.round(e*C)/C*2)/2:o.ceil(e))||0},E=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},F=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},r=["icon","color-scheme","text","size","show-count"],n=0,o=r.length;n<o;n++){var a="data-"+r[n];t[a]=e.getAttribute(a)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),f){var r=l("span");L(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var a=l("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});E(a,[0,0]),a.style.border="none";var i=function(){var r,c=a.contentWindow;try{r=c.document.body}catch(l){return void n.body.appendChild(a.parentNode.removeChild(a))}g(a,"load",i),L.call(c,r,e,(function(r){var n=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t=o.max(t,z(n.width)),r=o.max(r,z(n.height))}return[t,r]}(r);a.parentNode.removeChild(a),function(e,t,r){var n=function(){return g(e,t,n),r.apply(this,arguments)};p(e,t,n)}(a,"load",(function(){E(a,n)})),a.src="https://unpkg.com/github-buttons@2.17.0/dist/buttons.html#"+(a.name=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.encodeURIComponent);var o=[];for(var a in e){var i=e[a];null!=i&&o.push(n(a)+r+n(i))}return o.join(t)}(e)),t(a)}))};p(a,"load",i),n.body.appendChild(a)}}},140:function(e,t,r){e.exports=r(141)},141:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(j){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new M(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=z(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?p:h,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",g={};function v(){}function m(){}function b(){}var w={};w[a]=function(){return this};var y=Object.getPrototypeOf,x=y&&y(y(A([])));x&&x!==r&&n.call(x,a)&&(w=x);var k=b.prototype=v.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function r(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function z(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,z(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function A(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:t,done:!0}}return m.prototype=k.constructor=b,b.constructor=m,m.displayName=l(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},L(C.prototype),C.prototype[i]=function(){return this},e.AsyncIterator=C,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new C(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(k),l(k,c,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},142:function(e,t,r){var n,o,a;o=[],void 0===(a="function"==typeof(n=function(){var e=function(){},t={},r={},n={};function o(e,t){e=e.push?e:[e];var o,a,i,c=[],l=e.length,s=l;for(o=function(e,r){r.length&&c.push(e),--s||t(c)};l--;)a=e[l],(i=r[a])?o(a,i):(n[a]=n[a]||[]).push(o)}function a(e,t){if(e){var o=n[e];if(r[e]=t,o)for(;o.length;)o[0](e,t),o.splice(0,1)}}function i(t,r){t.call&&(t={success:t}),r.length?(t.error||e)(r):(t.success||e)(t)}function c(t,r,n,o){var a,i,l=document,s=n.async,u=(n.numRetries||0)+1,d=n.before||e,h=t.replace(/[\?|#].*$/,""),f=t.replace(/^(css|img)!/,"");o=o||0,/(^css!|\.css$)/.test(h)?((i=l.createElement("link")).rel="stylesheet",i.href=f,(a="hideFocus"in i)&&i.relList&&(a=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)?(i=l.createElement("img")).src=f:((i=l.createElement("script")).src=t,i.async=void 0===s||s),i.onload=i.onerror=i.onbeforeload=function(e){var l=e.type[0];if(a)try{i.sheet.cssText.length||(l="e")}catch(s){18!=s.code&&(l="e")}if("e"==l){if((o+=1)<u)return c(t,r,n,o)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";r(t,l,e.defaultPrevented)},!1!==d(t,i)&&l.head.appendChild(i)}function l(e,t,r){var n,o,a=(e=e.push?e:[e]).length,i=a,l=[];for(n=function(e,r,n){if("e"==r&&l.push(e),"b"==r){if(!n)return;l.push(e)}--a||t(l)},o=0;o<i;o++)c(e[o],n,r)}function s(e,r,n){var o,c;if(r&&r.trim&&(o=r),c=(o?n:r)||{},o){if(o in t)throw"LoadJS";t[o]=!0}function s(t,r){l(e,(function(e){i(c,e),t&&i({success:t,error:r},e),a(o,e)}),c)}if(c.returnPromise)return new Promise(s);s()}return s.ready=function(e,t){return o(e,(function(e){i(t,e)})),s},s.done=function(e){a(e,[])},s.reset=function(){t={},r={},n={}},s.isDefined=function(e){return e in t},s})?n.apply(t,o):n)||(e.exports=a)},146:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r(140),o=r.n(n),a=r(0),i=r.n(a),c=r(142),l=r.n(c);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u="twttr",d=u,h=!("undefined"==typeof window||!window.document||!window.document.createElement);function f(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function p(e){var t=Object(a.useRef)();return function(e,t){if(f(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!f(e[r[o]],t[r[o]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function g(e){return"object"==typeof e?s({},e):e}function v(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,o)}h&&l()("https://platform.twitter.com/widgets.js",d);var m="twdiv";function b(e,t,r,n){var i=Object(a.useState)(null),c=i[0],s=i[1],u=Object(a.useRef)(null);if(!h)return{ref:u,error:c};var f=[e,p(t),p(r)];return Object(a.useEffect)((function(){s(null);var a,i,c=!1;if(u.current){var h=function(){var a,i=(a=o.a.mark((function a(){var i,h;return o.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(u&&u.current){o.next=2;break}return o.abrupt("return");case 2:return(i=document.createElement("div")).setAttribute(m,"yes"),u.current.appendChild(i),o.prev=5,o.next=8,new Promise((function(e,t){var r=function(){return t(new Error("Could not load remote twitter widgets js"))};l.a.ready(d,{success:function(){var t=window.twttr;t&&t.widgets||r(),e(t.widgets)},error:r})}));case 8:return h=o.sent,o.next=11,h[e](g(t),i,g(r));case 11:if(o.sent||c){o.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:o.next=21;break;case 16:return o.prev=16,o.t0=o.catch(5),console.error(o.t0),s(o.t0),o.abrupt("return");case 21:if(u&&u.current){o.next=23;break}return o.abrupt("return");case 23:if(!c){o.next=26;break}return i&&i.remove(),o.abrupt("return");case 26:n&&n();case 27:case"end":return o.stop()}}),a,null,[[5,16]])})),function(){var e=this,t=arguments;return new Promise((function(r,n){var o=a.apply(e,t);function i(e){v(o,r,n,i,c,"next",e)}function c(e){v(o,r,n,i,c,"throw",e)}i(void 0)}))});return function(){return i.apply(this,arguments)}}();a=u.current,i=m,a&&a.querySelectorAll("*").forEach((function(e){e.hasAttribute(i)&&e.remove()})),h()}return function(){c=!0}}),f),{ref:u,error:c}}var w=function(e){var t=e.username,r=e.options,n=e.onLoad,o=e.renderError,a=b("createFollowButton",t,r,n),c=a.ref,l=a.error;return i.a.createElement("div",{ref:c},l&&o&&o(l))}}}]);