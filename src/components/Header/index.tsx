import React from 'react';
import styled from '@emotion/styled/macro';
import RevisionControls from '../RevisionControls';

const StyledNavBar = styled.div`
  background-color: #283149;
`;

const StyledHeader = styled.header`
  background-color: rgba(40, 49, 73, 0.7);
  padding: 10px 18px 80px;
  max-width: 1240px;
  margin: 0 auto;
`;

const StyledLink = styled.a`
  color: rgba(219, 237, 243, 0.7);
`;

function Header() {
  return (
    <>
      <StyledNavBar>
        <StyledLink href="/">Text to Emoji</StyledLink>
      </StyledNavBar>
      <StyledHeader>
        <RevisionControls />
      </StyledHeader>
    </>
  );
}

export default Header;
