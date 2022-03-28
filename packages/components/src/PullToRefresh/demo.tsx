import React, { useState } from 'react';
import { PullToRefresh, Cell } from 'xun-components';
import { sleep } from '../assets/utils';

const Demo = () => {
  const createList = () => {
    const list = [];
    for (let i = 0; i < 100; i++) {
      list.push(Date.now() + i);
    }
    return list;
  };

  const [list, setList] = useState(createList());

  return (
    <div className="demo-page-pull">
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000);
          setList(createList());
        }}
        completeDelay={100}
      >
        {list.map((item) => {
          return <Cell key={item}>第 {item} 行</Cell>;
        })}
      </PullToRefresh>
    </div>
  );
};

export default Demo;
