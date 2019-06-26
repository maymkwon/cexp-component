import React from "react";
import { BtnTypeB } from "./buttonStyled";
const ConfirmButtonB = ({ label, onClick, disabled }) => {
  return (
    <BtnTypeB onClick={onClick} disabled={disabled}>
      {label}
    </BtnTypeB>
  );
};

export default ConfirmButtonB;
