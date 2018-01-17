import React, {Component} from 'react';

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
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className="languages">
        {languages.map((language, index) => {
          return <li onClick={this.handleOnClick} className={this.selectedClass(language)} key={index}>{language}</li>
        })}
      </ul>
    );
  }
}

export default Popular;