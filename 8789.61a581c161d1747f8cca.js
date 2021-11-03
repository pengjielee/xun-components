"use strict";(self.webpackChunkxun_components_site=self.webpackChunkxun_components_site||[]).push([[8789],{8789:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});const i="import React, { useState } from 'react';\nimport { ActionSheet, Cell, Button } from 'xun-components';\n\nconst actions = [\n  {\n    text: '操作一',\n    onClick: () => alert('点击操作一'),\n  },\n  {\n    text: '操作二',\n    disabled: true,\n    onClick: () => alert('点击操作二'),\n  },\n  {\n    text: '操作三',\n    type: 'success',\n    onClick: () => alert('点击操作三'),\n  },\n  {\n    text: '操作四',\n    type: 'failure',\n    onClick: () => alert('点击操作四'),\n  },\n];\n\nconst Demo = () => {\n  const [visible1, setVisible1] = useState(false);\n  const [visible2, setVisible2] = useState(false);\n  const [visible3, setVisible3] = useState(false);\n\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">动作面板</h3>\n      </header>\n      <main>\n        <Cell\n          title=\"基本\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible1(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"取消按钮\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible2(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"取消按钮和标题\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible3(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <ActionSheet\n          actions={actions}\n          visible={visible1}\n          onMaskClick={() => setVisible1(false)}\n          onCancel={() => alert('cancel')}\n        ></ActionSheet>\n\n        <ActionSheet\n          actions={actions}\n          visible={visible2}\n          onMaskClick={() => setVisible2(false)}\n          onCancel={() => alert('cancel')}\n          cancelText=\"取消\"\n        ></ActionSheet>\n\n        <ActionSheet\n          title=\"请选择要执行的操作\"\n          actions={actions}\n          visible={visible3}\n          onMaskClick={() => setVisible3(false)}\n          onCancel={() => alert('cancel')}\n          cancelText=\"取消\"\n        ></ActionSheet>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;\n"}}]);