import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BattleContestantInfo from './BattleContestantInfo'
import api from '../utils/api';

class BattleContestant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      user: null
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
    this.parentSubmit = this.props.onSubmit ? this.props.onSubmit : () => {};
    this.parentReset = this.props.onReset ? this.props.onReset : () => {};
  }

  onChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    api.fetchUser(this.state.username)
    
      .then((user) => {
        this.setState({
          user
        });

        this.parentSubmit(this.state.username);
      })
      
      .catch((err) => {
        console.log(err);
      });
  }

  onReset() {
    this.parentReset(this.state.username);

    this.setState({
      user: null,
      username: ''
    });
  }

  renderForm() {
    return (
      <label htmlFor={this.props.id}>
        <h2>{this.props.label}</h2>
        <input id={this.props.id} type="text" value={this.state.username} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Submit</button>
      </label>
    );
  }

  render() {
    return (
      <div className="battle-contestant">
        {this.state.user 
          ? <BattleContestantInfo 
              username={this.state.user.login} 
              avatar={this.state.user.avatar_url} 
              onReset={this.onReset} /> 
          : this.renderForm()}
      </div>
    );
  }
};

BattleContestant.defaultProps = {
  id: Math.random(),
  label: 'Label placeholder'
};

BattleContestant.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  onSubmit: PropTypes.func
};

export default BattleContestant;