import React from 'react';
import PropTypes from 'prop-types';

const Repo = (props) => {
  return (
    <div className="repo">
      <div className="repo__rank">#{props.rank}</div>
      <ul className="repo__items">
        <li><img className="repo__avatar" src={props.avatar} alt={`Avatar for ${props.author}`}/></li>
        <li><a target="_blank" href={props.url}>@{props.author}</a></li>
        <li>{props.name}</li>
        <li>{props.stars} stars</li>
      </ul>
    </div>
  );
};

Repo.propTypes = {
  rank: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

Repo.defaultProps = {
  avatar: 'http://via.placeholder.com/350x150'
}

export default Repo;