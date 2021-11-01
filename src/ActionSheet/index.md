## ActionSheet

使用:

<code src="./demo.tsx"></code>

## 参数

| 属性        | 说明                                       | 类型         | 默认值  |
| ----------- | ------------------------------------------ | ------------ | ------- |
| visible     | 显示/隐藏                                  | `boolean`    | `false` |
| actions     | 操作选项列表                               | `Action[]`   | `[]`    |
| title       | 显示标题                                   | `string`     | -       |
| cancelText  | 取消按钮文字，如果设置为空则不显示取消按钮 | `string`     | -       |
| onCancel    | 点击取消时触发                             | `() => void` | -       |
| onMaskClick | 点击遮罩层时触发                           | `() => void` | -       |

### Action

| 属性     | 说明           | 类型               | 默认值                                        |
| -------- | -------------- | ------------------ | --------------------------------------------- |
| key      | 唯一标记       | `string \| number` | -                                             |
| text     | 内容           | `string`           | -                                             |
| disabled | 是否为禁用状态 | `boolean`          | `false`                                       |
| type     | 类型           | `string`           | 可选：`'success','failure','warning','error'` |
| onClick  | 点击时触发     | `() => void`       | -                                             |
