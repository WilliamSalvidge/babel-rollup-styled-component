import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import StyleButton from './styledButton';

it('does button render', () => {
    const {getByText} = render(<StyleButton>Hello, world!</StyleButton>)
    expect(getByText('Hello, world!')).toBeInTheDocument()
})