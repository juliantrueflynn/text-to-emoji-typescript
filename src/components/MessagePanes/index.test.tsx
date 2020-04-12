import React from 'react';
import { renderWithRedux } from '../../testUtilities/renderWithRedux';
import MessagePanes from '.';

test('renders editor', () => {
  const { getByPlaceholderText } = renderWithRedux(<MessagePanes />);
  const result = getByPlaceholderText(/Enter text that you want to convert to emoji/);

  expect(result).toBeInTheDocument();
});

test('renders result box', () => {
  const { getByText } = renderWithRedux(<MessagePanes />);
  const result = getByText(/Translation/);

  expect(result).toBeInTheDocument();
});
