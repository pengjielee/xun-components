import React, { useState } from 'react';
import { BackToTop, Cell } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(<Cell key={+i}>第 {i + 1} 行</Cell>);
  }
  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">返回顶部</h3>
      </header>
      <main>
        {list}
        <BackToTop>Up</BackToTop>
      </main>
    </div>
  );
};

export default Demo;
