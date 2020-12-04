module.exports=(()=>{"use strict";var e={990:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});const r=require("react");var i=t.n(r),o=t(379),a=t.n(o),c=t(424);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}a()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;const u=function(e){var n,t,o=e.width,a=e.height,c=function(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,["width","height"]),u=(n=(0,r.useState)(!0),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(n,t)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=u[0],d=u[1],m=(0,r.useRef)(null),f=(0,r.useRef)(null);function p(){if(console.log(window.innerWidth,window.innerHeight),window.innerWidth&&window.innerWidth<o)d(!0);else{if(!(window.innerHeight&&window.innerHeight<a))return void d(!1);d(!0)}var e=Math.floor(300*a/o);m.current.style.height="".concat(e,"px"),m.current.style.width="".concat(300,"px");var n=300*window.innerWidth/o,t=e*window.innerHeight/a;f.current.style.height="".concat(t,"px"),f.current.style.width="".concat(n,"px")}return(0,r.useEffect)((function(){p(),window.addEventListener("resize",p)})),i().createElement("div",{className:"minimum-window-size-container"},i().createElement("div",{className:"minimum-window-size-hide-content",hidden:!l},i().createElement("div",{className:"minimum-window-size-caption"},"Adjust browser size"),i().createElement("div",{className:"minimum-window-size-sub-caption"},"This app requires a larger screen size"),i().createElement("div",{className:"minimum-window-size-present-container"},i().createElement("div",{className:"minimum-window-size-caption-required"},"Required size"),i().createElement("div",{className:"minimum-window-size-box-required",ref:m},i().createElement("div",{className:"minimum-window-size-box-current",ref:f},i().createElement("div",{className:"minimum-window-size-caption-current"},"Browser size"))))),i().createElement("div",{className:"minimum-window-size-real-content",hidden:l},c.children))}},424:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".minimum-window-size-hide-content {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.minimum-window-size-hide-content[hidden] {\n    display: none;\n}\n\n.minimum-window-size-caption {\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n.minimum-window-size-sub-caption {\n    color: gray;\n}\n\n.minimum-window-size-present-container {\n    margin-top: 50px;\n    text-align: center;\n}\n\n.minimum-window-size-caption-current,\n.minimum-window-size-caption-required {\n    font-size: 0.8em;\n    color: gray;\n}\n\n.minimum-window-size-caption-current {\n    color: whitesmoke;\n}\n\n.minimum-window-size-box-required {\n    background-color: darkred;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.minimum-window-size-box-current {\n    background-color: darkgreen;\n}",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],s=n.base?c[0]+n.base:c[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=a(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:l,updater:w(m,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function m(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function w(e,n){var t,r,i;if(n.singleton){var o=p++;t=f||(f=s(n)),r=d.bind(null,t,o,!1),i=d.bind(null,t,o,!0)}else t=s(n),r=m.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var s=c(e,n),u=0;u<t.length;u++){var l=a(t[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=s}}}}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}return t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(990)})();