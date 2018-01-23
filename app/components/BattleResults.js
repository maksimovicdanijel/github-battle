import React, {Component} from 'react';
import qs from 'querystring';

import api from '../utils/api';
import BattleResultsItem from './BattleResultsItem';
import Loading from './Loading'

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
      <div className="battle-results">
        <BattleResultsItem 
          label="Winner" 
          profile={this.state.winner.profile} 
          score={this.state.winner.score} />

        <BattleResultsItem 
          label="Loser" 
          profile={this.state.loser.profile} 
          score={this.state.loser.score} />
      </div>
    );
  }

  render() {
    return (
      <div className="battle-results-container">
        {this.state.winner && this.state.loser ? this.renderResults() : <Loading />}
      </div>
    );
  }
}

export default BattleResults;