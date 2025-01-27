"use client";

import React, { FC, useState } from "react";

interface DropdownSelectProps {
  defaultLabel: string;
}

const DropdownSelect: FC<DropdownSelectProps> = ({
  defaultLabel = "Select a color",
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
      />
    </div>
  );
};

export default DropdownSelect;
