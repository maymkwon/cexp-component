import React, { Component } from "react";
import PropTypes from "prop-types";
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
  position: relative;
  &:hover {
    .label:not(.hide):not(.disabled) {
      color: #4d4d4d;
    }
    .fill {
      fill: #4d4d4d;
    }
  }
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
    outline: none;
    margin: 0;
    border: 0;
    padding: 0px 40px 0 10px;

    &::placeholder,
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

  .border {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #4d4d4d;
    &.focus {
      height: 2px;
      background-color: #563eb3;
    }
    &.value:not(.focus):not(.readOnly) {
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

  .hide-text {
    font-size: 0;
  }
  .input-button {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 0;
    border: 0;
    background-color: #fff;
    outline: none;
    cursor: pointer;
  }
  .mask-button {
    &:hover {
      path {
        fill: #4d4d4d;
      }
    }
  }
`;

class InputText extends Component {
  state = {
    value: this.props.value || "",
    hide: false,
    focus: false,
    type: this.props.type || "text",
    isMask: true
  };
  handleAutoFill = e => {
    if (!this.props.label) return;
    this.setState({
      hide: e.animationName === "onAutoFillStart"
    });
  };

  toggleMask = () => {
    if (this.props.type !== "password") return;
    this.setState({
      isMask: !this.state.isMask,
      type: this.state.type !== "password" ? "password" : "text"
    });
  };

  clearValue = () => {
    this.setState({ value: "" });
  };

  render() {
    const { value, hide, focus, type, isMask } = this.state;
    const {
      name,
      label,
      disabled,
      readOnly,
      placeholder,
      defaultLabel
    } = this.props;
    const hideLabel = hide || focus || value;
    return (
      <Div>
        <label className="input_container">
          {label && (
            <span className={cn("label", { hide: hideLabel, disabled })}>
              {label}
            </span>
          )}
          {defaultLabel && <span className="hide-text">{defaultLabel}</span>}

          <input
            className="basic-input"
            type={type}
            value={value}
            name={name}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete="off"
            onAnimationStart={this.handleAutoFill}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            onChange={e => this.setState({ value: e.target.value })}
          />
          <div className={cn("border", { focus, value, disabled, readOnly })} />
        </label>
        {this.props.type === "password" && (
          <button
            className="input-button mask-button hide-text"
            onClick={this.toggleMask}
          >
            <PasswordIcon isMask={isMask} />
          </button>
        )}
        {this.props.searchAble && (
          <button
            className="input-button search-button hide-text"
            onClick={this.clearValue}
          >
            <SearchIcon value={value} />
          </button>
        )}
      </Div>
    );
  }
}

export default InputText;

PropTypes.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  searchAble: PropTypes.boolen
};

const PasswordIcon = ({ isMask }) => {
  return (
    <React.Fragment>
      <span>{isMask ? "show" : "hide"}</span>
      {!isMask && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g fill="#B3B3B3" fillRule="nonzero">
            <path d="M10.181 15c3.002 0 5.771-1.423 8.348-4.338a1 1 0 0 0 0-1.324C15.952 6.423 13.183 5 10.181 5 7.179 5 4.41 6.423 1.833 9.338a1 1 0 0 0 0 1.324C4.41 13.577 7.179 15 10.18 15zm0 1c-3.309 0-6.341-1.558-9.097-4.675a2 2 0 0 1 0-2.65C3.84 5.558 6.872 4 10.18 4c3.309 0 6.341 1.558 9.097 4.675a2 2 0 0 1 0 2.65C16.522 14.442 13.49 16 10.181 16z" />
            <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </g>
        </svg>
      )}
      {isMask && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g fill="#B3B3B3" fillRule="evenodd">
            <path
              fillRule="nonzero"
              d="M7.306 15.588l.82-.82A9.151 9.151 0 0 0 10.18 15c3.002 0 5.771-1.423 8.348-4.338a1 1 0 0 0 0-1.324c-.842-.953-1.705-1.746-2.59-2.383l.715-.715a16.97 16.97 0 0 1 2.624 2.435 2 2 0 0 1 0 2.65C16.522 14.442 13.49 16 10.181 16c-.983 0-1.94-.137-2.875-.412zm-1.045-.37c-1.822-.753-3.548-2.05-5.177-3.893a2 2 0 0 1 0-2.65C3.84 5.558 6.872 4 10.18 4c1.976 0 3.853.556 5.632 1.667l-.727.727C13.52 5.461 11.889 5 10.18 5 7.179 5 4.41 6.423 1.833 9.338a1 1 0 0 0 0 1.324c1.651 1.868 3.381 3.123 5.201 3.784l-.773.773z"
            />
            <path d="M17.571 2.5l.707.707-15 15-.707-.707z" />
            <path
              fillRule="nonzero"
              d="M10 8a2 2 0 0 0-1.415 3.413c.001.001.942-.944 2.822-2.835A1.993 1.993 0 0 0 10 8zm2.74.654L8.61 12.82c-.184-.118-.58-.546-.732-.7a3 3 0 0 1 4.226-4.259c.154.152.517.612.636.793z"
            />
          </g>
        </svg>
      )}
    </React.Fragment>
  );
};
const SearchIcon = ({ value }) => {
  let isSearch = value === "";
  return (
    <React.Fragment>
      <span>{isSearch ? "search" : "clear"}</span>
      {isSearch && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            className="fill"
            fill="#b3b3b3"
            fillRule="nonzero"
            d="M10.923 12.829a5.85 5.85 0 1 1 1.37-1.173l3.162 3.162-.637.637-2.865-2.866.002-.001-1.007-1.006a4.85 4.85 0 1 0-.756.517l.73.73z"
          />
        </svg>
      )}
      {!isSearch && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <rect
              width="16"
              height="16"
              fill="#D9D9D9"
              fillRule="nonzero"
              rx="8"
            />
            <path
              fill="#FFF"
              d="M8.75 8L11 10.25l-.75.75L8 8.75l-2.25 2.251-.75-.75 2.25-2.25L5 5.75 5.75 5 8 7.25 10.25 5l.75.751-2.25 2.25z"
            />
          </g>
        </svg>
      )}
    </React.Fragment>
  );
};
