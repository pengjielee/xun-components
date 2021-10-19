## Toast

使用:

```tsx
import React from 'react';
import { Toast } from 'xun-components';

const Demo = () => (
  <>
    <button onClick={() => Toast.show('普通提示', { hasMask: true })}>
      普通提示
    </button>
    <br />
    <button onClick={() => Toast.success('成功提示')}>成功提示</button>
    <br />
    <button onClick={() => Toast.warn('错误提示')}>错误提示</button>
    <br />
    <button onClick={() => Toast.info('信息提示')}>信息提示</button>
    <br />
    <button onClick={() => Toast.fail('失败提示')}>失败提示</button>
    <br />
  </>
);

export default Demo;
```
