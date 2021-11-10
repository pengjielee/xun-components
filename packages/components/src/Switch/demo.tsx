import React, { useState } from 'react';
import { Switch, Cell } from 'xun-components';

const Demo = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (result) => {
    console.log(result);
    setChecked(result);
  };

  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">开关</h3>
      </header>
      <main>
        <div className="demo-block white">
          <Cell
            title="基本"
            description={
              <Switch checked={checked} onChange={handleChange}></Switch>
            }
          />
          <Cell
            title="默认开"
            description={<Switch defaultChecked={true}></Switch>}
          />
          <Cell
            title="禁用（默认关）"
            description={<Switch disabled></Switch>}
          />
          <Cell
            title="禁用（默认开）"
            description={<Switch defaultChecked={true} disabled></Switch>}
          />
          <Cell
            title="自定义颜色"
            description={
              <Switch
                defaultChecked={true}
                checkedColor="red"
                uncheckedColor="blue"
              ></Switch>
            }
          />
          <Cell
            title="自定义文字"
            description={
              <Switch
                defaultChecked={true}
                checkedText="开"
                uncheckedText="关"
              ></Switch>
            }
          />
        </div>
      </main>
    </div>
  );
};

export default Demo;
