import React from 'react';
import axios from 'axios';

class OnePuppy extends React.Component {
  constructor () {
    super();
    this.state = {puppy: {}};
  }
  componentDidMount () {
    axios.get(`/api/puppies/${this.props.params.name}`)
    .then(response => {
      this.setState({
        puppy: response.data
      });
    });
  }
  render () {
    return (
      <div>
        <h3>{this.state.puppy.name}</h3>
        <img src={this.state.puppy.image} />
      </div>
    );
  }
}

export default OnePuppy;
