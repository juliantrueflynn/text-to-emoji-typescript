import React from 'react';
import styled from '@emotion/styled/macro'

const StyledColumn = styled.div`
  box-sizing: border-box;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  border-left: 1px solid rgba(219, 237, 243, 0.3);
  padding: 18px 24px;
  font-family: sans-serif;
  min-height: 160px;
`;

interface IProps {
  original: string;
}

function TranslationResult({ original }: IProps) {
  return (
    <StyledColumn>
      {original || 'Translation'}
    </StyledColumn>
  );
};

export default TranslationResult;
