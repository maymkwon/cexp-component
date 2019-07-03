import styled, { css } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  label + .area-input {
    margin-left: 15px;
  }
  ${({ direction }) =>
    direction === "column" &&
    css`
      flex-direction: column;
      label + .area-input {
        margin-top: 15px;
        margin-left: 0;
      }
    `}
`;

export const OutlineWrap = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 5px;
  }
  .area-input {
    position: relative;
    display: inline-block;
  }
  input {
    border-radius: 4px;
    /* box-sizing: border-box; */
    border: 1px solid #d9d9d9;
    padding: 11px 50px 11px 16px;
    font-size: 28px;
    outline: none;
    color: #4d4d4d;
    &::placeholder {
      color: #b3b3b3;
    }
    &:hover:not(:disabled) {
      border-color: #4d4d4d;
    }
    &:focus:not(:disabled) {
      color: #563eb3;
      border-width: 2px;
      border-color: #563eb3;
      background-color: #f5f3ff;
    }
    &:disabled {
      border-color: #f2f2f2;
      background-color: #f2f2f2;
    }
  }
  input:focus + .suffix {
    color: #563eb3;
  }
  .suffix {
    position: absolute;
    top: 50%;
    right: 16px;
    font-size: 14px;
    color: #4d4d4d;
    text-align: right;
    transform: translateY(-50%);
    opacity: 0.5;
  }
`;
