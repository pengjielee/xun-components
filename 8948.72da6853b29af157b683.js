"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8948],{8948:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=a(7363),l=a(8257),n=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(r);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,l,n=[],o=!0,u=!1;try{for(a=a.call(e);!(o=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{o||null==a.return||a.return()}finally{if(u)throw l}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(){var e=o(r.useState("1"),2),t=e[0],a=e[1];return n.default.createElement("div",{className:"demo-page demo-page-radio"},n.default.createElement("header",null,n.default.createElement("h3",{className:"demo-page-title"},"单选框")),n.default.createElement("main",null,n.default.createElement("div",{className:"demo-block"},n.default.createElement("div",{className:"demo-title"},"默认"),n.default.createElement(l.Radio,null,"Radio")),n.default.createElement("div",{className:"demo-block"},n.default.createElement("div",{className:"demo-title"},"选项组"),n.default.createElement(l.Radio.Group,{value:t,onChange:function(e){console.log(e),a(e)}},n.default.createElement(l.Radio,{value:"1"},"Radio1"),n.default.createElement(l.Radio,{value:"2"},"Radio2")))))}}}]);