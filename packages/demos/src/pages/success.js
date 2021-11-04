import React from 'react';
import { Result } from 'xun-components';

const Success = () => {
  return (
    <div className="page-success">
      <Result
        status="success"
        title="成功提示"
        description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
      >
        Result
      </Result>
    </div>
  );
};

export default Success;
