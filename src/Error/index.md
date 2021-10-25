## Error

使用:

```tsx
import React from 'react';
import { Error } from 'xun-components';
import '../assets/styles/demo.scss';

const Demo = () => (
  <div className="demo-page demo-page-error">
    <header>
      <h3 className="demo-page-title">错误</h3>
    </header>
    <main>
      <div className="demo-block">
        <div className="demo-title">默认</div>
        <Error description="出错了"></Error>
      </div>

      <div className="demo-block">
        <div className="demo-title">数据库错误</div>
        <Error type="database" description="出错了"></Error>
      </div>

      <div className="demo-block">
        <div className="demo-title">网络错误</div>
        <Error type="wifi" description="出错了"></Error>
      </div>
      <div className="demo-block">
        <div className="demo-title">哭脸</div>
        <Error type="face" description="出错了"></Error>
      </div>
      <div className="demo-block">
        <div className="demo-title">位置错误</div>
        <Error type="location" description="出错了"></Error>
      </div>
      <div className="demo-block">
        <div className="demo-title">自定义描述信息文字样式</div>
        <Error
          description="出错了"
          descStyle={{ fontSize: '20px', color: 'red' }}
        ></Error>
      </div>
    </main>
  </div>
);

export default Demo;
```
