## ActionSheet

使用:

```tsx
import React, { useState } from 'react';
import { ActionSheet } from 'xun-components';

const actions = [
  {
    text: '操作一',
    onClick: () => alert('点击操作一'),
  },
  {
    text: '操作二',
    onClick: () => alert('点击操作二'),
  },
  {
    text: '操作三',
    onClick: () => alert('点击操作三'),
  },
];

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(true)}>show</button>
      <ActionSheet
        title="请选择要执行的操作"
        actions={actions}
        visible={visible}
        onMaskClick={() => setVisible(false)}
        onCancel={() => alert('cancel')}
        cancelText="取消"
      ></ActionSheet>
    </>
  );
};

export default Demo;
```
