import React from 'react';
import { Loader, Cell } from 'xun-components';

const Demo = () => {
  return (
    <div className="demo-page demo-page-loader">
      <header>
        <h3 className="demo-page-title">加载器</h3>
      </header>
      <main>
        <div className="demo-block white">
          <Cell title="默认" description={<Loader />}></Cell>
        </div>
      </main>
    </div>
  );
};

export default Demo;
