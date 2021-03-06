import React, { useState } from 'react';
import { TextArea } from 'xun-components';

const Demo = () => {
  const [value, setValue] = useState('hello');

  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">文本输入框</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">默认</div>
          <div className="demo-body">
            <TextArea></TextArea>
          </div>
        </div>
        <div className="demo-block">
          <div className="demo-title">设置placeholder</div>
          <div className="demo-body">
            <TextArea placeholder="请输入内容"></TextArea>
          </div>
        </div>
        <div className="demo-block">
          <div className="demo-title">只读</div>
          <div className="demo-body">
            <TextArea
              placeholder="请输入内容"
              value="hello world"
              readOnly={true}
            ></TextArea>
          </div>
        </div>
        <div className="demo-block">
          <div className="demo-title">禁用</div>
          <div className="demo-body">
            <TextArea
              placeholder="请输入内容"
              value="hello world"
              disabled={true}
            ></TextArea>
          </div>
        </div>

        <div className="demo-block">
          <div className="demo-title">更多设置</div>
          <div className="demo-body">
            <TextArea
              focused={true}
              rows={5}
              maxLength={100}
              disabled={false}
              readOnly={false}
              value={value}
              onChange={(value) => setValue(value)}
            ></TextArea>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
