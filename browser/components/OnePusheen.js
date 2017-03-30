import React from 'react';
import axios from 'axios';

export default class OnePusheen extends React.Component {
  constructor () {
    super();
    this.state = {pusheen: {}};
  }
  componentDidMount () {
    axios.get(`/api/pusheens/${this.props.params.name}`)
    .then(response => {
      this.setState({
        pusheen: response.data
      });
    });
  }
  render () {
    return (
      <div>
        <h3>{this.state.pusheen.name}</h3>
        <img src={this.state.pusheen.image} />
      </div>
    );
  }
}

