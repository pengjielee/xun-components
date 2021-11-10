import React from 'react';
import { Error } from 'xun-components';

const Demo = () => (
  <div className="demo-page demo-page-error">
    <header>
      <h3 className="demo-page-title">错误</h3>
    </header>
    <main>
      <div className="demo-block white">
        <Error description="默认错误"></Error>
      </div>

      <div className="demo-block white">
        <Error type="database" description="数据库错误"></Error>
      </div>

      <div className="demo-block white">
        <Error type="wifi" description="网络错误"></Error>
      </div>
      <div className="demo-block white">
        <Error type="face" description="出错了"></Error>
      </div>
      <div className="demo-block white">
        <Error type="location" description="位置错误"></Error>
      </div>
      <div className="demo-block white">
        <Error
          description="自定义描述信息文字样式"
          descStyle={{ fontSize: '20px', color: 'red' }}
        ></Error>
      </div>
    </main>
  </div>
);

export default Demo;
