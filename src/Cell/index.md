## Cell

使用:

```tsx
import React from 'react';
import { Cell } from 'xun-components';

const img =
  'https://static.zhongan.com/website/health/zarm/images/icons/state.png';

const Demo = () => (
  <>
    <Cell title="标题文字" description="描述文字" hasArrow={true}></Cell>
    <Cell title="标题文字" description="描述文字" hasArrow={true}></Cell>
    <Cell
      title="标题文字"
      description="描述文字"
      icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />}
      hasArrow={true}
    ></Cell>
  </>
);

export default Demo;
```
