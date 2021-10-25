## Empty

使用:

```tsx
import React from 'react';
import { Empty } from 'xun-components';
import '../assets/styles/demo.scss';

const Demo = () => (
  <div className="demo-page demo-page-button">
    <header>
      <h3 className="demo-page-title">按钮</h3>
    </header>
    <main>
      <Empty></Empty>
      <Empty description="暂无数据" descStyle={{ fontSize: '10px' }}></Empty>
      <Empty
        description="暂无数据"
        descStyle={{ fontSize: '10px', color: 'red' }}
      ></Empty>
      <Empty description="暂无数据" imageStyle={{ width: '120px' }}></Empty>
    </main>
  </div>
);

export default Demo;
```
