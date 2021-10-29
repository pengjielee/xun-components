## Toast

使用:

```tsx
import React from 'react';
import { Toast, Cell, Button } from 'xun-components';

const Demo = () => {
  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">轻提示</h3>
      </header>

      <main>
        <Cell
          title="普通提示，持续5秒"
          description={
            <Button
              size="small"
              onClick={() => Toast.show('普通提示', { duration: 5000 })}
            >
              开启
            </Button>
          }
        ></Cell>

        <Cell
          title="有遮罩层"
          description={
            <Button
              size="small"
              onClick={() => Toast.show('不可进行其他操作', { hasMask: true })}
            >
              开启
            </Button>
          }
        ></Cell>

        <Cell
          title="成功提示"
          description={
            <Button size="small" onClick={() => Toast.success('成功提示')}>
              开启
            </Button>
          }
        ></Cell>

        <Cell
          title="错误提示"
          description={
            <Button size="small" onClick={() => Toast.warning('错误提示')}>
              开启
            </Button>
          }
        ></Cell>

        <Cell
          title="信息提示"
          description={
            <Button size="small" onClick={() => Toast.info('信息提示')}>
              开启
            </Button>
          }
        ></Cell>

        <Cell
          title="失败提示"
          description={
            <Button size="small" onClick={() => Toast.failure('失败提示')}>
              开启
            </Button>
          }
        ></Cell>
      </main>
    </div>
  );
};

export default Demo;
```

## 参数

| 参数     | 说明       | 类型      | 默认值                                               |
| -------- | ---------- | --------- | ---------------------------------------------------- |
| type     | 类型       | `string`  | 可选：`'success','failure','info','warning','error'` |
| content  | 内容       | `string`  | ``                                                   |
| hasMask  | 显示遮罩层 | `boolean` | `false`                                              |
| duration | 显示时间   | `number`  | `3000`                                               |
