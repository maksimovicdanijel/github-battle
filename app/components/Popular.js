import React, {Component} from 'react';

import SelectLanguage from './SelectLanguage';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    }

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  isSelected(language) {
    return this.state.selectedLanguage === language;
  }

  selectedClass(language) {
    return this.isSelected(language) ? 'selected' : '';
  }

  handleOnClick(e) {
    this.updateLanguage(e.target.textContent);
  }

  updateLanguage(language) {
    this.setState({selectedLanguage: language});
  } 

  render() {
    return (
      <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.handleOnClick} />
    );
  }
}

export default Popular;