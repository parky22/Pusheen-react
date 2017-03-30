import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route} from 'react-router';

import App from './components/App';
import AllPusheens from './components/AllPusheens';
import About from './components/About';
import OnePusheen from './components/OnePusheen';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/all-puppies' component={AllPusheens} />
      <Route path='/about' component={About} />
      <Route path='/one-puppy/:name' component={OnePusheen} />
    </Route>
  </Router>,
  document.getElementById('app')
);
