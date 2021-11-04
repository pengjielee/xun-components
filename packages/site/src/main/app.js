import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import About from './pages/about';
import Components from './pages/components';

import 'normalize.css';
import '../assets/styles/base.scss';
import '../assets/styles/iphone.scss';
import '../assets/styles/markdown.scss';
import 'xun-components/dist/index.css';

const App = () => {
  return (
    <div className="site'">
      <Router>
        <header className="site-header">
          <nav>
            <Link to="/components">组件</Link>
            <Link to="/about">关于</Link>
          </nav>
        </header>

        <main className="site-main">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/components">
              <Components />
            </Route>
            <Redirect to="/components/Button" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
