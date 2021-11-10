import React from 'react';
import { Toast, Cell, Button } from 'xun-components';

const Demo = () => {
  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">轻提示</h3>
      </header>

      <main>
        <div className="demo-block white">
          <Cell
            title="普通提示，持续5秒"
            description={
              <Button
                size="small"
                onClick={() => Toast.show('普通提示', { duration: 5000 })}
              >
                开启
              </Button>
            }
          ></Cell>

          <Cell
            title="有遮罩层"
            description={
              <Button
                size="small"
                onClick={() =>
                  Toast.show('不可进行其他操作', { hasMask: true })
                }
              >
                开启
              </Button>
            }
          ></Cell>

          <Cell
            title="成功提示"
            description={
              <Button size="small" onClick={() => Toast.success('成功提示')}>
                开启
              </Button>
            }
          ></Cell>

          <Cell
            title="错误提示"
            description={
              <Button size="small" onClick={() => Toast.warning('错误提示')}>
                开启
              </Button>
            }
          ></Cell>

          <Cell
            title="信息提示"
            description={
              <Button size="small" onClick={() => Toast.info('信息提示')}>
                开启
              </Button>
            }
          ></Cell>

          <Cell
            title="失败提示"
            description={
              <Button size="small" onClick={() => Toast.failure('失败提示')}>
                开启
              </Button>
            }
          ></Cell>
        </div>
      </main>
    </div>
  );
};

export default Demo;
