## Error

使用:

```tsx
import React from 'react';
import { Error } from 'xun-components';

const Demo = () => (
  <>
    <Error></Error>
    <Error type="database" description="出错了"></Error>
    <Error type="wifi" description="出错了"></Error>
    <Error type="face" description="出错了"></Error>
    <Error type="location" description="出错了"></Error>
    <Error
      type="face"
      description="出错了"
      descStyle={{ fontSize: '10px' }}
    ></Error>
    <Error
      description="出错了"
      descStyle={{ fontSize: '10px', color: 'red' }}
    ></Error>
  </>
);

export default Demo;
```
