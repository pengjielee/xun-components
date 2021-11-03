"use strict";(self.webpackChunkxun_components_site=self.webpackChunkxun_components_site||[]).push([[9322],{9322:(e,n,a)=>{a.r(n),a.d(n,{default:()=>l});const l='import React, { useState } from \'react\';\nimport { TextArea } from \'xun-components\';\n\nconst Demo = () => {\n  const [value, setValue] = useState(\'hello\');\n\n  return (\n    <div className="demo-page">\n      <header>\n        <h3 className="demo-page-title">文本输入框</h3>\n      </header>\n      <main>\n        <div className="demo-block">\n          <div className="demo-title">默认</div>\n          <TextArea></TextArea>\n        </div>\n        <div className="demo-block">\n          <div className="demo-title">设置placeholder</div>\n          <TextArea placeholder="请输入内容"></TextArea>\n        </div>\n        <div className="demo-block">\n          <div className="demo-title">只读</div>\n          <TextArea\n            placeholder="请输入内容"\n            value="hello world"\n            readOnly={true}\n          ></TextArea>\n        </div>\n        <div className="demo-block">\n          <div className="demo-title">禁用</div>\n          <TextArea\n            placeholder="请输入内容"\n            value="hello world"\n            disabled={true}\n          ></TextArea>\n        </div>\n\n        <div className="demo-block">\n          <div className="demo-title">更多设置</div>\n          <TextArea\n            focused={true}\n            rows={5}\n            maxLength={100}\n            disabled={false}\n            readOnly={false}\n            value={value}\n            onChange={(value) => setValue(value)}\n          ></TextArea>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;\n'}}]);