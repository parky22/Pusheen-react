import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export default class AllPuppies extends React.Component {
  constructor () {
    super();
    this.state = {pusheens: []};
  }
  componentDidMount () {
    axios.get('/api/pusheens')
    .then(response => {
      this.setState({
        pusheens: response.data
      });
    });
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.pusheens.map(pusheen => {
            return (
              <li key={pusheen.name}>
                <Link to={`/one-pusheen/${pusheen.name}`}>
                  {pusheen.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

