import React, { useState } from 'react';
import { Checkbox } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (result) => {
    setValue(result);
  };
  return (
    <div className="demo-page demo-page-checckbox">
      <header>
        <h3 className="demo-page-title">复选框</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">默认</div>
          <div className="demo-body white">
            <Checkbox>Checkbox</Checkbox>
          </div>
        </div>

        <div className="demo-block">
          <div className="demo-title">选项组</div>
          <div className="demo-body white">
            <Checkbox.Group value={value} onChange={handleChange}>
              <Checkbox value="red">red</Checkbox>
              <Checkbox value="green">green</Checkbox>
              <Checkbox value="blue">blue</Checkbox>
            </Checkbox.Group>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
