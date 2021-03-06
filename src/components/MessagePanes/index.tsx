import React, { useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled/macro';
import { useDispatch, useSelector } from 'react-redux';
import { updateMessage, TranslationState, CategoryFilter } from '../../actions';
import TranslationResult from '../TranslationResult';
import EditorTextarea from '../EditorTextarea';
import { AppState } from '../../store';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(219, 237, 243, 0.3);
  border-radius: 12px;
  background-color: #283149;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const useThrottledCallback: Function = (
  callback: (content: string) => void,
  delay: number
) => {
  const timeoutRef = useRef<number>();
  const callbackRef = useRef(callback);
  const lastCalledRef = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => window.clearTimeout(timeoutRef.current), [delay]);

  return useCallback(
    (value: string) => {
      window.clearTimeout(timeoutRef.current);

      const invoke = (): void => {
        callbackRef.current(value);
        lastCalledRef.current = Date.now();
      };

      const elapsedTime = Date.now() - lastCalledRef.current;

      if (elapsedTime >= delay) {
        invoke();
      } else {
        timeoutRef.current = window.setTimeout(invoke, delay - elapsedTime);
      }
    },
    [delay]
  );
};

const MessagePanes: React.FC = () => {
  const dispatch = useDispatch();

  const category = useSelector<AppState, CategoryFilter>(
    (state) => state.categoryFilter.category
  );
  const { contentParts, codePointsDictionary } = useSelector<
    AppState,
    TranslationState
  >((state) => state.translation);

  const throttledHandleFormChange = useThrottledCallback(
    (content: string) => dispatch(updateMessage({ content })),
    500
  ) as (event: React.ChangeEvent<HTMLInputElement>) => void;

  return (
    <StyledContainer>
      <EditorTextarea setDebouncedMessage={throttledHandleFormChange} />
      <TranslationResult
        contentParts={contentParts}
        category={category}
        codePointsDictionary={codePointsDictionary}
      />
    </StyledContainer>
  );
};

export default MessagePanes;
