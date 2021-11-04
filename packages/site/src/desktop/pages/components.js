import React, { useState, useEffect, useRef } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { config } from '../../site.config.js';
import Markdown from '../components/markdown.js';

const LoadableComponent = (component) => {
  return Loadable.Map({
    loader: {
      md: component.md,
      code: component.code,
    },
    render: (loaded, props) => {
      return (
        <Markdown
          content={loaded.md.default}
          code={loaded.code.default}
          component={component}
          {...props}
        />
      );
    },
    loading() {
      return <div>Loading</div>;
    },
  });
};

const Components = () => {
  const components = [];

  Object.keys(config).forEach((key) => {
    config[key].childs.forEach((item) => {
      components.push(item);
    });
  });

  return (
    <div className="page page-components">
      <aside className="sidebar">
        <div>
          {Object.keys(config).map((key) => {
            return (
              <div key={key} className="nav-group">
                <div className="nav-title">{config[key].name}</div>

                {config[key].childs.map((component, i) => (
                  <div className="nav-item" key={i}>
                    <NavLink
                      to={`/components/${component.key}`}
                      className="nav-link"
                      activeclassname="active"
                    >
                      {component.name}
                    </NavLink>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </aside>
      <Switch>
        {components.map((component, i) => (
          <Route
            key={+i}
            path={`/components/${component.key}`}
            component={LoadableComponent(component)}
          />
        ))}
        <Redirect to="/components/Button" />
      </Switch>
    </div>
  );
};

export default Components;
