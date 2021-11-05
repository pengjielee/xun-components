import React, { useState } from 'react';
import { Badge, Cell } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-badge">
      <header>
        <h3 className="demo-page-title">微标</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">基本用法</div>
          <Cell title="小圆点" description={<Badge dot />}></Cell>

          <Cell
            title="显示文本"
            description={<Badge content="新消息"></Badge>}
          ></Cell>

          <Cell
            title="设置颜色"
            description={<Badge content="12" color="blue"></Badge>}
          ></Cell>

          <Cell
            title="设置直角"
            description={<Badge content="新消息" shape="rect"></Badge>}
          ></Cell>

          <Cell
            title="设置圆角"
            description={<Badge content="新消息" shape="radius"></Badge>}
          ></Cell>

          <Cell
            title="设置椭圆角"
            description={<Badge content="新消息" shape="round"></Badge>}
          ></Cell>

          <Cell
            title="设置圆形"
            description={<Badge content="新消息" shape="circle"></Badge>}
          ></Cell>

          <Cell
            title="设置叶形"
            description={<Badge content="新消息" shape="leaf"></Badge>}
          ></Cell>
        </div>

        <div className="demo-block">
          <div className="demo-title">设置位置</div>

          <div className="demo-body">
            <Badge dot>
              <div className="demo-box"></div>
            </Badge>
            <Badge dot style={{ '--right': '100%', '--top': '100%' }}>
              <div className="demo-box"></div>
            </Badge>
            <Badge dot style={{ '--right': '100%' }}>
              <div className="demo-box"></div>
            </Badge>
            <Badge dot style={{ '--top': '100%' }}>
              <div className="demo-box"></div>
            </Badge>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
