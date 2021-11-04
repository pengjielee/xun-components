import React, { useState } from 'react';
import { Tabs } from 'xun-components';

const Tab1 = () => {
	return <h1>Tab1</h1>
}

const Tab2 = () => {
	return <h1>Tab2</h1>
}

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Tabs data={[1, 2, 3]} activeKey={0}></Tabs>

      <Tabs data={{ name: 'j', age: '20' }}></Tabs>

      <Tabs data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></Tabs>


      <Tabs data={{ name: 'j', age: '20' }}></Tabs>

      <Tabs data={{ tab1: <Tab1 />, tab2: <Tab2 /> }}></Tabs>
    </>
  );
};

export default Demo;
