## Button

使用:

```tsx
import React, { useState } from 'react';
import { Button } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button>default</Button>

      <Button type="primary">primary</Button>

      <Button type="success">success</Button>

      <Button type="warn">warn</Button>

      <Button type="danger">danger</Button>

      <div style={{ marginBottom: '10px' }} />

      <Button size="small">small</Button>
      <Button>normal</Button>
      <Button size="large">large</Button>

      <div style={{ marginBottom: '10px' }} />

      <Button disabled>disabled</Button>

      <div style={{ marginBottom: '10px' }} />

      <Button block>block</Button>

      <div style={{ marginBottom: '10px' }} />

      <Button round>round</Button>
      <Button round={10}>round(10)</Button>
    </>
  );
};

export default Demo;
```
