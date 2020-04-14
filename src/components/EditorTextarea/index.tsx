import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled/macro';

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  border: 0;
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

const StyledScreenReadLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  border: 0;

  :focus,
  :active {
    clip: auto !important;
    -webkit-clip-path: none !important;
      clip-path: none !important;
    height: auto !important;
    margin: auto !important;
    overflow: visible !important;
    width: auto !important;
    white-space: normal !important;
  }
`;

interface IProps {
  onChange: (event: React.ChangeEvent) => void;
}

function EditorTextarea({ onChange }: IProps) {
  const [textareaValue, setTextareaValue] = useState('');

  const id = 'editorTextarea';

  const handleChange = useCallback(event => {
    setTextareaValue(event.target.value)
    onChange(event.target.value);
  }, [setTextareaValue, onChange]);

  return (
    <StyledContainer>
      <StyledScreenReadLabel htmlFor={id}>
        Enter text that you want to convert to emoji
      </StyledScreenReadLabel>
      <StyledTextarea
        id={id}
        placeholder="Enter text that you want to convert to emoji"
        onChange={handleChange}
        value={textareaValue}
      />
    </StyledContainer>
  );
};

export default EditorTextarea;
