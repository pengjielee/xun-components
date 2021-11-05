import React, { useState, useRef } from 'react';
import { BackToTop, Cell, Switch } from 'xun-components';

const Demo = () => {
  const [windowScroll, setWindowScroll] = useState(true);
  const containerRef = useRef();

  const scrollContainer = windowScroll ? null : () => containerRef.current;
  const containerStyle = windowScroll
    ? {}
    : {
        overflowY: 'auto',
        maxHeight: 400,
      };

  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(<Cell key={+i}>第 {i + 1} 行</Cell>);
  }

  const handleChange = (checked) => {
    setWindowScroll(checked);
  };
  return (
    <div className="demo-page demo-page-backtotop">
      <header>
        <h3 className="demo-page-title">返回顶部</h3>
      </header>
      <main>
        <Cell
          title={
            windowScroll ? '当前使用window作为容器' : '当前使用div作为容器'
          }
          description={
            <Switch checked={windowScroll} onChange={handleChange}></Switch>
          }
        />

        <div ref={containerRef} style={containerStyle}>
          {list}
        </div>
        <BackToTop scrollContainer={scrollContainer}></BackToTop>
      </main>
    </div>
  );
};

export default Demo;
