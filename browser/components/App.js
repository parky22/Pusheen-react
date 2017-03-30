import React from 'react';
import {Link} from 'react-router';

import OnePusheen from './OnePusheen';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      selectedPusheen: {}
    };
  }
  render () {
    return (
      <div>
        <div>
          <Link
            to='/all-pusheens'>
            <h1> All the Pusheens </h1>
          </Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
