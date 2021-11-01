import React, { useState, useRef } from 'react';
import { Popup, Cell, Button } from 'xun-components';

const Demo = () => {
  const containerRef = useRef(null);

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">弹出层</h3>
      </header>
      <main>
        <Cell
          title="顶部弹出"
          description={
            <Button size="small" onClick={() => setVisible1(true)}>
              开启
            </Button>
          }
        ></Cell>
        <Cell
          title="底部弹出"
          description={
            <Button size="small" onClick={() => setVisible2(true)}>
              开启
            </Button>
          }
        ></Cell>
        <Cell
          title="左侧弹出"
          description={
            <Button size="small" onClick={() => setVisible3(true)}>
              开启
            </Button>
          }
        ></Cell>
        <Cell
          title="右侧弹出"
          description={
            <Button size="small" onClick={() => setVisible4(true)}>
              开启
            </Button>
          }
        ></Cell>

        <Cell
          title="设定container"
          description={
            <Button size="small" onClick={() => setVisible4(true)}>
              开启
            </Button>
          }
        ></Cell>

        <div id="container"></div>

        <Popup
          visible={visible1}
          position="top"
          onMaskClick={() => setVisible1(false)}
          bodyStyle={{ height: '40vh' }}
        >
          Popup Top
        </Popup>
        <Popup
          visible={visible2}
          position="bottom"
          onMaskClick={() => setVisible2(false)}
          bodyStyle={{ height: '40vh' }}
        >
          Popup Bottom
        </Popup>
        <Popup
          visible={visible3}
          position="left"
          onMaskClick={() => setVisible3(false)}
          bodyStyle={{ width: '40vh' }}
        >
          Popup Left
        </Popup>
        <Popup
          visible={visible4}
          position="right"
          onMaskClick={() => setVisible4(false)}
          bodyStyle={{ width: '40vh' }}
        >
          Popup Right
        </Popup>

        <Popup
          visible={visible4}
          position="right"
          onMaskClick={() => setVisible4(false)}
          bodyStyle={{ width: '40vh' }}
          container={document.querySelector('#container')}
        >
          Popup container
        </Popup>
      </main>
    </div>
  );
};

export default Demo;
