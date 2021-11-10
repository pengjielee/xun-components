import React from 'react';
import { Collapse } from 'xun-components';

const Demo = () => (
  <div className="demo-page demo-page-collapse">
    <header>
      <h3 className="demo-page-title">折叠面板</h3>
    </header>
    <main>
      <div className="demo-block white">
        <Collapse>
          <span key="1" title="1">
            Collapse1
          </span>
          <span key="2" title="2">
            Collapse2
          </span>
          <span key="3" title="3">
            Collapse3
          </span>
          <span key="4" title="4">
            Collapse4
          </span>
        </Collapse>
      </div>
    </main>
  </div>
);

export default Demo;
