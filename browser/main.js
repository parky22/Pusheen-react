import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route} from 'react-router';

import App from './components/App';
import AllPusheens from './components/AllPusheens';
import OnePusheen from './components/OnePusheen';

/** Below we need:
* 1. a path to see a list of all the AllPusheens
* 2. a path to see one Pusheen
*/

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>,
  document.getElementById('app')
);
