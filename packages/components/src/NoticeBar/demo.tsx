import React, { useState } from 'react';
import { NoticeBar } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-noticebar">
      <header>
        <h3 className="demo-page-title">通知栏</h3>
      </header>
      <main>
        <div className="demo-block">
          <NoticeBar>default</NoticeBar>
        </div>

        <div className="demo-block">
          <NoticeBar type="primary">primary</NoticeBar>
        </div>

        <div className="demo-block">
          <NoticeBar type="success">success</NoticeBar>
        </div>

        <div className="demo-block">
          <NoticeBar type="warning">warning</NoticeBar>
        </div>

        <div className="demo-block">
          <NoticeBar type="danger">danger</NoticeBar>
        </div>

        <div className="demo-block">
          <NoticeBar type="info">info</NoticeBar>
        </div>

        <div className="demo-block">
          <NoticeBar type="light">light</NoticeBar>
        </div>

        <div className="demo-block">
          <NoticeBar type="dark">dark</NoticeBar>
        </div>
      </main>
    </div>
  );
};

export default Demo;
