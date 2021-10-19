## Empty

使用:

```tsx
import React from 'react';
import { Empty } from 'xun-components';

const Demo = () => (
  <>
    <Empty></Empty>
    <Empty description="暂无数据" descStyle={{ fontSize: '10px' }}></Empty>
    <Empty
      description="暂无数据"
      descStyle={{ fontSize: '10px', color: 'red' }}
    ></Empty>
    <Empty description="暂无数据" imageStyle={{ width: '120px' }}></Empty>
  </>
);

export default Demo;
```
