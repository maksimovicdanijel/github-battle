import React, {Component} from 'react';

import SelectLanguage from './SelectLanguage';
import ReposGrid from './ReposGrid';
import api from '../utils/api';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      popularRepos: null
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.setState({popularRepos: null});

    const language = e.target.textContent;
    this.updateLanguage(e.target.textContent);

    this.fetchRepos(language);
  }

  updateLanguage(language) {
    this.setState({selectedLanguage: language});
  } 

  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos(language) {
    api.fetchPopularRepos(language).then(items => {
      this.setState({
        popularRepos: items
      })
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.handleOnClick} />
        {!this.state.popularRepos 
          ? 'Loading...'
          : <ReposGrid repos={this.state.popularRepos} />}
      </div>
    );
  }
}

export default Popular;