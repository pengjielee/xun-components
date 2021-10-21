## Tabs

使用:

```tsx
import React, { useState } from 'react';
import { Tabs } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Tabs>
        <Tabs.TabPanel title="1">1</Tabs.TabPanel>
        <Tabs.TabPanel title="2">2</Tabs.TabPanel>
        <Tabs.TabPanel title="3">4</Tabs.TabPanel>
        <Tabs.TabPanel title="4">5</Tabs.TabPanel>
      </Tabs>
    </>
  );
};

export default Demo;
```
