## Dialog

使用:

```tsx
import React, { useState } from 'react';
import { Dialog, Button, Cell } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-dialog">
      <header>
        <h3 className="demo-page-title">弹窗</h3>
      </header>
      <main>
        <Cell
          title="组件调用"
          description={
            <Button size="small" onClick={() => setVisible(true)}>
              开启
            </Button>
          }
        ></Cell>
        <Cell
          title="方法调用alert"
          description={
            <Button size="small" onClick={() => Dialog.alert('标题')}>
              开启
            </Button>
          }
        ></Cell>
        <Cell
          title="方法调用alert"
          description={
            <Button size="small" onClick={() => Dialog.alert('标题', '内容')}>
              开启
            </Button>
          }
        ></Cell>
        <Cell
          title="方法调用confirm"
          description={
            <Button size="small" onClick={() => Dialog.confirm('标题')}>
              开启
            </Button>
          }
        ></Cell>
        <Cell
          title="方法调用confirm"
          description={
            <Button
              size="small"
              onClick={() =>
                Dialog.confirm(
                  '标题',
                  '内容',
                  () => alert('confirm'),
                  () => alert('cancel'),
                )
              }
            >
              开启
            </Button>
          }
        ></Cell>
        <Dialog
          visible={visible}
          showClose={true}
          width={200}
          buttons={[
            <Button type="danger">取消</Button>,
            <Button type="primary">确定</Button>,
          ]}
          onClose={() => setVisible(false)}
        >
          Dialog
        </Dialog>
      </main>
    </div>
  );
};

export default Demo;
```
