import React, { useState } from 'react';
import { SideBar } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const [activeKey, setActiveKey] = useState('2');
  return (
    <>
      <SideBar activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
        <SideBar.Item key="1" title="1">
          1
        </SideBar.Item>
        <SideBar.Item key="2" title="2">
          2
        </SideBar.Item>
        <SideBar.Item key="3" title="3">
          3
        </SideBar.Item>
      </SideBar>
    </>
  );
};

export default Demo;
