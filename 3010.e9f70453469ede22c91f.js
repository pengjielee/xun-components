"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3010],{3010:(e,r,n)=>{n.r(r),n.d(r,{default:()=>o});const o='import React from \'react\';\nimport { Error } from \'xun-components\';\n\nconst Demo = () => (\n  <div className="demo-page demo-page-error">\n    <header>\n      <h3 className="demo-page-title">错误</h3>\n    </header>\n    <main>\n      <div className="demo-block white">\n        <Error description="默认错误"></Error>\n      </div>\n\n      <div className="demo-block white">\n        <Error type="database" description="数据库错误"></Error>\n      </div>\n\n      <div className="demo-block white">\n        <Error type="wifi" description="网络错误"></Error>\n      </div>\n      <div className="demo-block white">\n        <Error type="face" description="出错了"></Error>\n      </div>\n      <div className="demo-block white">\n        <Error type="location" description="位置错误"></Error>\n      </div>\n      <div className="demo-block white">\n        <Error\n          description="自定义描述信息文字样式"\n          descStyle={{ fontSize: \'20px\', color: \'red\' }}\n        ></Error>\n      </div>\n    </main>\n  </div>\n);\n\nexport default Demo;\n'}}]);