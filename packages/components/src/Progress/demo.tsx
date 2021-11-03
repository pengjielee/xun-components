import React, { useState } from 'react';
import { Progress, Button } from 'xun-components';

const Demo = () => {
  const [percent, setPercent] = useState(10);

  const handleAdd = () => {
    if (percent >= 100) {
      return;
    }
    setPercent(percent + 10);
  };

  const handleMinus = () => {
    if (percent <= 0) {
      return;
    }
    setPercent(percent - 10);
  };

  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">圆形进度条</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">基本</div>
          <Progress percent={percent}></Progress>
        </div>
        <div className="demo-block">
          <div className="demo-title">设置线条宽度</div>
          <Progress percent={percent} strokeWidth="2"></Progress>
        </div>
        <div className="demo-block">
          <div className="demo-title">设置线条颜色</div>
          <Progress
            percent={percent}
            strokeWidth="2"
            strokeColor="red"
          ></Progress>
        </div>

        <Button type="primary" onClick={handleAdd}>
          增加
        </Button>
        <Button onClick={handleMinus}>减少</Button>
      </main>
    </div>
  );
};

export default Demo;
