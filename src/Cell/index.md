## Cell

使用:

```tsx
import React from 'react';
import { Cell } from 'xun-components';

const img =
  'https://static.zhongan.com/website/health/zarm/images/icons/state.png';

const Demo = () => (
  <div className="demo-page demo-page-button">
    <header>
      <h3 className="demo-page-title">列表项</h3>
    </header>
    <main>
      <Cell title="标题文字" description="描述文字" hasArrow={true}></Cell>
      <Cell title="标题文字" description="描述文字" hasArrow={true}></Cell>
      <Cell
        title="标题文字"
        description="描述文字"
        icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />}
        hasArrow={true}
      ></Cell>
    </main>
  </div>
);

export default Demo;
```
