import React, { useState, useEffect, useRef } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';

import { config } from '../../site.config.js';

import Markdown from './markdown.js';

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
  // const { general, form, feedback, view, navigation, other } = components;

  const components = [];

  Object.keys(config).forEach((key) => {
    config[key].childs.forEach((item) => {
      components.push(item);
    });
  });

  return (
    <div className="page page-components">
      <aside className="page-sidebar">
        <dl>
          {Object.keys(config).map((key) => {
            return (
              <>
                <dt>{config[key].name}</dt>

                {config[key].childs.map((component, i) => (
                  <dd key={i}>
                    <Link to={`/components/${component.key}`}>
                      {component.name}
                    </Link>
                  </dd>
                ))}
              </>
            );
          })}
        </dl>
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
