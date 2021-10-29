## ActionSheet

使用:

```tsx
import React, { useState } from 'react';
import { ActionSheet, Cell, Button } from 'xun-components';

const actions = [
  {
    text: '操作一',
    onClick: () => alert('点击操作一'),
  },
  {
    text: '操作二',
    disabled: true,
    onClick: () => alert('点击操作二'),
  },
  {
    text: '操作三',
    type: 'success',
    onClick: () => alert('点击操作三'),
  },
  {
    text: '操作四',
    type: 'failure',
    onClick: () => alert('点击操作四'),
  },
];

const Demo = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">动作面板</h3>
      </header>
      <main>
        <Cell
          title="基本"
          description={
            <Button size="small" onClick={() => setVisible1(true)}>
              开启
            </Button>
          }
        ></Cell>

        <Cell
          title="取消按钮"
          description={
            <Button size="small" onClick={() => setVisible2(true)}>
              开启
            </Button>
          }
        ></Cell>

        <Cell
          title="取消按钮和标题"
          description={
            <Button size="small" onClick={() => setVisible3(true)}>
              开启
            </Button>
          }
        ></Cell>

        <ActionSheet
          actions={actions}
          visible={visible1}
          onMaskClick={() => setVisible1(false)}
          onCancel={() => alert('cancel')}
        ></ActionSheet>

        <ActionSheet
          actions={actions}
          visible={visible2}
          onMaskClick={() => setVisible2(false)}
          onCancel={() => alert('cancel')}
          cancelText="取消"
        ></ActionSheet>

        <ActionSheet
          title="请选择要执行的操作"
          actions={actions}
          visible={visible3}
          onMaskClick={() => setVisible3(false)}
          onCancel={() => alert('cancel')}
          cancelText="取消"
        ></ActionSheet>
      </main>
    </div>
  );
};

export default Demo;
```

## 参数

| 属性        | 说明                                       | 类型         | 默认值  |
| ----------- | ------------------------------------------ | ------------ | ------- |
| visible     | 显示/隐藏                                  | `boolean`    | `false` |
| actions     | 操作选项列表                               | `Action[]`   | `[]`    |
| title       | 显示标题                                   | `string`     | -       |
| cancelText  | 取消按钮文字，如果设置为空则不显示取消按钮 | `string`     | -       |
| onCancel    | 点击取消时触发                             | `() => void` | -       |
| onMaskClick | 点击遮罩层时触发                           | `() => void` | -       |

### Action

| 属性     | 说明           | 类型               | 默认值                                        |
| -------- | -------------- | ------------------ | --------------------------------------------- |
| key      | 唯一标记       | `string \| number` | -                                             |
| text     | 内容           | `string`           | -                                             |
| disabled | 是否为禁用状态 | `boolean`          | `false`                                       |
| type     | 类型           | `string`           | 可选：`'success','failure','warning','error'` |
| onClick  | 点击时触发     | `() => void`       | -                                             |
