"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2090],{2090:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(7363),o=n(8257),u=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(r);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t,n,r,o,u,i){try{var a=e[u](i),f=a.value}catch(e){return void n(e)}a.done?t(f):Promise.resolve(f).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function i(e){a(u,r,o,i,f,"next",e)}function f(e){a(u,r,o,i,f,"throw",e)}i(void 0)}))}}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}try{var s=Object.defineProperty({},"passive",{get:function(){}});window.addEventListener("test",null,s)}catch(r){}var d=function(e){return new Promise((function(t){return setTimeout(t,e)}))};["undefined"==typeof window?"undefined":i(window),"undefined"==typeof document?"undefined":i(document)].includes("undefined"),t.default=function(){var e=function(){for(var e=[],t=0;t<100;t++)e.push(Date.now()+t);return e},t=c(r.useState(e()),2),n=t[0],i=t[1];return u.default.createElement("div",{className:"demo-page-pull"},u.default.createElement(o.PullToRefresh,{onRefresh:f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(3e3);case 2:i(e());case 3:case"end":return t.stop()}}),t)}))),completeDelay:100},n.map((function(e){return u.default.createElement(o.Cell,{key:e},"第 ",e," 行")}))))}}}]);