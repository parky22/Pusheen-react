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
          <Link to="/allPusheens">
            <h3> All Pusheens </h3>
          </Link>
          {
            /*
            Show a link called "All the Pusheens" that will present a list of all the pusheens when clicked
            */

          }
        </div>
        <hr />
        <div>
          {
            /*
            This area should show 1) list of all the pusheens  or 2) one pusheens
            */
            this.props.children
          }
        </div>
      </div>
    );
  }
}

export default App;
