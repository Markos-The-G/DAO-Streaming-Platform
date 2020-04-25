import React, { Component } from 'react';
import Feed from '../../components/feed';
import "./home.css"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="home-div">
        <Feed />
      </div>
    );
  }
}

export default Home;