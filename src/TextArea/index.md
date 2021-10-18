## TextArea

使用:

```tsx
import React, { useState } from 'react';
import { TextArea } from 'xun-components';

const Demo = () => {
  const [value, setValue] = useState('hello');

  return (
    <TextArea
      focused={true}
      rows={10}
      maxLength={500}
      disabled={false}
      readOnly={false}
      value={value}
      onChange={setValue}
    ></TextArea>
  );
};

export default Demo;
```
