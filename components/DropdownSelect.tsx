"use client";

import React, { FC, useState } from 'react';

// These will be handy when writting the tests
export const INPUT_TEST_ID = 'dropdown-select';
export const INPUT_DEFAULT_VALUE = 'Select a color';

interface DropdownSelectProps {
  defaultLabel?: string;
}

const DropdownSelect: FC<DropdownSelectProps> = ({
  defaultLabel = INPUT_DEFAULT_VALUE,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultLabel);
  
  const handleInputOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('did press input');
  }

  return (
    <div className="w-full">
      <input
        readOnly
        aria-readonly
        type="text"
        value={selectedValue}
        onChange={() => {}}
        onClick={handleInputOnClick}
        className="border rounded p-2 w-full text-black caret-transparent"
        data-testid={INPUT_TEST_ID}
      />
    </div>
  );
};

export default DropdownSelect;
