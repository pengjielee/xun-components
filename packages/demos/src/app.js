import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Counter from './pages/counter';
import Success from './pages/success';

import 'xun-components/dist/index.css';
import './assets/styles/base.scss';
import './assets/styles/page.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/success" component={Success}></Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
