import React, { useState } from 'react';
import { Rate } from 'xun-components';

const Demo = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(3);
  return (
    <div className="demo-page demo-page-rate">
      <header>
        <h3 className="demo-page-title">评分</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">基本</div>
          <div className="demo-body white">
            <Rate
              value={value1}
              onChange={(value1) => setValue1(value1)}
            ></Rate>
          </div>
        </div>
        <div className="demo-block">
          <div className="demo-title">半星</div>
          <div className="demo-body white">
            <Rate
              value={value2}
              count={10}
              allowHalf
              onChange={(value2) => setValue2(value2)}
            ></Rate>
          </div>
        </div>
        <div className="demo-block">
          <div className="demo-title">禁用</div>
          <div className="demo-body white">
            <Rate
              value={value3}
              onChange={(value3) => setValue3(value3)}
              disabled
            ></Rate>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
