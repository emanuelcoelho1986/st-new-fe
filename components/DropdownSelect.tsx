"use client";

import React, { FC, useState } from "react";
import DropdownOptions, { Option } from "./DropdownOptions";

// These will be handy when writting the tests
export const INPUT_TEST_ID = "dropdown-select";
export const INPUT_DEFAULT_VALUE = "Select a color";
export const INPUT_DEFAULT_OPTION: Option = { label: INPUT_DEFAULT_VALUE };

interface DropdownSelectProps {
  defaultOption?: Option;
  options: Option[];
  // by default this is searchable
  isSearchable?: boolean;
}

const DropdownSelect: FC<DropdownSelectProps> = ({
  defaultOption = INPUT_DEFAULT_OPTION,
  options,
  isSearchable = true,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleInputOnClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const didSelecAnOption = (option: Option) => {
    setSelectedOption(option);
    setIsOptionsVisible(false);
  };

  return (
    <div className="w-full relative">
      <input
        readOnly
        aria-readonly
        type="text"
        value={selectedOption.label}
        onChange={() => {}}
        onClick={handleInputOnClick}
        className="border rounded p-2 w-full text-black caret-transparent pointer-events-auto"
        data-testid={INPUT_TEST_ID}
      />

      {isOptionsVisible && (
        <DropdownOptions
          options={options}
          didSelectOption={didSelecAnOption}
          isSearchable={isSearchable}
          selectedOption={selectedOption}
          closeOptions={() => setIsOptionsVisible(false)}
        />
      )}
    </div>
  );
};

export default DropdownSelect;
