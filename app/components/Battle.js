import React, {Component} from 'react';

import BattleContestant from './BattleContestant';

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      battleCanStart: false
    }

    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(id) {
    this.addPlayer(id);
  }

  addPlayer(id) {
    const battleCanStart = this.state.players.length + 1 > 1;

    this.setState({
      players: [...this.state.players, id],
      battleCanStart
    });
  }

  render() {
    return (
      <div className="battle-container">
        <BattleContestant label="Player one" onSubmit={this.onSubmit} />
        <BattleContestant label= "Player two" onSubmit={this.onSubmit} />

        {this.state.battleCanStart 
          ? <button className="button">Start battle!</button>
          : ""}
      </div>
    );
  }
}

export default Battle;