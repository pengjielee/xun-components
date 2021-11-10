import React, { useState } from 'react';
import { SearchBar } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-searchbar">
      <header>
        <h3 className="demo-page-title">搜索栏</h3>
      </header>
      <main>
        <div className="demo-block white" style={{ padding: '10px' }}>
          <SearchBar>SearchBar</SearchBar>
        </div>
      </main>
    </div>
  );
};

export default Demo;
