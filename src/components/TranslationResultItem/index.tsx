import React from 'react';

type Props = {
  word: string;
  dictionaryMatch?: string[];
}

function TranslationResultItem({ word, dictionaryMatch = [] }: Props) {
  const [codePoint] = dictionaryMatch;
  let unicode

  if (dictionaryMatch) {
    unicode = String.fromCodePoint(
      ...codePoint.split('-').map(bit => parseInt(bit, 16))
    );
  }

  return (
    <>
      {' '}
      {unicode || word}
    </>
  );
}

export default TranslationResultItem;
