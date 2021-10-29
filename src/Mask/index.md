## Mask

使用:

```tsx
import React, { useState } from 'react';
import { Mask, Cell, Button } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-mask">
      <header>
        <h3 className="demo-page-title">遮罩层</h3>
      </header>
      <main>
        <Cell
          title="显示遮罩层"
          description={
            <Button size="small" onClick={() => setVisible(true)}>
              开启
            </Button>
          }
        ></Cell>

        <Mask visible={visible} onClick={() => setVisible(false)}></Mask>
      </main>
    </div>
  );
};

export default Demo;
```
