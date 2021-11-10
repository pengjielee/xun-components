import React from 'react';
import { Empty } from 'xun-components';

const Demo = () => (
  <div className="demo-page demo-page-empty">
    <header>
      <h3 className="demo-page-title">空状态</h3>
    </header>
    <main>
      <div className="demo-block white">
        <Empty></Empty>
      </div>
      <div className="demo-block white">
        <Empty description="暂无数据" descStyle={{ fontSize: '10px' }}></Empty>
      </div>

      <div className="demo-block white">
        {' '}
        <Empty
          description="暂无数据"
          descStyle={{ fontSize: '10px', color: 'red' }}
        ></Empty>
      </div>
      <div className="demo-block white">
        <Empty description="暂无数据" imageStyle={{ width: '120px' }}></Empty>
      </div>
    </main>
  </div>
);

export default Demo;
