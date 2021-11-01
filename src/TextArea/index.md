## TextArea

使用:

<code src="./demo.tsx"></code>

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
