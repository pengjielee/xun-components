## TabBar

使用:

```tsx
import React, { useState } from 'react';
import { TabBar } from 'xun-components';
import { ReactSVG } from 'react-svg';
import '../assets/styles/demo.scss';
import HomeIcon from '../assets/icons/home.svg';
import MessageIcon from '../assets/icons/message.svg';
import ShopIcon from '../assets/icons/shop.svg';
import MineIcon from '../assets/icons/mine.svg';

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
              <TabBar.Item
                title="首页"
                key="1"
                icon={<ReactSVG src={HomeIcon} />}
              ></TabBar.Item>
              <TabBar.Item
                title="消息"
                key="2"
                icon={<ReactSVG src={MessageIcon} />}
              ></TabBar.Item>
              <TabBar.Item
                title="商城"
                key="3"
                icon={<ReactSVG src={ShopIcon} />}
              ></TabBar.Item>
              <TabBar.Item
                title="我的"
                key="4"
                icon={<ReactSVG src={MineIcon} />}
              ></TabBar.Item>
            </TabBar>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
```
