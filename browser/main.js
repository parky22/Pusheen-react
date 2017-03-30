import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route} from 'react-router';

import App from './components/App';
import AllPusheens from './components/AllPusheens';
import OnePusheen from './components/OnePusheen';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/all-pusheens' component={AllPusheens} />
      <Route path='/one-pusheen/:name' component={OnePusheen} />
    </Route>
  </Router>,
  document.getElementById('app')
);
