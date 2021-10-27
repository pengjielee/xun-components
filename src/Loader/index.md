## Loader

使用:

```tsx
import React from 'react';
import { Loader, Cell } from 'xun-components';
import '../assets/styles/demo.scss';

const Demo = () => {
  return (
    <div className="demo-page demo-page-button">
      <header>
        <h3 className="demo-page-title">加载器</h3>
      </header>
      <main>
        <Cell title="默认" description={<Loader />}></Cell>
      </main>
    </div>
  );
};

export default Demo;
```
