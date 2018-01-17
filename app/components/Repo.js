import React from 'react';

const Repo = (props) => {
  return (
    <div className="repo">
      <p>#{props.rank}</p>
      <p><img src={props.avatar} /></p>
      <h5>{props.author}</h5>
    </div>
  );
};

export default Repo;