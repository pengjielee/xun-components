import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import { config } from '../site.config.js';
import 'xun-components/dist/index.css';
import Home from './pages/home';

import 'normalize.css';
import '../assets/styles/base.scss';
import '../assets/styles/demo.scss';

const LoadableComponent = (component) => {
  return Loadable({
    loader: component.demo,
    loading() {
      return <div className="loading">Loading</div>;
    },
  });
};

const App = () => {
  const components = [];

  Object.keys(config).forEach((key) => {
    config[key].childs.forEach((item) => {
      components.push(item);
    });
  });
  return (
    <Router>
      <div className="demo-app">

        <Switch>
          <Route path={`/`} component={Home} exact />
          {components.map((component, i) => (
            <Route
              key={+i}
              path={`/${component.key}`}
              component={LoadableComponent(component)}
            />
          ))}
          <Route path={`/components/`} component={Home} exact />
          {components.map((component, i) => (
            <Route
              key={+i}
              path={`/components/${component.key}`}
              component={LoadableComponent(component)}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
