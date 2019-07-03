import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrap } from "./inputStyled";
import cn from "classnames";
import styled, { keyframes } from "styled-components";
const onAutoFillStart = keyframes`
  from{}
`;
const onAutoFillCancel = keyframes`
  to{}
`;
const Div = styled.div`
  & + & {
    /* padding-top: 20px; */
  }
  height: 56px;
  .input_container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    /* margin-bottom: 20px; */
  }

  .label {
    margin: 0;
    font-size: 14px;
    /* line-height: 16px; */
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.25s ease;
    pointer-events: none;
    color: #b3b3b3;
  }

  .basic-input {
    height: 36px;
    font-size: 14px;
    width: 100%;
    outline: none;
    margin: 0;
    border: 0;
    padding: 0 10px;
    &:read-only {
      color: #b3b3b3;
    }
    &:-webkit-autofill {
      animation-name: ${onAutoFillStart};
      transition: background-color 50000s ease-in-out 0s;
    }

    &:not(:-webkit-autofill) {
      animation-name: ${onAutoFillCancel};
    }
  }

  .hide {
    top: -8px;
    font-size: 12px;
    pointer-events: all;
  }
  &:hover {
    /* .border {
      height: 1px;
      background-color: #4d4d4d;
    } */
  }
  .border {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #4d4d4d;
    &.focus:not(.value) {
      height: 2px;
      background-color: #563eb3;
    }
    &.value {
      background-color: #d9d9d9;
    }
    &.disabled {
      background-color: #f0f0f0;
    }
    &.readOnly {
      background-color: transparent;
      border-bottom: 1px dotted #d9d9d9;
    }
  }
`;

class InputText extends Component {
  state = {
    value: "" || this.props.value,
    hide: false,
    focus: false
  };
  handleAutoFill = e => {
    this.setState({
      hide: e.animationName === "onAutoFillStart"
    });
  };

  render() {
    const { value, hide, focus } = this.state;
    const { name, label, disabled, readOnly } = this.props;
    const hideLabel = hide || focus || value;
    return (
      <Div>
        <label className="input_container">
          <span className={cn("label", { hide: hideLabel })}>{label}</span>
          <input
            className="basic-input"
            value={value}
            name={name}
            readOnly={readOnly}
            disabled={disabled}
            autoComplete="off"
            onAnimationStart={this.handleAutoFill}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            onChange={e => this.setState({ value: e.target.value })}
          />
          <div className={cn("border", { focus, value, disabled, readOnly })} />
        </label>
      </Div>
    );
  }
}

export default InputText;

PropTypes.propTypes = {
  name: PropTypes.string
};
