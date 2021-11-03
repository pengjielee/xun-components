import React, { useState } from 'react';
import { Button } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-button">
      <header>
        <h3 className="demo-page-title">按钮</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">按钮类型</div>
          <Button type="primary">primary</Button>
          <Button type="secondary">secondary</Button>

          <Button type="success">success</Button>

          <Button type="warning">warning</Button>

          <Button type="danger">danger</Button>
          <Button type="info">info</Button>
        </div>

        <div className="demo-block">
          <div className="demo-title">按钮尺寸</div>
          <Button size="small">small</Button>
          <Button>normal</Button>
          <Button size="large">large</Button>
        </div>

        <div className="demo-block">
          <div className="demo-title">禁用按钮</div>
          <Button disabled>disabled</Button>
        </div>

        <div className="demo-block">
          <div className="demo-title">块状按钮</div>

          <Button type="primary" block>
            block
          </Button>
        </div>

        <div className="demo-block">
          <div className="demo-title">圆角按钮</div>
          <Button round>round</Button>
          <Button round={10}>round(10)</Button>
        </div>
      </main>
    </div>
  );
};

export default Demo;
