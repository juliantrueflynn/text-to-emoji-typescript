import React from 'react';
import styled from '@emotion/styled/macro'

interface IProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
}

const StyledButton = styled.button`
  background-color: #0984E3;
  color: #FFF;
`;

function Button({children, type = 'button'}: IProps) {
  return (
    <StyledButton type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
