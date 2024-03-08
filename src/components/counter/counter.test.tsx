import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './counter';

describe('Counter component', () => {
    it('should renders initial value provided in props', () => {
        const { getByText } = render(<Counter initialValue={5} />);

        expect(getByText('5')).toBeInTheDocument();
    });

    it('should decrement value after click "Dec" button', () => {
        const { getByText } = render(<Counter initialValue={3} />);
        const decrementButton = getByText('Dec');

        fireEvent.click(decrementButton);

        expect(getByText('2')).toBeInTheDocument();
    });

    it('should increment value after click "Inc" button', () => {
        const { getByText } = render(<Counter initialValue={3} />);
        const incrementButton = getByText('Inc');

        fireEvent.click(incrementButton);

        expect(getByText('4')).toBeInTheDocument();
    });
});