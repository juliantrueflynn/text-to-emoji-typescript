import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled/macro'
import Header from './components/Header';
import RevisionControls from './components/RevisionControls';
import MessagePanes from './components/MessagePanes';

const globalStyles = css`
  body,
  html {
    color: #DBEDF3;
    background-color: #404b69;
    font-family: 'Roboto', sans-serif;
  }

  body {
    padding-top: 40px;
    font-size: 17px;
  }
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 24px;
`;

const StyledForm = styled.form`
  box-sizing: border-box;
  width: 100%;
`;

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  width: 100%;
  margin: 0 auto;
  border: 1px solid rgba(219, 237, 243, 0.3);
  border-radius: 12px;
  background-color: #283149;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <StyledMain>
        <Header />
        <StyledForm>
          <StyledContainer>
            <MessagePanes />
          </StyledContainer>

          <RevisionControls />
        </StyledForm>
      </StyledMain>
    </>
  );
}

export default App;
