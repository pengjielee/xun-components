## Message

使用:

```tsx
import React from 'react';
import { Message } from 'xun-components';
import '../assets/styles/demo.scss';

const img =
  'https://static.zhongan.com/website/health/zarm/images/icons/state.png';

const Demo = () => (
  <div className="demo-page demo-page-message">
    <header>
      <h3 className="demo-page-title">消息</h3>
    </header>
    <main>
      <div className="demo-block">
        <Message>default</Message>
      </div>
      <div className="demo-block">
        <Message type="success">success</Message>
      </div>
      <div className="demo-block">
        <Message type="fail">fail</Message>
      </div>
      <div className="demo-block">
        <Message type="warn">warn</Message>
      </div>
      <div className="demo-block">
        <Message type="info">info</Message>
      </div>
      <div className="demo-block">
        <Message hasArrow={true}>有箭头</Message>
      </div>
      <div className="demo-block">
        <Message
          icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />}
        >
          设置icon
        </Message>
      </div>
      <div className="demo-block">
        <Message closable={true}>可关闭的</Message>
      </div>
    </main>
  </div>
);

export default Demo;
```
