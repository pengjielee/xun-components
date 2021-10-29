## SearchBar

使用:

```tsx
import React, { useState } from 'react';
import { SearchBar } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-searchbar">
      <header>
        <h3 className="demo-page-title">搜索栏</h3>
      </header>
      <main>
        <SearchBar>SearchBar</SearchBar>
      </main>
    </div>
  );
};

export default Demo;
```
