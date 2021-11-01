import React, { useState } from 'react';
import { NavBar } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <NavBar right="更多">NavBar</NavBar>
    </>
  );
};

export default Demo;
