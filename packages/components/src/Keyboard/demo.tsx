import React, { useState } from 'react';
import { Keyboard } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="demo-page demo-page-keyboard">
        <header>
          <h3 className="demo-page-title">键盘</h3>
        </header>
        <main>
          <div className="demo-block">
            <div className="demo-body white">
              <Keyboard>Keyboard</Keyboard>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Demo;
