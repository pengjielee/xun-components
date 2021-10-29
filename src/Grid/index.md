## Grid

使用:

```tsx
import React, { useState } from 'react';
import { Grid } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-page demo-page-grid">
      <header>
        <h3 className="demo-page-title">栅格</h3>
      </header>
      <main>
        <div className="demo-block">
          <div className="demo-title">一列，间距为5</div>
          <Grid gap={5}>
            <Grid.Item>1</Grid.Item>
            <Grid.Item>2</Grid.Item>
            <Grid.Item>3</Grid.Item>
            <Grid.Item>4</Grid.Item>
            <Grid.Item>5</Grid.Item>
            <Grid.Item>6</Grid.Item>
          </Grid>
        </div>

        <div className="demo-block">
          <div className="demo-title">两列，间距为10</div>

          <Grid columns={2} gap={10}>
            <Grid.Item>1</Grid.Item>
            <Grid.Item>2</Grid.Item>
            <Grid.Item>3</Grid.Item>
            <Grid.Item>4</Grid.Item>
            <Grid.Item>5</Grid.Item>
            <Grid.Item>6</Grid.Item>
          </Grid>
        </div>

        <div className="demo-block">
          <div className="demo-title">两列，行间距为5，列间距为10</div>

          <Grid columns={2} gap={[5, 20]}>
            <Grid.Item>1</Grid.Item>
            <Grid.Item>2</Grid.Item>
            <Grid.Item>3</Grid.Item>
            <Grid.Item>4</Grid.Item>
            <Grid.Item>5</Grid.Item>
            <Grid.Item>6</Grid.Item>
          </Grid>
        </div>

        <div className="demo-block">
          <div className="demo-title">两列</div>

          <Grid columns={3} gap={['2px', '15px']}>
            <Grid.Item>1</Grid.Item>
            <Grid.Item>2</Grid.Item>
            <Grid.Item>3</Grid.Item>
            <Grid.Item span={2}>4，跨2列</Grid.Item>
            <Grid.Item>5</Grid.Item>
            <Grid.Item>6</Grid.Item>
          </Grid>
        </div>
      </main>
    </div>
  );
};

export default Demo;
```
