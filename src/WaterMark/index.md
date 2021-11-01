## WaterMark

使用:

<code src="./demo.tsx"></code>

## 参数

| 参数       | 说明               | 类型               | 默认值                                                         |
| ---------- | ------------------ | ------------------ | -------------------------------------------------------------- |
| content    | 水印内容           | `string`           | `watermark`                                                    |
| width      | 水印宽度           | `number`           | `120`                                                          |
| height     | 水印高度           | `number`           | `60`                                                           |
| rotate     | 水印旋转的角度     | `number`           | `-20`                                                          |
| zIndex     | 水印元素的 z-index | `number`           | `2000`                                                         |
| gapX       | 水印之间的水平间距 | `number`           | `20`                                                           |
| gapY       | 水印之间的垂直间距 | `number`           | `20`                                                           |
| fontFamily | 水印文字字体       | `string`           | `sans-serif`                                                   |
| fontStyle  | 水印文字样式       | `string`           | 可选：`'none', 'normal', 'italic' ,'oblique'`，默认： `normal` |
| fontWeight | 水印文字粗细       | `string \| number` | 可选：`'normal','light','weight'`，默认：`normal`              |
| fontColor  | 水印文字颜色       | `string`           | `rgba(0, 0, 0, .15)`                                           |
| fontSize   | 水印文字大小       | `string \| number` | `14`                                                           |
