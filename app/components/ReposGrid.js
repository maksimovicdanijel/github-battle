import React from 'react';

import Repo from './Repo';
import withGithubRepoData from './withGithubRepoData';

const ReposGrid = (props) => {
  return (
    <div className="repos-grid">
      {props.repos.map((repo, index) => {
        const GithubRepo = withGithubRepoData(repo, index + 1, Repo);

        return (
          <GithubRepo key={index + 1} />
        );
      })}
    </div>
  );
};

export default ReposGrid;