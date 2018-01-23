import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.interval = null;

    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    const stopper = this.props.text + '...';

    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text
        });
      } else {
        this.setState((prevState) => {
          return {
            text: prevState.text + '.'
          };
        })
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="loading">{this.state.text}</div>
    );
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

Loading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Loading;
