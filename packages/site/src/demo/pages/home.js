import React, { useState } from 'react';
import { config } from '../../site.config.js';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

const Home = () => {
  return (
    <div className="demo-home">
      <Router>
        {Object.keys(config).map((key) => {
          return (
            <div key={key} className="demo-home-nav_group">
              <div className="demo-home-nav_title">{config[key].name}</div>

              {config[key].childs.map((component, i) => (
                <div className="demo-home-nav_item" key={i}>
                  <Link
                    to={`${component.key}`}
                    className="nav-link"
                    activeclassname="active"
                  >
                    {component.name}
                  </Link>
                </div>
              ))}
            </div>
          );
        })}
      </Router>
    </div>
  );
};

export default Home;
