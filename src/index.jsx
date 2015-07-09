/*
 * Entry point for client-side application. 
 *
 * We render the react-router from `routes` which defines which components
 * should show for which URL's.
 *
 * To add a new page, edit './routes' and specify your page's component and the
 * URL you want it to show on.
 */

import React from 'react';
import routes from './routes';
import Router from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

React.render((
  <Router history={history} children={routes}/>
), document.getElementById('root'));
