import React, { useState } from 'react';
import { Tabs } from 'xun-components';

const Tab1 = () => {
  return <h1>Tab1</h1>;
};

const Tab2 = () => {
  return <h1>Tab2</h1>;
};

const Demo = () => {
  return (
    <div className="demo-page demo-page-tabs">
      <header>
        <h3 className="demo-page-title">Tabs</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">传入数组</div>
          <div className="demo-body white">
            <Tabs data={[1, 2, 3]} activeKey={0}></Tabs>
          </div>
        </div>

        <div className="demo-block">
          <div className="demo-title">传入对象</div>
          <div className="demo-body white">
            <Tabs data={{ name: 'j', age: '20' }}></Tabs>
          </div>
        </div>

        <div className="demo-block">
          <div className="demo-title">传入长数组</div>
          <div className="demo-body white">
            <Tabs
              data={[
                '选项1',
                '选项2',
                '选项3',
                '选项4',
                '选项5',
                '选项6',
                '选项7',
                '选项8',
                '选项9',
                '选项10',
              ]}
            ></Tabs>
          </div>
        </div>

        <div className="demo-block">
          <div className="demo-title">指定线条宽度</div>
          <div className="demo-body white">
            <Tabs data={[1, 2, 3]} activeKey={0} lineWidth="80px"></Tabs>
          </div>

          <div className="demo-body white">
            <Tabs data={[1, 2, 3]} activeKey={0} lineWidth={20}></Tabs>
          </div>
        </div>

        <div className="demo-block">
          <div className="demo-title">传入对象组件</div>
          <div className="demo-body white">
            <Tabs data={{ tab1: <Tab1 />, tab2: <Tab2 /> }}></Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
