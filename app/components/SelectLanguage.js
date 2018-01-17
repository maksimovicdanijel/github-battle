import React, {Component} from 'react';
import PropTypes from 'prop-types';

const SelectLanguage = (props) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {languages.map((language, index) => {
        return (
          <li 
            onClick={props.onSelect} 
            key={index}
            className={props.selectedLanguage === language ? 'selected' : ''}
          >
            {language}
          </li>
        );
      })}
    </ul>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SelectLanguage;