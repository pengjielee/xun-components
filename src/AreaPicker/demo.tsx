import React, { useState } from 'react';
import { AreaPicker, Cell, Button } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState([]);
  const [visible2, setVisible2] = useState(false);
  const [result2, setResult2] = useState([]);

  const handleConfirm = (result) => {
    setResult(result);
    setVisible(false);
  };

  const handleConfirm2 = (result) => {
    setResult2(result);
    setVisible2(false);
  };

  const resultNames = result && result.map((item) => item.name).join(' ');
  const resultNames2 = result2 && result2.map((item) => item.name).join(' ');

  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">省市区选择</h3>
      </header>
      <main>
        <Cell
          title="选择省市区"
          description={
            <Button size="small" onClick={() => setVisible(true)}>
              选择
            </Button>
          }
        />

        <div className="demo-result">{resultNames}</div>

        <Cell
          title="只选择省"
          description={
            <Button size="small" onClick={() => setVisible2(true)}>
              选择
            </Button>
          }
        />

        <div className="demo-result">{resultNames2}</div>

        <AreaPicker
          visible={visible}
          onConfirm={handleConfirm}
          onMaskClick={() => setVisible(false)}
        ></AreaPicker>

        <AreaPicker
          onlyProvince={true}
          visible={visible2}
          onConfirm={handleConfirm2}
          onMaskClick={() => setVisible2(false)}
        ></AreaPicker>
      </main>
    </div>
  );
};

export default Demo;
