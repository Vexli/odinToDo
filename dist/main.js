(()=>{"use strict";var e={92:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(46),r=n.n(o),a=n(758),l=n.n(a)()(r());l.push([e.id,"/* Root */\n:root{\n  --colorWhiteTrue: #FFF;\n  --colorBlackTrue: #000;\n  --colorBackgroundLight: #EDF0DA;\n  --colorBackgroundDark: #13262F;\n  --colorPrimaryLight: #FF8360;\n  --colorPrimaryDark: #840032;\n\n  --colorMode: var(--colorWhiteTrue);\n  --colorPrimary: var(--colorPrimaryLight);\n  --colorLight: var(--colorBackgroundLight);\n  --colorDark: var(--colorBackgroundDark);\n}\n\n/* Elements */\nbody{\n  background-color: var(--colorLight);\n  color: var(--colorDark);\n  font-family: Helvetica, sans-serif;\n  font-size: 3vh;\n  margin: 0px;\n  padding: 0px;\n}\n\ninput, select, textarea{\n  background-color: var(--colorLight);\n  border: solid 1px var(--colorPrimary);\n  color: var(--colorDark);\n}\n\n/* Classes */\n.addTodo{\n  text-align: center;\n}\n\n.btn:hover{\n  background-color: var(--colorPrimary);\n  border: solid 1px var(--colorLight);\n  color: var(--colorLight);\n}\n\n.container{\n  margin: 1vh;\n}\n\n.formEle {\n  margin-bottom: 1vh;\n}\n\n.nav{\n  align-items: center;\n  background-color: var(--colorPrimary);\n  color: var(--colorLight);\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 4vh;\n  height: 4vh;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 1vh;\n  width: auto;\n}\n\n.todo{\n  background-color: var(--colorLight);\n  border: solid 1px var(--colorPrimary);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  overflow: hidden;\n  margin: 1vh;\n  padding: 1vh;\n}\n",""]);const c=l},758:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(l[i]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&l[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},46:e=>{e.exports=function(e){return e[1]}},278:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},l=[],c=0;c<e.length;c++){var i=e[c],s=o.base?i[0]+o.base:i[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var p=n(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}l.push(d)}return l}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<a.length;l++){var c=n(a[l]);t[c].references--}for(var i=o(e,r),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=i}}},547:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},593:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},604:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},391:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},784:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(278),t=n.n(e),o=n(391),r=n.n(o),a=n(547),l=n.n(a),c=n(604),i=n.n(c),s=n(593),u=n.n(s),d=n(784),p=n.n(d),f=n(92),v={};v.styleTagTransform=p(),v.setAttributes=i(),v.insert=l().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=u(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const y=[];function m(e){return document.getElementById(e.id)}function g(e){console.log(e.style.display),"none"===e.style.display?e.style.display="block":e.style.display="none"}function h(e){return e.toISOString().split("T")[0]}let b=-1;const P=()=>b++;P();const x=/^(?!.*-(00|0[1-9])-00)\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;function k(e,t,n){e[t]=n}function D(e,t,n,o,r,a){let l=function(e){return{titel:e}}(t);var c,i;(function(e,t){let n=function(e,t){let n=document.getElementById(e),o=document.createElement("div");return n.prepend(o),o}(e);n.textContent=t.titel,n.classList.add("todo"),function(e,t,n){let o=P();t.setAttribute("id",o),e.id=o}(t,n)})(e,l),function(e,t){if(!0!==x.test(t))return"Invalid Date";k(e,"date",t),function(e,t){let n=document.createElement("div");var o;n.innerText=t,o=n,m(e).append(o)}(e,t)}(l,n),k(l,"desc",o),i=r,m(c=l).classList.add(`prio-${i}`),k(c,"prio",i),function(e,t){k(e,"project",t)}(l,a),y.push(l)}const L=new Date,w=document.getElementById("todoDate"),E=document.getElementById("addTodo"),T=document.getElementById("todoNew"),B=document.getElementById("search");T.style.display="none",E.style.display="block",function(e,t,n,o){let r=h(t),a=h(function(e,t){const n=new Date(e);return n.setDate(n.getDate()-365),n}(t)),l=h(function(e,t){const n=new Date(e);return n.setDate(n.getDate()+365),n}(t));e.setAttribute("value",r),e.setAttribute("min",a),e.setAttribute("max",l)}(w,L),document.addEventListener("click",(e=>{"addTodo"==e.target.id?(g(E),g(T)):1==e.target.classList.contains("todo")||"nav"==e.target.id&&function(){const e=document.querySelector(":root"),t=getComputedStyle(e),n=t.getPropertyValue("--colorMode"),o=t.getPropertyValue("--colorBlackTrue"),r=t.getPropertyValue("--colorWhiteTrue"),a=t.getPropertyValue("--colorBackgroundDark"),l=t.getPropertyValue("--colorBackgroundLight"),c=t.getPropertyValue("--colorPrimaryDark"),i=t.getPropertyValue("--colorPrimaryLight");n==r?(console.log("Activate Dark Mode"),e.style.setProperty("--colorMode",o),e.style.setProperty("--colorLight",a),e.style.setProperty("--colorDark",l),e.style.setProperty("--colorPrimary",c)):n==o&&(console.log("Activate Light Mode"),e.style.setProperty("--colorMode",r),e.style.setProperty("--colorLight",l),e.style.setProperty("--colorDark",a),e.style.setProperty("--colorPrimary",i))}()})),B.addEventListener("submit",(function(e){e.preventDefault();let t=B.elements.attribute.value,n=B.elements.value.value;console.log(y);let o=function(e,t,n){let o=[];for(let r=0;r<e.length;r++)e[r][t]==n&&(console.log(e[r][t],n),o.push(e[r]),console.log(o));return o}(y,t,n);console.log(o),function(e,t){for(let n=0;n<e.length;n++){let o=m(e[n]);console.log(e,t,t.includes(e[n])),t.includes(e[n])?o.style.display="flex":o.style.display="none"}}(y,o)})),T.addEventListener("submit",(function(e){e.preventDefault(),D("container",T.elements.todoTitel.value,T.elements.todoDate.value,T.elements.todoDesc.value,T.elements.todoPriority.value,T.elements.todoProject.value),T.style.display="none",E.style.display="block"}))})()})();