## AreaPicker

使用:

```tsx
import React, { useState } from 'react';
import { AreaPicker, Cell, Button } from 'xun-components';
import '../assets/styles/demo.scss';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const [province, setProvince] = useState(null);

  const handleConfirm = (selectedProvince) => {
    setProvince(selectedProvince.name);
    setVisible(false);
  };

  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">动作面板</h3>
      </header>
      <main>
        <Cell
          title="选择省"
          description={
            <Button size="small" onClick={() => setVisible(true)}>
              {province || '选择'}
            </Button>
          }
        />
        <AreaPicker
          visible={visible}
          province={province}
          onConfirm={handleConfirm}
        ></AreaPicker>
      </main>
    </div>
  );
};

export default Demo;
```
