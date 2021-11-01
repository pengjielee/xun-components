import React, { useState } from 'react';
import { IndexBar } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <IndexBar>IndexBar</IndexBar>
    </>
  );
};

export default Demo;
