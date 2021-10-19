## Progress

使用:

```tsx
import React from 'react';
import { Progress } from 'xun-components';

const Demo = () => (
  <>
    <Progress percent={10}></Progress>
    <Progress percent={20} strokeWidth={2}></Progress>
    <Progress percent={30} strokeWidth={2} strokeColor="blue"></Progress>
    <Progress percent={40}>hello</Progress>
  </>
);

export default Demo;
```
