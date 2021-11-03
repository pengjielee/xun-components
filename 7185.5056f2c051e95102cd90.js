"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7185],{7185:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});const i="import React, { useState } from 'react';\nimport { List } from 'xun-components';\n\nconst img =\n  'https://static.zhongan.com/website/health/zarm/images/icons/state.png';\n\nconst users = [\n  {\n    avatar:\n      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n    name: 'Novalee Spicer',\n    description: 'Deserunt dolor ea eaque eos',\n  },\n  {\n    avatar:\n      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',\n    name: 'Sara Koivisto',\n    description: 'Animi eius expedita, explicabo',\n  },\n  {\n    avatar:\n      'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n    name: 'Marco Gregg',\n    description: 'Ab animi cumque eveniet ex harum nam odio omnis',\n  },\n  {\n    avatar:\n      'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n    name: 'Edith Koenig',\n    description: 'Commodi earum exercitationem id numquam vitae',\n  },\n];\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n\n  const renderUsers = () => {\n    return users.map((user) => {\n      return (\n        <List.Item\n          icon={\n            <img\n              alt=\"\"\n              src={user.avatar}\n              style={{ width: 40, height: 40, borderRadius: '20px' }}\n            />\n          }\n          description={user.description}\n        >\n          {user.name}\n        </List.Item>\n      );\n    });\n  };\n\n  return (\n    <div style={{ margin: '0 10px' }}>\n      <List>\n        <List.Item>1</List.Item>\n        <List.Item>2</List.Item>\n        <List.Item clickable onClick={() => alert('click')}>\n          3\n        </List.Item>\n      </List>\n\n      <List>\n        <List.Item title=\"标题1\">1</List.Item>\n        <List.Item\n          title=\"标题2\"\n          icon={<img alt=\"\" src={img} style={{ width: 30, height: 30 }} />}\n        >\n          2\n        </List.Item>\n        <List.Item clickable onClick={() => alert('click')}>\n          3\n        </List.Item>\n      </List>\n\n      <List>{renderUsers()}</List>\n    </div>\n  );\n};\n\nexport default Demo;\n"}}]);