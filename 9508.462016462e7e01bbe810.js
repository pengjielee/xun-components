"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9508],{9508:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});const s="import React, { useState } from 'react';\nimport { BackToTop, Cell } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  const list = [];\n  for (let i = 0; i < 100; i++) {\n    list.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n  }\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">返回顶部</h3>\n      </header>\n      <main>\n        {list}\n        <BackToTop>Up</BackToTop>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;\n"}}]);