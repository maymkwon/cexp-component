import React, { Component } from "react";
import Select from "react-select";

const scaryAnimals = [
  { label: "Alligators", value: 1 },
  { label: "Crocodiles", value: 2 },
  { label: "Sharks", value: 3 },
  { label: "Small crocodiles", value: 4 },
  { label: "Smallest crocodiles", value: 5 },
  { label: "Snakes", value: 6 },
  { label: "Snakes", value: 7 },
  { label: "Snakes", value: 8 },
  { label: "Snakes", value: 9 },
  { label: "Snakes", value: 10 }
];

class SelectBox extends Component {
  onSelect = opt => {
    console.log("?");
    this.setState({
      selectValue: opt
    });
  };

  render() {
    const { defaultOption } = this.props;
    return (
      <div>
        <Select
          value={defaultOption}
          options={scaryAnimals}
          onChange={this.onSelect}
          isSearchable={false}
        />
      </div>
    );
  }
}

export default SelectBox;
