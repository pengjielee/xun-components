## ProgressBar

使用:

```tsx
import React, { useState } from 'react';
import { ProgressBar, Button } from 'xun-components';
import '../assets/styles/demo.scss';

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
        <h3 className="demo-page-title">进度条</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">基本</div>
          <ProgressBar percent={percent}></ProgressBar>
        </div>
        <div className="demo-block">
          <div className="demo-title">设置线条宽度</div>
          <ProgressBar percent={percent} strokeWidth="6"></ProgressBar>
        </div>
        <div className="demo-block">
          <div className="demo-title">设置线条颜色</div>
          <ProgressBar
            percent={percent}
            strokeWidth="8"
            strokeColor="red"
          ></ProgressBar>
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
```

## 参数

| 参数        | 说明                | 类型     | 默认值    |
| ----------- | ------------------- | -------- | --------- |
| percent     | 百分比              | `number` | `0`       |
| strokeColor | 进度条颜色          | `string` | `#00bc70` |
| strokeWidth | 线条宽度，单位 `px` | `number` | `5`       |
