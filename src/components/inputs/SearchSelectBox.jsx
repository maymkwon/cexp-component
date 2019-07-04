import React, { Component } from "react";
import Select from "react-select";
import InputText from "./InputText";

const scaryAnimals = [
  { label: "Alligators", value: 1 },
  { label: "Crocodiles", value: 2 },
  { label: "Sharks", value: 3 },
  { label: "Small crocodiles", value: 4 },
  { label: "Smallest crocodiles", value: 5 },
  { label: "Snakes", value: 6 },
  { label: "Snakes", value: 6 },
  { label: "Snakes", value: 6 },
  { label: "Snakes", value: 6 },
  { label: "Snakes", value: 6 }
];

class SearchSelectBox extends Component {
  constructor(props) {
    super(props);
    this.DropDownBox = React.createRef();
    this.select = React.createRef();
    this.ToggleButton = React.createRef();
    this.state = {
      isDropdownOpen: false,

      selectValue: {}
    };
  }
  onToggle = e => {
    e.preventDefault();
    if (this.state.isDropdownOpen) return;
    this.setState({ isDropdownOpen: true }, () => {
      console.log("??");
      document.addEventListener("click", this.onCloseOptions);
    });
  };

  onCloseOptions = e => {
    if (
      this.DropDownBox.current &&
      !this.DropDownBox.current.contains(e.target)
    ) {
      console.log("???");
      this.setState({ isDropdownOpen: false }, () => {
        document.removeEventListener("click", this.onCloseOptions);
      });
    }
  };
  onSelect = opt => {
    console.log("?");
    this.setState({
      selectValue: opt
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.isDropdownOpen &&
      JSON.stringify(this.state.selectValue) !==
        JSON.stringify(prevState.selectValue)
    ) {
      this.setState({ isDropdownOpen: false });
      document.removeEventListener("click", this.onCloseOptions);
    }
  }

  render() {
    const { isDropdownOpen, selectValue } = this.state;
    const { defaultOption } = this.props;
    return (
      <div>
        <div onClick={this.onToggle} ref={this.ToggleButton}>
          <InputText
            name="textfield2"
            label="Label"
            value={selectValue.label || ""}
            dropdown
          />
        </div>
        <div
          ref={this.DropDownBox}
          style={{ display: isDropdownOpen ? "block" : "none" }}
        >
          <Select
            ref={this.select}
            menuIsOpen={true}
            value={defaultOption}
            options={scaryAnimals}
            defaultMenuIsOpen={true}
            closeMenuOnSelect={false}
            onChange={this.onSelect}
          />
        </div>
      </div>
    );
  }
}

export default SearchSelectBox;
