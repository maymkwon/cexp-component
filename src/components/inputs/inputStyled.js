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
