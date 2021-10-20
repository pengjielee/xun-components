## BackToTop

使用:

```tsx
import React, { useState } from 'react';
import { BackToTop } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(
      <p
        key={+i}
        style={{
          fontSize: '15px',
          padding: '8px 10px',
          borderBottom: '1px solid #ddd',
        }}
      >
        第 {i + 1} 行
      </p>,
    );
  }
  return (
    <>
      {list}
      <BackToTop>Up</BackToTop>
    </>
  );
};

export default Demo;
```
