import React from 'react';

const withGithubRepoData = (repo, rank, Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.params = {
        rank: rank,
        avatar: repo.owner.avatar_url,
        url: repo.html_url,
        stars: repo.stargazers_count,
        author: repo.owner.login,
        name: repo.name
      };
    }

    render() {
      return (
        <Component {...this.params} />
      );
    }
  }
};

export default withGithubRepoData;