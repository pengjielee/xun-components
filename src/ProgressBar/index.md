## ProgressBar

使用:

```tsx
import React from 'react';
import { ProgressBar } from 'xun-components';

const Demo = () => (
  <>
    <ProgressBar percent={10}></ProgressBar>
    <br />
    <ProgressBar percent={20} strokeWidth="4"></ProgressBar>
    <br />
    <ProgressBar percent={30} strokeWidth="4" strokeColor="red"></ProgressBar>
    <br />
    <ProgressBar percent={40} strokeWidth="8"></ProgressBar>
    <br />
    <ProgressBar percent={100} strokeWidth="10"></ProgressBar>
  </>
);

export default Demo;
```
