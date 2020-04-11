import React from 'react';
import styled from '@emotion/styled/macro'

interface IProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const StyledButton = styled.button`
  box-sizing: border-box;
  background-color: #00818a;
  color: #FFF;
  border: 0;
  outline: none;
  font-family: sans-serif;
`;

function Button({ children, type = 'button', onClick, disabled }: IProps) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
