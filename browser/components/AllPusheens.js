import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class AllPuppies extends React.Component {
  constructor () {
    super();
    this.state = {puppies: []};
  }
  componentDidMount () {
    axios.get('/api/puppies')
    .then(response => {
      this.setState({
        puppies: response.data
      });
    });
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.puppies.map(puppy => {
            return (
              <li key={puppy.name}>
                <Link to={`/one-puppy/${puppy.name}`}>
                  {puppy.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllPuppies;
