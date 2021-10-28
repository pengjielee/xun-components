## Divider

使用:

```tsx
import React from 'react';
import { Divider } from 'xun-components';
import '../assets/styles/demo.scss';

const Demo = () => (
  <div className="demo-page demo-page-divider">
    <header>
      <h3 className="demo-page-title">分割线</h3>
    </header>
    <main>
      <div className="demo-block">
        <div className="demo-title">默认</div>
        <Divider></Divider>
      </div>
      <div className="demo-block">
        <div className="demo-title">居中</div>
        <Divider>我是内容</Divider>
      </div>
      <div className="demo-block">
        <div className="demo-title">靠左</div>
        <Divider position="left">我是内容</Divider>
      </div>
      <div className="demo-block">
        <div className="demo-title">靠右</div>
        <Divider position="right">我是内容</Divider>
      </div>
    </main>
  </div>
);

export default Demo;
```
