import React, {Component} from 'react';

import SelectLanguage from './SelectLanguage';
import PopularRepos from './PopularRepos';
import api from '../utils/api';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      popularRepos: []
    }

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.updateLanguage(e.target.textContent);
  }

  updateLanguage(language) {
    this.setState({selectedLanguage: language});
  } 

  componentDidMount() {
    api.fetchPopularRepos('Java').then(items => {
      this.setState({
        popularRepos: items
      })
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.handleOnClick} />
        <PopularRepos repos={this.state.popularRepos} />
      </div>
    );
  }
}

export default Popular;