import React from 'react';
import { Divider } from 'xun-components';

const Demo = () => (
  <div className="demo-page demo-page-divider">
    <header>
      <h3 className="demo-page-title">分割线</h3>
    </header>
    <main>
      <div className="demo-block">
        <div className="demo-title">默认</div>
        <div className="demo-body white">
          <Divider></Divider>
        </div>
      </div>
      <div className="demo-block">
        <div className="demo-title">居中</div>
        <div className="demo-body white">
          <Divider>我是内容</Divider>
        </div>
      </div>
      <div className="demo-block">
        <div className="demo-title">靠左</div>
        <div className="demo-body white">
          <Divider position="left">我是内容</Divider>
        </div>
      </div>
      <div className="demo-block">
        <div className="demo-title">靠右</div>
        <div className="demo-body white">
          <Divider position="right">我是内容</Divider>
        </div>
      </div>
    </main>
  </div>
);

export default Demo;
