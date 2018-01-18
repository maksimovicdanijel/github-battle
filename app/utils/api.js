import axios from 'axios';

export default {
  fetchPopularRepos: (language) => {
    const url = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
    const encodedUrl = encodeURI(url);

    return axios.get(encodedUrl).then(({data}) => {
      return data.items;
    }).catch((e) => {
      console.log(e);
      
      return [];
    });
  }
};