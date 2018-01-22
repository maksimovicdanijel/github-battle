import axios from 'axios';

const apiUrl = 'https://api.github.com';

const getStarCount = (repos) => {
  return repos.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
};

const fetchUser = (username) => {
  return axios.get(`${apiUrl}/users/${username}`)
      .then(response => response.data);
};

const getUserRepos = (username) => {
  return axios.get(`${apiUrl}/users/${username}/repos`)
    .then((response) => {
      return response.data;
    });
};

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const stars = getStarCount(repos);

  return (followers * 3) + stars;
};

const getUserData = (username) => {
  return axios.all([
    fetchUser(username),
    getUserRepos(username)
  ]).then(axios.spread((profile, repos) => {
    return {
      profile,
      score: calculateScore(profile, repos)
    };
  }));
};

const sortPlayers = (players) => {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};

export default {
  fetchPopularRepos: (language) => {
    const url = `${apiUrl}/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
    const encodedUrl = encodeURI(url);

    return axios.get(encodedUrl).then(({data}) => {
      return data.items;
    }).catch((e) => {
      console.log(e);
      
      return [];
    });
  },

  fetchUser: fetchUser,

  battleResults: (players) => {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(err => console.warn(err));
  }
};