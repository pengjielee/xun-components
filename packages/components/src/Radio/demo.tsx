import React, { useState } from 'react';
import { Radio } from 'xun-components';

const Demo = () => {
  const [value, setValue] = useState('1');

  const handleChange = (value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <div className="demo-page demo-page-radio">
      <header>
        <h3 className="demo-page-title">单选框</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">默认</div>
          <Radio>Radio</Radio>
        </div>
        <div className="demo-block">
          <div className="demo-title">选项组</div>
          <Radio.Group value={value} onChange={handleChange}>
            <Radio value="1">Radio1</Radio>
            <Radio value="2">Radio2</Radio>
          </Radio.Group>
        </div>
      </main>
    </div>
  );
};

export default Demo;
