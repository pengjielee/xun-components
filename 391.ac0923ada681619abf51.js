"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[391],{391:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var l=a(7363),r=a(8257),n=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(l);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,r,n=[],d=!0,o=!1;try{for(a=a.call(e);!(d=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);d=!0);}catch(e){o=!0,r=e}finally{try{d||null==a.return||a.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}t.default=function(){var e=d(l.useState("hello"),2),t=e[0],a=e[1];return n.default.createElement("div",{className:"demo-page"},n.default.createElement("header",null,n.default.createElement("h3",{className:"demo-page-title"},"文本输入框")),n.default.createElement("main",null,n.default.createElement("div",{className:"demo-block"},n.default.createElement("div",{className:"demo-title"},"默认"),n.default.createElement("div",{className:"demo-body"},n.default.createElement(r.TextArea,null))),n.default.createElement("div",{className:"demo-block"},n.default.createElement("div",{className:"demo-title"},"设置placeholder"),n.default.createElement("div",{className:"demo-body"},n.default.createElement(r.TextArea,{placeholder:"请输入内容"}))),n.default.createElement("div",{className:"demo-block"},n.default.createElement("div",{className:"demo-title"},"只读"),n.default.createElement("div",{className:"demo-body"},n.default.createElement(r.TextArea,{placeholder:"请输入内容",value:"hello world",readOnly:!0}))),n.default.createElement("div",{className:"demo-block"},n.default.createElement("div",{className:"demo-title"},"禁用"),n.default.createElement("div",{className:"demo-body"},n.default.createElement(r.TextArea,{placeholder:"请输入内容",value:"hello world",disabled:!0}))),n.default.createElement("div",{className:"demo-block"},n.default.createElement("div",{className:"demo-title"},"更多设置"),n.default.createElement("div",{className:"demo-body"},n.default.createElement(r.TextArea,{focused:!0,rows:5,maxLength:100,disabled:!1,readOnly:!1,value:t,onChange:function(e){return a(e)}})))))}}}]);