"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8625],{8625:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=r(7363),u=r(8257),a=function(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}(n);function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,u,a=[],l=!0,o=!1;try{for(r=r.call(t);!(l=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);l=!0);}catch(t){o=!0,u=t}finally{try{l||null==r.return||r.return()}finally{if(o)throw u}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=function(){var t=l(n.useState(!1),2);t[0],t[1];var e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N"];return e=function(t){return t.map((function(t){return"string"==typeof t?{label:t,value:t}:t}))}(e),a.default.createElement(a.default.Fragment,null,a.default.createElement(u.PickerView,{columns:e},"PickerView"))}}}]);