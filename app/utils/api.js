import axios from 'axios';

const apiUrl = 'https://api.github.com';

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

  fetchUser: (username) => {
    return axios.get(`${apiUrl}/users/${username}`)

      .then(response => response.data);
  }
};