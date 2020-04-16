import React from 'react';
import { renderWithRedux } from '../../../testUtilities/renderWithRedux';
import { getByText } from '@testing-library/react';
import CategoryFilterSelect from '..';

test('defaults with value "All"', () => {
  const { getByDisplayValue } = renderWithRedux(<CategoryFilterSelect />);
  const result = getByDisplayValue('All');

  expect(result).toBeInTheDocument();
});

test('renders select options', () => {
  const selectOptions = [
    'All',
    'Smileys & People',
    'Food & Drink',
    'Animals & Nature',
    'Travel & Places',
    'Activity',
    'Objects',
    'Symbols',
    'Flags',
  ];
  const { container } = renderWithRedux(<CategoryFilterSelect />);

  selectOptions.forEach((option) => {
    expect(getByText(container, option)).toBeInTheDocument();
  });
});
