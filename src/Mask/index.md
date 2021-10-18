## Mask

使用:

```tsx
import React, { useState } from 'react';
import { Mask } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(true)}>显示遮罩层</button>
      <Mask visible={visible} onClick={() => setVisible(false)}></Mask>
    </>
  );
};

export default Demo;
```
