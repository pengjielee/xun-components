import React, { useState } from 'react';
import { SwipeAction, List } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const numbers = [1, 2, 3, 4, 5];

  const actions = [
    {
      text: '删除',
      type: 'danger',
    },
    {
      text: '置顶',
      type: 'primary',
    },
  ];

  return (
    <div className="demo-page demo-page-swipeaction">
      <header>
        <h3 className="demo-page-title">左滑</h3>
      </header>
      <main>
        <div className="demo-block white">
          <List>
            {numbers.map((number) => {
              return (
                <SwipeAction actions={actions} key={number}>
                  <List.Item>左滑试试 {number}</List.Item>
                </SwipeAction>
              );
            })}
          </List>
        </div>
      </main>
    </div>
  );
};

export default Demo;
