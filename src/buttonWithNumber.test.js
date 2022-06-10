import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import StyledButtonWithNumber from './buttonWithNumber';

it('does button show correct number', () => {
    const { getByRole } = render(<StyledButtonWithNumber number={3} />)
    expect(getByRole('button')).toHaveTextContent('3');
})

it('button should be green', () => {
    const { getByRole } = render(<StyledButtonWithNumber />)
    expect(getByRole('button')).toHaveStyle('color: green')
})