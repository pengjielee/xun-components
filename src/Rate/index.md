## Rate

使用:

```tsx
import React, { useState } from 'react';
import { Rate } from 'xun-components';

const Demo = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(3);
  return (
    <>
      <Rate value={value1} onChange={(value1) => setValue1(value1)}></Rate>
      <div style={{ marginBottom: '15px' }} />
      <Rate
        value={value2}
        count={10}
        allowHalf
        onChange={(value2) => setValue2(value2)}
      ></Rate>
      <div style={{ marginBottom: '15px' }} />
      <Rate
        value={value3}
        onChange={(value3) => setValue3(value3)}
        disabled
      ></Rate>
      <div style={{ marginBottom: '15px' }} />
    </>
  );
};

export default Demo;
```
