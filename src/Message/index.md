## Message

使用:

```tsx
import React from 'react';
import { Message } from 'xun-components';

const img =
  'https://static.zhongan.com/website/health/zarm/images/icons/state.png';

const Demo = () => (
  <>
    <Message>default</Message>
    <div style={{ marginBottom: '15px' }} />
    <Message type="success">success</Message>
    <div style={{ marginBottom: '15px' }} />
    <Message type="fail">fail</Message>
    <div style={{ marginBottom: '15px' }} />
    <Message type="warn">warn</Message>
    <div style={{ marginBottom: '15px' }} />
    <Message type="info">info</Message>
    <div style={{ marginBottom: '15px' }} />
    <Message hasArrow={true}>有箭头</Message>
    <div style={{ marginBottom: '15px' }} />
    <Message icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />}>
      设置icon
    </Message>
    <div style={{ marginBottom: '15px' }} />
    <Message closable={true}>可关闭的</Message>
    <div style={{ marginBottom: '15px' }} />
  </>
);

export default Demo;
```
