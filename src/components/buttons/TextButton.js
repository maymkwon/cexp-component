import React from "react";
import { TextTypeA, TextTypeB, TextTypeC } from "./buttonStyled";

export const TextButtonA = ({ label, onClick, disabled }) => {
  return (
    <TextTypeA onClick={onClick} disabled={disabled}>
      {label}
    </TextTypeA>
  );
};

export const TextButtonB = ({ label, onClick, disabled }) => {
  return (
    <TextTypeB onClick={onClick} disabled={disabled}>
      {label}
    </TextTypeB>
  );
};

export const TextButtonC = ({ label, color, onClick, disabled }) => {
  return (
    <TextTypeC onClick={onClick} color={color} disabled={disabled}>
      {label}
    </TextTypeC>
  );
};
