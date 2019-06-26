import styled, { css } from "styled-components";

const DefaultButton = styled.button`
  background-color: ${({ main }) => (main ? "#563eb3" : "#4d4d4d")};
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  display: block;
  color: #fff;
  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
    color: #b3b3b3;
  }
`;

const InitButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  display: block;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const BtnTypeA = styled(DefaultButton).attrs({
  className: "btn-typeA"
})`
  width: 460px;
  color: #fff;
  min-height: 36px;

  &:hover:not(:disabled) {
    background-color: ${({ main }) => (main ? "#6754b3" : "#666")};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const BtnTypeB = styled(DefaultButton).attrs({ className: "btn-typeB" })`
  width: 560px;
  min-height: 54px;
  display: block;
  border-radius: 27px;
  background-color: #563eb3;
  &:hover:not(:disabled) {
    background-color: #6551b3;
  }
  &:disabled {
    background-color: #e6e6e6;
  }
`;

export const SmallType = styled.button.attrs({
  className: "btn-small"
})`
  display: block;
  border-radius: 4px;
  min-width: 90px;
  min-height: 28px;
  line-height: 28px;
  background-color: #4d4d4d;
  border: 0;
  color: #fff;
  padding: 0 22px;
  &:hover:not(:disabled) {
    background-color: #666;
  }
  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
    color: #b3b3b3;
  }
`;

export const OutlineType = styled(InitButton)`
  color: #999;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  padding: 5px 10px;
  &:hover:not(:disabled) {
    border-color: #e6e6e6;
    background-color: #e6e6e6;
    color: #4d4d4d;
  }
  &:disabled {
    border-color: #f0f0f0;
    background-color: #f0f0f0;
    color: #b3b3b3;
  }
`;

const DefaultTextButton = styled.button`
  border: 0;
  font-size: 12px;
  display: block;
  background-color: transparent;
  cursor: pointer;
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const TextTypeA = styled(DefaultTextButton).attrs({
  className: "btn-text--a"
})`
  color: #999;
  &:hover:not(:disabled) {
    color: #333;
  }
`;
export const TextTypeB = styled(DefaultTextButton).attrs({
  className: "btn-text--b"
})`
  color: #563eb3;
  text-decoration: underline;
`;
export const TextTypeC = styled(DefaultTextButton).attrs({
  className: "btn-text--c"
})`
  font-weight: bold;
  color: #563eb3;
  text-decoration: underline;
  ${({ color }) =>
    color &&
    css`
      color: ${color !== "white" ? "#333" : "#e6e6e6"};
      &:disabled {
        color: ${color === "white" && "#4d4d4d"};
      }
    `}
`;

// 버튼 박스

export const BtnGroupsBox = styled.div`
  display: flex;
  justify-content: center;
  ${BtnTypeA} {
    margin: 0 10px;
  }
`;
