"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4315],{4315:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var l=n(7363),r=n(8257),i=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(l);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,i=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(i.push(l.value),!t||i.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}t.default=function(){l.useRef(null);var e=o(l.useState(!1),2),t=e[0],n=e[1],a=o(l.useState(!1),2),u=a[0],c=a[1],f=o(l.useState(!1),2),s=f[0],d=f[1],p=o(l.useState(!1),2),m=p[0],h=p[1];return i.default.createElement("div",{className:"demo-page"},i.default.createElement("header",null,i.default.createElement("h3",{className:"demo-page-title"},"弹出层")),i.default.createElement("main",null,i.default.createElement("div",{className:"demo-block white"},i.default.createElement(r.Cell,{title:"顶部弹出",description:i.default.createElement(r.Button,{size:"small",onClick:function(){return n(!0)}},"开启")}),i.default.createElement(r.Cell,{title:"底部弹出",description:i.default.createElement(r.Button,{size:"small",onClick:function(){return c(!0)}},"开启")}),i.default.createElement(r.Cell,{title:"左侧弹出",description:i.default.createElement(r.Button,{size:"small",onClick:function(){return d(!0)}},"开启")}),i.default.createElement(r.Cell,{title:"右侧弹出",description:i.default.createElement(r.Button,{size:"small",onClick:function(){return h(!0)}},"开启")}),i.default.createElement(r.Cell,{title:"设定container",description:i.default.createElement(r.Button,{size:"small",onClick:function(){return h(!0)}},"开启")})),i.default.createElement("div",{id:"container"}),i.default.createElement(r.Popup,{visible:t,position:"top",onMaskClick:function(){return n(!1)},bodyStyle:{height:"40vh"}},"Popup Top"),i.default.createElement(r.Popup,{visible:u,position:"bottom",onMaskClick:function(){return c(!1)},bodyStyle:{height:"40vh"}},"Popup Bottom"),i.default.createElement(r.Popup,{visible:s,position:"left",onMaskClick:function(){return d(!1)},bodyStyle:{width:"40vh"}},"Popup Left"),i.default.createElement(r.Popup,{visible:m,position:"right",onMaskClick:function(){return h(!1)},bodyStyle:{width:"40vh"}},"Popup Right"),i.default.createElement(r.Popup,{visible:m,position:"right",onMaskClick:function(){return h(!1)},bodyStyle:{width:"40vh"},container:document.querySelector("#container")},"Popup container")))}}}]);