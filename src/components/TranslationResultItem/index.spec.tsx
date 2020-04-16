import React from 'react';
import { render } from '@testing-library/react';
import TranslationResultItem from '.';
import { Category } from '../../actions';

test('renders word with space if dictionary match undefined', () => {
  const { getByText } = render(<TranslationResultItem word={'foobar'} />);
  const result = getByText('foobar');

  expect(result).toBeInTheDocument();
});

test('renders unicode if dictionary match exists', () => {
  const dictionaryMatch = ['1f603', ':smiley:'];
  const { getByText } = render(
    <TranslationResultItem word={'smiley'} dictionaryMatch={dictionaryMatch} />
  );
  const result = getByText('\ud83d\ude03');

  expect(result).toBeInTheDocument();
});

test('renders word if category does not match', () => {
  const word = 'smiley';
  const dictionaryMatch = ['1f603', ':smiley:'];
  const { getByText } = render(
    <TranslationResultItem
      word={word}
      dictionaryMatch={dictionaryMatch}
      category={Category.flags}
    />
  );
  const result = getByText(word);

  expect(result).toBeInTheDocument();
});

test('renders unicode if category matches', () => {
  const word = 'smiley';
  const dictionaryMatch = ['1f603', ':smiley:'];
  const { getByText } = render(
    <TranslationResultItem
      word={word}
      dictionaryMatch={dictionaryMatch}
      category={Category.smileysAndPeople}
    />
  );
  const result = getByText('\ud83d\ude03');

  expect(result).toBeInTheDocument();
});
