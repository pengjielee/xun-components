## Radio

使用:

```tsx
import React, { useState } from 'react';
import { Radio } from 'xun-components';

const Demo = () => {
  const [value, setValue] = useState('1');

  const handleChange = (value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <>
      <Radio>Radio</Radio>
      <Radio.Group value={value} onChange={handleChange}>
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </Radio.Group>
    </>
  );
};

export default Demo;
```
