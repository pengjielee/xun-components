## BackToTop

使用:

```tsx
import React, { useState } from 'react';
import { BackToTop, Cell } from 'xun-components';
import '../assets/styles/demo.scss';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(<Cell key={+i}>第 {i + 1} 行</Cell>);
  }
  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">返回顶部</h3>
      </header>
      <main>
        {list}
        <BackToTop>Up</BackToTop>
      </main>
    </div>
  );
};

export default Demo;
```

## 参数

| 属性             | 说明             | 类型                        | 默认值 |
| ---------------- | ---------------- | --------------------------- | ------ |
| visibilityHeight | 离顶部的可视距离 | `number`                    | `300`  |
| children         | 操作选项列表     | `string \| React.ReactNode` | `Up`   |
| className        | 显示标题         | `string`                    | -      |
