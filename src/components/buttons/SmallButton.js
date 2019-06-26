import React from "react";
import { SmallType } from "./buttonStyled";
const SmallButton = ({ label, onClick, disabled }) => {
  return (
    <SmallType onClick={onClick} disabled={disabled}>
      {label}
    </SmallType>
  );
};

export default SmallButton;
