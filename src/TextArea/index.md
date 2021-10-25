## TextArea

使用:

```tsx
import React, { useState } from 'react';
import { TextArea } from 'xun-components';
import '../assets/styles/demo.scss';

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
          <TextArea></TextArea>
        </div>
        <div className="demo-block">
          <div className="demo-title">设置placeholder</div>
          <TextArea placeholder="请输入内容"></TextArea>
        </div>
        <div className="demo-block">
          <div className="demo-title">只读</div>
          <TextArea
            placeholder="请输入内容"
            value="hello world"
            readOnly={true}
          ></TextArea>
        </div>
        <div className="demo-block">
          <div className="demo-title">禁用</div>
          <TextArea
            placeholder="请输入内容"
            value="hello world"
            disabled={true}
          ></TextArea>
        </div>

        <div className="demo-block">
          <div className="demo-title">更多设置</div>
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
      </main>
    </div>
  );
};

export default Demo;
```

## 属性

| 属性        | 说明                 | 类型                      | 默认值  |
| ----------- | -------------------- | ------------------------- | ------- |
| value       | 输入值               | `string`                  | -       |
| placeholder | 提示文本             | `string`                  | -       |
| rows        | 行数                 | `number`                  | `4`     |
| maxLength   | 最大字符数           | `number`                  | -       |
| focused     | 是否聚焦             | `boolean`                 | `false` |
| disabled    | 是否禁用             | `boolean`                 | `false` |
| readOnly    | 是否只读             | `boolean`                 | `false` |
| onChange    | 文本域内容变化时触发 | `(value: string) => void` | -       |
| onFocus     | 文本域获得焦点时触发 | `() => void`              | -       |
| onBlur      | 文本域失去焦点时触发 | `() => void`              | -       |
