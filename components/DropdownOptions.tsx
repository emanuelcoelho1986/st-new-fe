import React, { FC, useState } from "react";

export const LIST_NAME_TESTID = 'options-list';
export const INPUT_FILTER_TESTID = 'option-filter-input';
export const LIST_ITEM_PARTIAL_TESTID = (value: string) => {
    return `option-value-${value}`;
};

export type Option = {
    label: string;
    value?: string;
}

export type DropdownOptionsProps = {
    options: Option[];
    didSelectOption: (withValue: Option) => void;
    selectedOption?: Option;
    isSearchable?: boolean;
}

const DropdownOptions: FC<DropdownOptionsProps> = ({ options, isSearchable = true, didSelectOption = () => {}, selectedOption }) => {
    const [filteredOptions, setFilteredOptions] = useState(options);

    const handleSearchFor = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchFor = e.target.value;

        if(searchFor) {
            return setFilteredOptions(options.filter((option) => option.label.toLowerCase().includes(searchFor.toLowerCase())))
        }

        // Reset for initial state
        return setFilteredOptions(options);
    }

    return (
        <div className="absolute z-10 text-black bg-white border border-gray-300 rounded mt-1 w-full max-h-100 overflow-y-auto p-2"> 
            
            {isSearchable && <input type="text" onChange={handleSearchFor} className="w-full border border-gray-300 rounded p-2" data-testid={INPUT_FILTER_TESTID} />} 
            
            <ul className="" data-testid={LIST_NAME_TESTID}>
            {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                <li
                    tabIndex={index}
                    key={option.value}
                    onClick={() => didSelectOption(option)}
                    className={`p-2 cursor-pointer hover:bg-hover ${option.value === selectedOption?.value ? 'bg-selected' : ''}`}
                    data-testid={`option-value-${option.value}`}
                >
                    {option.label}
                </li>
                ))
            ) : (
                <li className="p-2 text-gray-500">No results found</li>
            )}
            </ul>
        </div>
    )
}

export default DropdownOptions;