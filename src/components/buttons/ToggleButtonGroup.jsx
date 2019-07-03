import React, { Component } from "react";
import styled from "styled-components";
import cn from "classnames";
let groups = ["25%", "50", "75", "100"];

const ButtonWrap = styled.div`
  display: flex;
  button {
    width: 100px;
    height: 36px;
    border: 1px solid #d9d9d9;
    margin: 0;
    outline: none;
    color: #808080;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    &.select {
      color: #1a1a1a;
    }
    &:hover:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.03);
      color: #1a1a1a;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #f2f2f2;
      color: #999999;
      border-color: #f2f2f2;
      border-right-color: #fff;
    }
  }
  /* 없어야함 */
  button + button {
    margin-top: 0;
    border-left: 0;
  }
  /*  */

  button:first-child {
    border-radius: 4px 0 0 4px;
  }
  button:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

class ToggleButtonGroup extends Component {
  state = {
    selectIndex: null
  };
  onClickIndex = index => {
    this.setState({ selectIndex: index }, () =>
      this.props.onClick(this.state.selectIndex)
    );
  };
  render() {
    const { disabled } = this.props;
    const { selectIndex } = this.state;
    return (
      <ButtonWrap>
        {groups.map((item, index) => {
          return (
            <button
              className={cn({ select: index === selectIndex })}
              key={index}
              onClick={() => this.onClickIndex(index)}
              disabled={disabled}
            >
              {item}
            </button>
          );
        })}
      </ButtonWrap>
    );
  }
}

export default ToggleButtonGroup;
