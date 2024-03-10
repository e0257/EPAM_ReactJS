import React from 'react';
import Select from 'react-select';

import './sort-control.scss';

export type SortOptionType = 'Release Date' | 'Title';

type SelectOption = {
  value: SortOptionType,
  label: SortOptionType
}

interface SortControlProps {
  selectedOption: SortOptionType;
  onOptionChange: (newOption: SortOptionType) => void;
}

export default function SortControl({ selectedOption, onOptionChange }: SortControlProps) {
  const options: SelectOption[] = [
    { value: 'Release Date', label: 'Release Date'},
    { value: 'Title', label: 'Title'},
  ];

  const handleSelectChange = (option: SelectOption | null) => {
    if (option) {
      onOptionChange(option.value);
    }
  }

  return (
    <div className="sort-control">
      <label htmlFor="sort-by">Sort by</label>
      <Select
        id="sort-by"
        className="sort-control-container"
        classNamePrefix="sort-control"
        options={options}
        value={options.find(option => option.value === selectedOption)}
        unstyled={true}
        onChange={handleSelectChange}
      />
    </div>
  );
}