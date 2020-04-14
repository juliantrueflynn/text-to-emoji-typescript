import React from 'react';

type Props = {
  word: string;
  dictionaryMatch: string | undefined;
}

function TranslationResultItem({ word, dictionaryMatch }: Props) {
  let unicode

  if (dictionaryMatch) {
    unicode = String.fromCodePoint(
      ...dictionaryMatch.split('-').map(bit => parseInt(bit, 16))
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
