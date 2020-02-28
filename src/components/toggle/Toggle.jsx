import React from "react";
import PropTypes from "prop-types";
import "./Toggle.scss";

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.startActive
    };
  }

  onChange = () => {
    this.setState(prevState => {
      const isActive = !prevState.isActive;
      this.props.onChange(isActive);
      return {
        ...prevState,
        isActive
      };
    });
  };

  render() {
    return (
      <div className="App-Toggle">
        <input
          type="checkbox"
          id="AppToggleCheckbox"
          onChange={this.onChange}
          checked={this.state.isActive}
          className="App-Toggle--checkbox"
        />
        <label
          className={`App-Toggle--btn ${
            this.state.isActive ? "App-Toggle--btn__active" : ""
          }`}
          for="AppToggleCheckbox"
          aria-label="Toggle On/Off"
        />
      </div>
    );
  }
}

Toggle.defaultProps = {
  startActive: false,
  onChange: () => undefined
};

Toggle.propTypes = {
  startActive: PropTypes.bool,
  onChange: PropTypes.func
};

export default Toggle;
