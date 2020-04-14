import React, { Fragment } from 'react';
import styled from '@emotion/styled/macro';
import { ITranslationState } from '../../actions';

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

function codePointToUnicode(input: string | undefined): string | null {
  if (input) {
    const integerInput = input.split('-').map(bit => parseInt(bit, 16));

    return String.fromCodePoint(...integerInput);
  }

  return null;
}

function TranslationResult({ contentParts = [], codePointsDictionary = {} }: ITranslationState) {
  if (!contentParts.length) {
    return <StyledColumn>Translation</StyledColumn>;
  }

  return (
    <StyledColumn>
      {contentParts.map((part, index) => {
        const unicode = codePointToUnicode(codePointsDictionary[part]);
        const text = unicode || part;

        return <Fragment key={text + index}>{' '}{text}</Fragment>;
      })}
    </StyledColumn>
  );
};

export default TranslationResult;
