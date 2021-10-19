## FilePicker

使用:

```tsx
import React from 'react';
import { FilePicker } from 'xun-components';

const Demo = () => {
  const handleChange = (files) => {
    console.log(files);
  };
  return (
    <>
      <FilePicker onChange={handleChange}></FilePicker>
      <br />
      <FilePicker disabled={true} onChange={handleChange}></FilePicker>
      <br />
      <FilePicker accept="image/*" onChange={handleChange}></FilePicker>
      <br />
      <FilePicker multiple onChange={handleChange}></FilePicker>
      <br />
      <br />
      <FilePicker multiple onChange={handleChange}>
        选择图片
      </FilePicker>
    </>
  );
};

export default Demo;
```
