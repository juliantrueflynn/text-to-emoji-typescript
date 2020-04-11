import React from 'react';
import styled from '@emotion/styled/macro'

interface IProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const StyledButton = styled.button`
  background-color: #0984E3;
  color: #FFF;
`;

function Button({ children, type = 'button', onClick, disabled }: IProps) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
