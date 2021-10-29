## TabBar

使用:

```tsx
import React, { useState } from 'react';
import { TabBar } from 'xun-components';
import { Home, Message, Shop, Mine } from 'xun-icons';

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div className="demo-page demo-page-tabbar">
      <header>
        <h3 className="demo-page-title">标签栏</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">基本用法</div>
          <div className="demo-body">
            <TabBar activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
              <TabBar.Item title="首页" key="1" icon={<Home />}></TabBar.Item>
              <TabBar.Item
                title="消息"
                key="2"
                icon={<Message />}
              ></TabBar.Item>
              <TabBar.Item title="商城" key="3" icon={<Shop />}></TabBar.Item>
              <TabBar.Item title="我的" key="4" icon={<Mine />}></TabBar.Item>
            </TabBar>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
```
