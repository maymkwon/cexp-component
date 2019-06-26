import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrap } from "./inputStyled";
class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      value: this.props.value || ""
    };
  }
  onChange = e => {
    let value = e.target.value;
    const isValid = value !== "";
    this.setState({ value, isValid }, this.stateUpdate);
  };

  stateUpdate = () => {
    if (this.state.isValid) {
      this.props.onChange(this.state.value);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    const { name, label, direction } = this.props;
    const { value } = this.state;
    return (
      <Wrap direction={direction}>
        <label htmlFor={`id-${name}`}>{label}</label>
        <div className="area-input">
          <input
            id={`id-${name}`}
            type="text"
            onChange={this.onChange}
            name={name}
            value={value}
          />
        </div>
      </Wrap>
    );
  }
}

export default InputText;

PropTypes.propTypes = {
  name: PropTypes.string
};
