import React from 'react';
import axios from 'axios';

export default class OnePusheen extends React.Component {
  constructor(){
    super();
    this.state = {
      clickedPusheen: {}
    }
  }

  componentDidMount(){
    let name = this.props.params.pusheenName;
    axios.get(`/api/pusheens/${name}`)
      .then(res => this.setState({clickedPusheen: res.data}));
  }

  render(){
    return (
      <div>
        <h4>{this.state.clickedPusheen.name}</h4>
        <img src={this.state.clickedPusheen.image} />
      </div>
    );
  }
}

