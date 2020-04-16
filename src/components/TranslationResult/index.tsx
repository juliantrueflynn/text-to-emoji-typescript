import React from 'react';
import styled from '@emotion/styled/macro';
import { TranslationState, CategoryFilter } from '../../actions';
import TranslationResultItem from '../TranslationResultItem';

type Props = {
  category: CategoryFilter;
} & TranslationState;

const StyledColumn = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  min-height: 160px;
  padding: 18px 24px;
  border-top: 1px solid rgba(219, 237, 243, 0.3);

  @media (min-width: 768px) {
    border-top: 0;
    border-left: 1px solid rgba(219, 237, 243, 0.3);
  }
`;

const TranslationResult: React.FC<Props> = ({
  contentParts = [],
  codePointsDictionary = {},
  category,
}) => {
  if (!contentParts.length) {
    return <StyledColumn>Translation</StyledColumn>;
  }

  return (
    <StyledColumn>
      {contentParts.map((word, index) => (
        <TranslationResultItem
          key={word + index}
          dictionaryMatch={codePointsDictionary[word]}
          word={word}
          category={category}
        />
      ))}
    </StyledColumn>
  );
};

export default TranslationResult;
