import React from 'react';
import { render, queryByText } from '@testing-library/react';
import TranslationResult from '.';

const DESCRIBED_DEFAULT_MESSAGE = 'Translation';

test('renders "Translation" if message empty', () => {
  const { getByText } = render(<TranslationResult message="" />);
  const result = getByText(DESCRIBED_DEFAULT_MESSAGE);

  expect(result).toBeInTheDocument();
});

test('renders message given if not empty', () => {
  const exampleText = 'Some result text'
  const { getByText } = render(<TranslationResult message={exampleText} />);
  const result = getByText(exampleText);

  expect(result).toBeInTheDocument();
});

test('does not render default message if message given', () => {
  const exampleText = 'Some result text'
  const { container } = render(<TranslationResult message={exampleText} />);
  const result = queryByText(container, DESCRIBED_DEFAULT_MESSAGE);

  expect(result).not.toBeInTheDocument();
});
