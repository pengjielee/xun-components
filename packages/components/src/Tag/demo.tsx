import React from 'react';
import { Tag } from 'xun-components';

const Demo = () => {
  return (
    <div className="demo-page demo-page-tag">
      <header>
        <h3 className="demo-page-title">标签</h3>
      </header>

      <main>
        <div className="demo-block">
          <div className="demo-title">默认颜色</div>
          <Tag>default</Tag>
          <Tag color="primary">primary</Tag>
          <Tag color="success">success</Tag>
          <Tag color="warning">warning</Tag>
          <Tag color="danger">danger</Tag>
          <Tag color="info">info</Tag>
        </div>
        <div className="demo-block">
          <div className="demo-title">自定义颜色</div>
          <Tag color="red">red</Tag>
          <Tag color="green">green</Tag>
          <Tag color="blue">blue</Tag>
        </div>
        <div className="demo-block">
          <div className="demo-title">使用线框</div>
          <Tag color="red" fill="outline">
            red
          </Tag>
          <Tag color="green" fill="outline">
            green
          </Tag>
          <Tag color="blue" fill="outline">
            blue
          </Tag>
        </div>
        <div className="demo-block">
          <div className="demo-title">设置圆角</div>
          <Tag color="blue" round>
            blue
          </Tag>
        </div>
      </main>
    </div>
  );
};

export default Demo;
