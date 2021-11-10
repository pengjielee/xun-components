import React from 'react';
import { Loading, Cell, Button } from 'xun-components';

const Demo = () => (
  <div className="demo-page demo-page-loading">
    <header>
      <h3 className="demo-page-title">加载中</h3>
    </header>
    <main>
      <div className="demo-block white">
        <Cell
          title="默认"
          description={
            <Button size="small" onClick={() => Loading.show()}>
              开启
            </Button>
          }
        ></Cell>
        <Cell
          title="设置内容和持续时间"
          description={
            <Button
              size="small"
              onClick={() =>
                Loading.show({ content: 'loading', duration: 3000 })
              }
            >
              开启
            </Button>
          }
        ></Cell>
      </div>
    </main>
  </div>
);

export default Demo;
