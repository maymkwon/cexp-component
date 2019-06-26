import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

const checkboxes = [
  {
    title: "check-box-1",
    value: "checkBox1-value"
  },
  {
    title: "check-box-2",
    value: "checkBox2-value"
  },
  {
    title: "check-box-3",
    value: "checkBox3-value"
  },
  {
    title: "check-box-4",
    value: "checkBox4-value"
  }
];
class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(
      prevState => ({
        checkedItems: prevState.checkedItems.set(item, isChecked)
      }),
      () => onChange(this.state.checkedItems)
    );
  }

  render() {
    return (
      <React.Fragment>
        {checkboxes.map(item => (
          <label key={item.key}>
            {item.title}
            <Checkbox
              name={item.title}
              checked={this.state.checkedItems.get(item.title)}
              onChange={this.handleChange}
            />
          </label>
        ))}
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;
