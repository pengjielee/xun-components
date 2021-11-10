import React from 'react';
import { FilePicker } from 'xun-components';

const Demo = () => {
  const handleChange = (files) => {
    console.log(files);
  };
  return (
    <div className="demo-page demo-page-filepicker">
      <header>
        <h3 className="demo-page-title">文件选择器</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">默认</div>
          <div className="demo-body white">
            <FilePicker onChange={handleChange}></FilePicker>
          </div>
        </div>
        <div className="demo-block">
          <div className="demo-title">禁用状态</div>
          <div className="demo-body white">
            <FilePicker disabled={true} onChange={handleChange}></FilePicker>
          </div>
        </div>
        <div className="demo-block">
          <div className="demo-title">只能选择图片</div>
          <div className="demo-body white">
            <FilePicker accept="image/*" onChange={handleChange}></FilePicker>
          </div>
        </div>
        <div className="demo-block">
          <div className="demo-title">支持选取多个文件 </div>
          <div className="demo-body white">
            <FilePicker multiple onChange={handleChange}></FilePicker>
          </div>
        </div>
        <div className="demo-block">
          <div className="demo-title">定制中间内容</div>
          <div className="demo-body white">
            <FilePicker multiple onChange={handleChange}>
              选择图片
            </FilePicker>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
