import React from "react";
import InputText from "./InputText";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "./Checkbox";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("Inputs|Text", module)
  .add("row", () => (
    <InputText
      onChange={action("change")}
      name="textfield"
      label="기본라벨입니다."
    />
  ))
  .add("column", () => (
    <InputText
      onChange={action("change")}
      name="textfield"
      label="기본라벨입니다."
      direction="column"
    />
  ));

storiesOf("Inputs|Checkbox", module)
  .add("check group", () => <CheckboxGroup onChange={action("check")} />)
  .add("column", () => (
    <Checkbox
      handleCheckboxChange={action("change1")}
      label="기본라벨입니다."
    />
  ));
