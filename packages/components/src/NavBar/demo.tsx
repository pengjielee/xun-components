import React, { useState } from 'react';
import { NavBar } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div class="demo-page-navbar">
      <div class="demo-block white">
        <NavBar right="更多">NavBar</NavBar>
      </div>
    </div>
  );
};

export default Demo;
