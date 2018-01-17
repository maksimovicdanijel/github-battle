import React from 'react';

import Repo from './Repo';

const PopularRepos = (props) => {
  return (
    <div className="popular-repo">
      {props.repos.map((repo, index) => {
        return (
          <div key={repo.id} style={{float: 'left', marginRight: 20}}>
            <Repo
              rank={index + 1}
              avatar={repo.owner.avatar_url}
              author={repo.owner.login} />
          </div>
        );
      })}
    </div>
  );
};

export default PopularRepos;