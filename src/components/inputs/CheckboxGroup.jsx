import React, { Component } from "react";
import Checkbox from "./Checkbox";
import styled from "styled-components";

const GroupBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const checkboxes = [
  {
    label: "check-box-1",
    value: "checkBox1-value"
  },
  {
    label: "check-box-2",
    value: "checkBox2-value"
  },
  {
    label: "check-box-3",
    value: "checkBox3-value"
  },
  {
    label: "check-box-4",
    value: "checkBox4-value"
  }
];
class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (!this.props.onChange) return;
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    this.props.onChange(this.selectedCheckboxes);
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, "is selected.");
    }
  };

  createCheckbox = (option, index) => (
    <Checkbox
      id={`storycheckgroup-${index + 1}`}
      label={option.label}
      value={option.value}
      handleCheckboxChange={this.toggleCheckbox}
      key={option.label}
    />
  );

  createCheckboxes = () => checkboxes.map(this.createCheckbox);

  render() {
    return <GroupBox>{this.createCheckboxes()}</GroupBox>;
  }
}

export default CheckboxGroup;
