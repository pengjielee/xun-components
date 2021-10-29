## Marquee

使用:

```tsx
import React, { useState } from 'react';
import { Marquee, Cell } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-button">
      <header>
        <h3 className="demo-page-title">文字滚动</h3>
      </header>
      <main>
        <Cell>
          <Marquee delay={2}>我延迟执行2秒，从右向左滚动</Marquee>
        </Cell>

        <Cell>
          <Marquee direction="right">我从左向右滚动</Marquee>
        </Cell>

        <Cell>
          <Marquee loop={3}>我走3次</Marquee>
        </Cell>

        <Cell>
          <Marquee speed={100}>我速度是100</Marquee>
        </Cell>
      </main>
    </div>
  );
};

export default Demo;
```
