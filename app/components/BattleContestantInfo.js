import React from 'react';
import PropTypes from 'prop-types';

const BattleContestantInfo = (props) => {
  return (
    <div className="contestant-info">
      <img className="avatar" src={props.avatar} alt={`AVatar for ${props.username}`}/>
      <h5>{props.username}</h5>

      {props.children}
    </div>
  );
};

BattleContestantInfo.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default BattleContestantInfo;