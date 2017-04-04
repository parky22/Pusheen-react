import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export default class AllPusheens extends React.Component {
  constructor(){
    super();
    this.state = {
      allPusheens: [],
      clickedPusheen: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    axios.get('/api/pusheens')
      .then(res => this.setState({allPusheens: res.data}))
  }

  handleClick(name){
    this.setState({clickedPusheen: name})
  }

  render () {
    return (
      <div>
        <ul>
          {
            /*
            Show a list of all the Pusheens by their name and link to their single page
            */
            this.state.allPusheens.map((pusheen, i) => {
              return (
                <li onClick={() => this.handleClick(pusheen.name)} key={i}>
                  <Link to={`/singlePusheen/${pusheen.name}`}>
                    <h5>{pusheen.name}</h5>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

