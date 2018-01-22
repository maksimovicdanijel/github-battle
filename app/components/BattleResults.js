import React, {Component} from 'react';
import qs from 'querystring';

import api from '../utils/api';

class BattleResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null
    }
  }

  componentDidMount() {
    const queryString = qs.parse(this.props.location.search.substr(1));

    let players = queryString['players'].split(',');

    api.battleResults(players)
      .then((results) => {
        this.setState({
          winner: results[0],
          loser: results[1]
        });
      });
  }

  renderResults() {
    return (
      'results here'
    );
  }

  render() {
    return (
      <div className="battle-results-container">
        {this.state.winner && this.state.loser ? this.renderResults() : 'Loading...'}
      </div>
    );
  }
}

export default BattleResults;