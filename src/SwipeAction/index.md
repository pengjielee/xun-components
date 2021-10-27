## SwipeAction

使用:

```tsx
import React, { useState } from 'react';
import { SwipeAction, List } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const numbers = [1, 2, 3, 4, 5];

  const actions = [
    {
      text: '删除',
      type: 'danger',
    },
    {
      text: '置顶',
      type: 'primary',
    },
  ];

  return (
    <>
      <List>
        {numbers.map((number) => {
          return (
            <SwipeAction actions={actions} key={number}>
              <List.Item>左滑试试 {number}</List.Item>
            </SwipeAction>
          );
        })}
      </List>
    </>
  );
};

export default Demo;
```
