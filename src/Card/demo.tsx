import React, { useState } from 'react';
import { Card } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-card">
      <header>
        <h3 className="demo-page-title">卡片</h3>
      </header>
      <main>
        <Card title="标题" more={<a>更多</a>}>
          内容
        </Card>
      </main>
    </div>
  );
};

export default Demo;
