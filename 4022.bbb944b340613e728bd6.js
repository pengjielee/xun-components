"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4022],{4022:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var l=r(7363),n=r(8257),a=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(l);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l,n,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(l=r.next()).done)&&(a.push(l.value),!t||a.length!==t);u=!0);}catch(e){i=!0,n=e}finally{try{u||null==r.return||r.return()}finally{if(i)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}t.default=function(){var e=u(l.useState(!1),2);e[0],e[1];var t=u(l.useState(1),2),r=t[0],i=t[1];return a.default.createElement("div",{className:"demo-page"},a.default.createElement("header",null,a.default.createElement("h3",{className:"demo-page-title"},"步进器")),a.default.createElement("main",null,a.default.createElement(n.Cell,{title:"基本",description:a.default.createElement(n.Stepper,{value:r,onChange:i})}),a.default.createElement(n.Cell,{title:"默认值",description:a.default.createElement(n.Stepper,{defaultValue:10})}),a.default.createElement(n.Cell,{title:"设置上下限（-3 - 3）",description:a.default.createElement(n.Stepper,{min:-3,max:3})}),a.default.createElement(n.Cell,{title:"设置步长",description:a.default.createElement(n.Stepper,{step:5})}),a.default.createElement(n.Cell,{title:"禁用",description:a.default.createElement(n.Stepper,{disabled:!0})}),a.default.createElement(n.Cell,{title:"禁用输入",description:a.default.createElement(n.Stepper,{disabledInput:!0})})))}}}]);