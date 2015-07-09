/*
 * React router defining which components are displayed on which paths
 *
 * We have a top-level `App` component which shows a navbar and different
 * components for each of the other pages.
 *
 */

import React from 'react';
import { Route } from 'react-router';

import About from './About';
import App from './App';
import Contact from './Contact';
import Home from './Home';

export default (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </Route>
)
