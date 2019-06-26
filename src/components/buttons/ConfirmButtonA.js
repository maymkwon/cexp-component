import React from "react";
import { BtnTypeA } from "./buttonStyled";
const ConfirmButtonA = ({ label, main, onClick, disabled }) => {
  return (
    <BtnTypeA main={main} onClick={onClick} disabled={disabled}>
      {label}
    </BtnTypeA>
  );
};

export default ConfirmButtonA;
