## Tag

使用:

```tsx
import React, { useState } from 'react';
import { Tag } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Tag>default</Tag>&nbsp;
      <Tag color="primary">primary</Tag>&nbsp;
      <Tag color="success">success</Tag>&nbsp;
      <Tag color="warning">warning</Tag>&nbsp;
      <Tag color="danger">danger</Tag>&nbsp;
      <Tag color="info">info</Tag>&nbsp;
      <div style={{ marginBottom: '10px' }} />
      <Tag color="red">red</Tag>&nbsp;
      <Tag color="green">green</Tag>&nbsp;
      <Tag color="blue">blue</Tag>&nbsp;
      <div style={{ marginBottom: '10px' }} />
      <Tag color="red" fill="outline">
        red
      </Tag>&nbsp;
      <Tag color="green" fill="outline">
        green
      </Tag>
      &nbsp;
      <Tag color="blue" fill="outline">
        blue
      </Tag>
      &nbsp;
      <Tag color="blue" round>
        blue
      </Tag>
    </>
  );
};

export default Demo;
```
