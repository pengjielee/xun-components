import React from 'react';
import { Result } from 'xun-components';

const Demo = () => (
  <div className="demo-page">
    <header>
      <h3 className="demo-page-title">结果</h3>
    </header>
    <main>
      <div className="demo-block">
        <div className="demo-body white">
          <Result
            status="success"
            title="成功提示"
            description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
          >
            Result
          </Result>
        </div>
      </div>

      <div className="demo-block">
        <div className="demo-body white">
          <Result
            status="error"
            title="错误提示"
            description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
          >
            Result
          </Result>
        </div>
      </div>

      <div className="demo-block">
        <div className="demo-body white">
          <Result
            status="warning"
            title="警告提示"
            description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
          >
            Result
          </Result>
        </div>
      </div>

      <div className="demo-block">
        <div className="demo-body white">
          <Result
            status="info"
            title="信息提示"
            description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
          >
            Result
          </Result>
        </div>
      </div>
    </main>
  </div>
);

export default Demo;
