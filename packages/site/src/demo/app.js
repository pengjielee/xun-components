import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import { config } from '../site.config.js';
import 'xun-components/dist/index.css';

const Home = () => {
  return <div>DEMO Home Page</div>;
};

const LoadableComponent = (component) => {
  return Loadable({
    loader: component.demo,
    loading() {
      return <div>Loading</div>;
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
    <div className="demo-app'">
      <Router>
        <Switch>
          {components.map((component, i) => (
            <Route
              key={+i}
              path={`/${component.key}`}
              component={LoadableComponent(component)}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
