"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2662],{2662:(n,t,e)=>{e.r(t),e.d(t,{default:()=>o});const o='import React, { useState } from \'react\';\nimport { Button } from \'xun-components\';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className="demo-page demo-page-button">\n      <header>\n        <h3 className="demo-page-title">按钮</h3>\n      </header>\n      <main>\n        <div className="demo-block">\n          <div className="demo-title">按钮类型</div>\n          <Button type="primary">primary</Button>\n          <Button type="secondary">secondary</Button>\n\n          <Button type="success">success</Button>\n\n          <Button type="warning">warning</Button>\n\n          <Button type="danger">danger</Button>\n          <Button type="info">info</Button>\n        </div>\n\n        <div className="demo-block">\n          <div className="demo-title">按钮尺寸</div>\n          <Button size="small">small</Button>\n          <Button>normal</Button>\n          <Button size="large">large</Button>\n        </div>\n\n        <div className="demo-block">\n          <div className="demo-title">禁用按钮</div>\n          <Button disabled>disabled</Button>\n        </div>\n\n        <div className="demo-block">\n          <div className="demo-title">块状按钮</div>\n\n          <Button type="primary" block>\n            block\n          </Button>\n        </div>\n\n        <div className="demo-block">\n          <div className="demo-title">圆角按钮</div>\n          <Button round>round</Button>\n          <Button round={10}>round(10)</Button>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;\n'}}]);