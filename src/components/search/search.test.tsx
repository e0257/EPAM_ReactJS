import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './search';

describe('Search component', () => {
    const initialQuery = 'Action';
    const onSearch = jest.fn();

    it('should renders input with the initial value', () => {
        const { container  } = render(<Search initialQuery={initialQuery} onSearch={onSearch} />);
        const inputElement = container.querySelector('.search-input');

        expect(inputElement).toHaveValue(initialQuery);
    });

    it('should call onChange with typed value after click Submit', () => {
        const { container } = render(<Search initialQuery={initialQuery} onSearch={onSearch} />);
        const inputElement = container.querySelector('.search-input') as Element;
        const submitButton = container.querySelector('.search-btn')as Element;

        fireEvent.change(inputElement, { target: { value: 'Drama' } });
        fireEvent.click(submitButton);

        expect(onSearch).toHaveBeenCalledWith('Drama');
    });

    it('should call onChange with typed value after click Enter', () => {
        const { container } = render(<Search initialQuery={initialQuery} onSearch={onSearch} />);
        const inputElement = container.querySelector('.search-input') as Element;

        fireEvent.change(inputElement, { target: { value: 'Comedy' } });
        fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

        expect(onSearch).toHaveBeenCalledWith('Comedy');
    });
});
