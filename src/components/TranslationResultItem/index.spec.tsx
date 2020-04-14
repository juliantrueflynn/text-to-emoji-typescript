import React from 'react';
import { render } from '@testing-library/react';
import TranslationResultItem from '.';

test('renders word with space if dictionary match undefined', () => {
  const { getByText } = render(
    <TranslationResultItem word={'foobar'} dictionaryMatch={undefined} />
  );
  const result = getByText('foobar');

  expect(result).toBeInTheDocument();
});

test('renders unicode if dictionary match exists', () => {
  const { getByText } = render(
    <TranslationResultItem word={'smiley'} dictionaryMatch={'1f603'} />
  );
  const result = getByText('\ud83d\ude03');

  expect(result).toBeInTheDocument();
});
