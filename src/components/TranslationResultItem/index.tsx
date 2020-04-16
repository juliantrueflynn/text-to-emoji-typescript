import React from 'react';
import { CategoryFilter } from '../../actions';
import EmojiCategoryDataModel from '../../dataModels/EmojiCategoryDataModel';

type Props = {
  word: string;
  dictionaryMatch?: string[];
  category?: CategoryFilter;
};

const TranslationResultItem: React.FC<Props> = ({
  word,
  dictionaryMatch = [],
  category,
}) => {
  const [codePoint, shortcode] = dictionaryMatch;
  let unicode;

  if (codePoint) {
    if (!category || EmojiCategoryDataModel.get(category, shortcode)) {
      unicode = String.fromCodePoint(
        ...codePoint.split('-').map((bit) => parseInt(bit, 16))
      );
    }
  }

  return <> {unicode || word}</>;
};

export default TranslationResultItem;
