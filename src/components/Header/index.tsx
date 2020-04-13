import React from 'react';
import styled from '@emotion/styled/macro';

const StyledHeader = styled.header`
  text-align: center;
`;

const StyledTitle = styled.h1`
  margin: 0 15px 15px;
  font-weight: 700;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Text to Emoji</StyledTitle>
    </StyledHeader>
  );
}

export default Header;
