"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2548],{2548:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});const d='import React, { useState } from \'react\';\nimport { Radio } from \'xun-components\';\n\nconst Demo = () => {\n  const [value, setValue] = useState(\'1\');\n\n  const handleChange = (value) => {\n    console.log(value);\n    setValue(value);\n  };\n  return (\n    <div className="demo-page demo-page-radio">\n      <header>\n        <h3 className="demo-page-title">单选框</h3>\n      </header>\n      <main>\n        <div className="demo-block">\n          <div className="demo-title">默认</div>\n          <div className="demo-body white">\n            <Radio>Radio</Radio>\n          </div>\n        </div>\n        <div className="demo-block">\n          <div className="demo-title">选项组</div>\n          <div className="demo-body white">\n            <Radio.Group value={value} onChange={handleChange}>\n              <Radio value="1">Radio1</Radio>\n              <Radio value="2">Radio2</Radio>\n            </Radio.Group>\n          </div>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;\n'}}]);