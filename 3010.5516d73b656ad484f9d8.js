"use strict";(self.webpackChunkxun_components_site=self.webpackChunkxun_components_site||[]).push([[3010],{3010:(e,n,i)=>{i.r(n),i.d(n,{default:()=>a});const a='import React from \'react\';\nimport { FilePicker } from \'xun-components\';\n\nconst Demo = () => {\n  const handleChange = (files) => {\n    console.log(files);\n  };\n  return (\n    <div className="demo-page demo-page-filepicker">\n      <header>\n        <h3 className="demo-page-title">文件选择器</h3>\n      </header>\n      <main>\n        <div className="demo-block">\n          <div className="demo-title">默认</div>\n          <FilePicker onChange={handleChange}></FilePicker>\n        </div>\n        <div className="demo-block">\n          <div className="demo-title">禁用状态</div>\n          <FilePicker disabled={true} onChange={handleChange}></FilePicker>\n        </div>\n        <div className="demo-block">\n          <div className="demo-title">只能选择图片</div>\n          <FilePicker accept="image/*" onChange={handleChange}></FilePicker>\n        </div>\n        <div className="demo-block">\n          <div className="demo-title">支持选取多个文件 </div>\n          <FilePicker multiple onChange={handleChange}></FilePicker>\n        </div>\n        <div className="demo-block">\n          <div className="demo-title">定制中间内容</div>\n          <FilePicker multiple onChange={handleChange}>\n            选择图片\n          </FilePicker>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;\n'}}]);