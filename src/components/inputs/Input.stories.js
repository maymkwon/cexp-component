import React from "react";
import InputText from "./InputText";
import OutlineSufixText from "./OutlineSufixText";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "./Checkbox";
import SearchSelectBox from "./SearchSelectBox";
import SelectBox from "./SelectBox";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
storiesOf("Inputs/Input", module).add("text", () => (
  <React.Fragment>
    <InputText
      onChange={action("change")}
      name="textfield"
      label="기본라벨입니다."
    />
    <InputText
      onChange={action("change")}
      name="textfield1"
      label="기본라벨입니다."
      value="aa"
    />
    <InputText
      onChange={action("change")}
      name="textfield1"
      label="DISABLED"
      value=""
      disabled={true}
    />
    <InputText
      onChange={action("change")}
      name="textfield1"
      label="READONLY"
      value="readonly"
      readOnly={true}
    />
    <InputText
      onChange={action("change")}
      name="textfield1"
      value=""
      defaultLabel="defaultLabel"
      placeholder="No label input"
    />
    <InputText
      onChange={action("change")}
      name="textfield1"
      value=""
      label="password"
      type="password"
      // placeholder="Helper Text"
    />
    <InputText
      onChange={action("change")}
      name="textfield12"
      value=""
      defaultLabel="search"
      placeholder="Search Text"
      searchAble={true}
    />
  </React.Fragment>
));
storiesOf("Inputs/Input", module).add("Outline Suffix Text field", () => (
  <React.Fragment>
    <OutlineSufixText
      onChange={action("change")}
      name="textfield"
      label="기본"
      suffix="VELT"
    />
    <OutlineSufixText
      onChange={action("change")}
      name="textfield1"
      label="DISABLED"
      suffix="VELT"
      disabled={true}
    />
  </React.Fragment>
));

storiesOf("Inputs|Checkbox", module)
  .add("check group", () => <CheckboxGroup onChange={action("check")} />)
  .add("check single", () => (
    <Checkbox
      id="single"
      handleCheckboxChange={action("change1")}
      label="기본라벨입니다."
      value={2}
    />
  ));
storiesOf("Inputs|Dropdown", module).add("with-search", () => (
  <SearchSelectBox onChange={action("check")} />
));
storiesOf("Inputs|Dropdown", module).add("default-dropdown", () => (
  <SelectBox onChange={action("check")} />
));
