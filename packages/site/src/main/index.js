import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import DemoApp from '../demo/app.js';

import { isMobile } from '../utils';

ReactDOM.render(isMobile() ? <DemoApp /> : <App />, document.getElementById('root'));
