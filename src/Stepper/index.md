## Stepper

使用:

```tsx
import React, { useState } from 'react';
import { Stepper } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Stepper value={2} min={0} max={5}></Stepper>
    </>
  );
};

export default Demo;
```
