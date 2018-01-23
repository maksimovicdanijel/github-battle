import React from 'react';
import PropTypes from 'prop-types';

import BattleContestantInfo from './BattleContestantInfo';

const BattleResultsItem = (props) => {
  const {avatar_url, login} = props.profile;

  return (
    <div className="battle-results-item">
      <h2>{props.label}</h2>
      <h3>Score: {props.score}</h3>

      <BattleContestantInfo avatar={avatar_url} username={login}>
        additional info comes here
      </BattleContestantInfo>
    </div>
  );
};

export default BattleResultsItem;