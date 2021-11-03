# Xun React Components

## Install

use `npm`

```node
npm i xun-components
```

or use `yarn`

```node
yarn add xun-components
```

## Usage

```javascript
import React from "react";
import ReactDOM from "react-dom";

import { Button } from "xun-components";

//导入样式
import "xun-components/dist/index.css";

const App = () => {
  return (
    <div className="app">
      <Button>click me</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## Visit

https://xun-components.vercel.app/#/   

or

https://pengjielee.github.io/xun-components/#/


