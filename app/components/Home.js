import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render () {
    return (
      <div class="home-container">
        <h1>Battle your friends and stuff...</h1>
        <Link className="button" to="/battle">Battle</Link>
      </div>
    );
  }
}

export default Home;