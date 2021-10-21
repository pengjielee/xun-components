## NoticeBar

使用:

```tsx
import React, { useState } from 'react';
import { NoticeBar } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <NoticeBar>default</NoticeBar>
      <div style={{ marginBottom: '10px' }} />
      <NoticeBar type="primary">primary</NoticeBar>
      <div style={{ marginBottom: '10px' }} />
      <NoticeBar type="success">success</NoticeBar>
      <div style={{ marginBottom: '10px' }} />
      <NoticeBar type="warning">warning</NoticeBar>
      <div style={{ marginBottom: '10px' }} />
      <NoticeBar type="danger">danger</NoticeBar>
      <div style={{ marginBottom: '10px' }} />
      <NoticeBar type="info">info</NoticeBar>
      <div style={{ marginBottom: '10px' }} />
      <NoticeBar type="light">light</NoticeBar>
      <div style={{ marginBottom: '10px' }} />
      <NoticeBar type="dark">dark</NoticeBar>
    </>
  );
};

export default Demo;
```
