## Popup

使用:

```tsx
import React, { useState } from 'react';
import { Popup } from 'xun-components';

const Demo = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  return (
    <>
      <button onClick={() => setVisible1(true)}>top</button>
      <br />
      <button onClick={() => setVisible2(true)}>bottom</button>
      <br />
      <button onClick={() => setVisible3(true)}>left</button>
      <br />
      <button onClick={() => setVisible4(true)}>right</button>
      <br />
      <Popup
        visible={visible1}
        position="top"
        onMaskClick={() => setVisible1(false)}
      >
        Popup
      </Popup>
      <Popup
        visible={visible2}
        position="bottom"
        onMaskClick={() => setVisible2(false)}
      >
        Popup
      </Popup>
      <Popup
        visible={visible3}
        position="left"
        onMaskClick={() => setVisible3(false)}
      >
        Popup
      </Popup>
      <Popup
        visible={visible4}
        position="right"
        onMaskClick={() => setVisible4(false)}
      >
        Popup
      </Popup>
    </>
  );
};

export default Demo;
```
