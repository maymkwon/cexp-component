import React from "react";
import { OutlineType } from "./buttonStyled";
const OutlineButton = ({ label, onClick, disabled }) => {
  return (
    <OutlineType onClick={onClick} disabled={disabled}>
      {label}
    </OutlineType>
  );
};

export default OutlineButton;
