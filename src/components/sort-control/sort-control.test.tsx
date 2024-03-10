import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortControl from './sort-control';

describe('SortControl component', () => {
  const selectedOption = 'Release Date';
  const onOptionChange = jest.fn();

  it('should render with the correct initial value', () => {
    const { getByText } = render(
      <SortControl selectedOption={selectedOption} onOptionChange={onOptionChange} />,
    );

    expect(getByText(selectedOption)).toBeInTheDocument();
  });

  it('should call onOptionChange when an option is selected', async() => {
    const { findByText } = render(
      <SortControl selectedOption={selectedOption} onOptionChange={onOptionChange} />,
    );

    fireEvent.mouseDown(await findByText(selectedOption)); // to open the dropdown
    fireEvent.click(await findByText('Title')); // to select the option

    expect(onOptionChange).toHaveBeenCalledWith('Title');
  });
});