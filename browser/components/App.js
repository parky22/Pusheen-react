import React from 'react';
import {Link} from 'react-router';

/**
 * This App Component should be the home page where we first see the "All the Pusheens" link
 */

class App extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}> Welcome to React with Pusheen! </h1>
        <hr />
        <div>
          <h3> 1. Change me to a "All the Pusheens" link </h3>
          {
            /*
            Show a link called "All the Pusheens" that will present a list of all the pusheens when clicked
            */

          }
        </div>
        <hr />
        <div>
          <h3> 2. Change this area so that it can switch between a list of all Pusheens and a single Pusheen </h3>
          {
            /*
            This area should show 1) list of all the pusheens  or 2) one pusheens
            */
          }
        </div>
      </div>
    );
  }
}

export default App;
