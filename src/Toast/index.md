## Toast

使用:

```tsx
import React from 'react';
import { Toast } from 'xun-components';

const Demo = () => (
  <>
    <button
      onClick={() => Toast.show('普通提示', { hasMask: true, duration: 5000 })}
    >
      普通提示，有遮罩层，持续5秒
    </button>
    <br />
    <button onClick={() => Toast.success('成功提示')}>成功提示</button>
    <br />
    <button onClick={() => Toast.warning('错误提示')}>错误提示</button>
    <br />
    <button onClick={() => Toast.info('信息提示')}>信息提示</button>
    <br />
    <button onClick={() => Toast.failure('失败提示')}>失败提示</button>
    <br />
  </>
);

export default Demo;
```

## 参数

| 参数     | 说明       | 类型      | 默认值                                               |
| -------- | ---------- | --------- | ---------------------------------------------------- |
| type     | 类型       | `string`  | 可选：`'success','failure','info','warning','error'` |
| content  | 内容       | `string`  | ``                                                   |
| hasMask  | 显示遮罩层 | `boolean` | `false`                                              |
| duration | 显示时间   | `number`  | `3000`                                               |
