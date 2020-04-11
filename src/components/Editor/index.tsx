import React from 'react';
import styled from '@emotion/styled/macro'

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  border: 0;
  font-family: sans-serif;
  color: #DBEDF3;
  padding: 18px 24px;
  background-color: transparent;
  min-height: 160px;
  height: 100%;
  width: 100%;
  resize: none;

  ::-webkit-input-placeholder {
    color: rgba(219, 237, 243, 0.5);
  }
`;

function Editor() {
  return (
    <StyledContainer>
      <StyledTextarea placeholder="Enter text that you want to convert to emoji" />
    </StyledContainer>
  );
};

export default Editor;
