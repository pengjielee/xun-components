## TabBar

使用:

```tsx
import React, { useState } from 'react';
import { TabBar } from 'xun-components';

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1');
  return (
    <>
      <TabBar activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
        <TabBar.Item title="1" key="1"></TabBar.Item>
        <TabBar.Item title="2" key="2"></TabBar.Item>
        <TabBar.Item title="3" key="3"></TabBar.Item>
      </TabBar>
    </>
  );
};

export default Demo;
```
