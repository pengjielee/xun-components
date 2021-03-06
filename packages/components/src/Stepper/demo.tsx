import React, { useState } from 'react';
import { Stepper, Cell } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(1);

  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">步进器</h3>
      </header>
      <main>
        <div className="demo-block white">
          <Cell
            title="基本"
            description={<Stepper value={value} onChange={setValue}></Stepper>}
          />
          <Cell
            title="默认值"
            description={<Stepper defaultValue={10}></Stepper>}
          />
          <Cell
            title="设置上下限（-3 - 3）"
            description={<Stepper min={-3} max={3}></Stepper>}
          />
          <Cell title="设置步长" description={<Stepper step={5}></Stepper>} />
          <Cell title="禁用" description={<Stepper disabled></Stepper>} />
          <Cell
            title="禁用输入"
            description={<Stepper disabledInput></Stepper>}
          />
        </div>
      </main>
    </div>
  );
};

export default Demo;
