import React, { useCallback, useState } from 'react';
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

interface IProps {
  onChange: (event: React.MouseEvent) => void;
}

function EditorTextarea({ onChange }: IProps) {
  const [textareaValue, setTextareaValue] = useState('');

  const handleChange = useCallback(event => {
    setTextareaValue(event.target.value)
    onChange(event.target.value);
  }, [setTextareaValue, onChange]);

  return (
    <StyledContainer>
      <StyledTextarea
        placeholder="Enter text that you want to convert to emoji"
        onChange={handleChange}
        value={textareaValue}
      />
    </StyledContainer>
  );
};

export default EditorTextarea;
