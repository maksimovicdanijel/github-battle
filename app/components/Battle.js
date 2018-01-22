import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import BattleContestant from './BattleContestant';

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      battleCanStart: false
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  
  onSubmit(username) {
    this.addPlayer(username);
  }

  onReset(username) {
    this.removePlayer(username);
  }

  addPlayer(username) {
    const battleCanStart = this.state.players.length + 1 > 1;

    this.setState({
      players: [...this.state.players, username],
      battleCanStart
    });
  }

  removePlayer(username) {
    const players = this.state.players;

    players.splice(players.indexOf(username), 1);

    this.setState({
      players
    });
  }

  render() {
    return (
      <div className="battle-container">
        <BattleContestant label="Player one" onSubmit={this.onSubmit} onReset={this.onReset} />
        <BattleContestant label= "Player two" onSubmit={this.onSubmit} onReset={this.onReset} />

        {this.state.battleCanStart 
          && <Link 
              to={{
                pathname: this.props.location.pathname + '/results',
                search: `?players=${this.state.players.join(',')}`
              }} 
              className="button"
            >
              Start battle!
            </Link>
          }
      </div>
    );
  }
}

export default Battle;