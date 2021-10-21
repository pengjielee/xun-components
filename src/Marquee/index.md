## Marquee

使用:

```tsx
import React, { useState } from 'react';
import { Marquee } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Marquee delay={2}>我延迟执行2秒，从右向左滚动</Marquee>
      <div style={{ marginBottom: '10px' }} />
      <Marquee direction="right">我从左向右滚动</Marquee>
      <div style={{ marginBottom: '10px' }} />
      <Marquee loop={3}>我走3次</Marquee>
      <div style={{ marginBottom: '10px' }} />
      <Marquee speed={100}>我速度是100</Marquee>
    </>
  );
};

export default Demo;
```
