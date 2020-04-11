import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTranslation, ITranslationState } from '../../actions';
import TranslationResult from '../TranslationResult';
import EditorTextarea from '../EditorTextarea';
import { AppState } from '../../configureStore';

function useThrottledCallback(callback: any, delay: number): any {
  const timeoutRef = useRef<number>();
  const callbackRef = useRef(callback);
  const lastCalledRef = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => window.clearTimeout(timeoutRef.current), [delay]);

  return useCallback((value: string) => {
    window.clearTimeout(timeoutRef.current);

    function invoke() {
      callbackRef.current(value);
      lastCalledRef.current = Date.now();
    }

    const elapsed = Date.now() - lastCalledRef.current;

    if (elapsed >= delay) {
      invoke();
    } else {
      timeoutRef.current = window.setTimeout(invoke, delay - elapsed);
    }
  }, [delay]);
}

function MessagePanes() {
  const dispatch = useDispatch();
  const { original } = useSelector<AppState, ITranslationState>(state => state.translations)

  const throttledHandleFormChange = useThrottledCallback(
    (message: string) => {
      dispatch(updateTranslation({ translated: message, original: message }))
    },
    500
  );

  return (
    <>
      <EditorTextarea onChange={throttledHandleFormChange} />
      <TranslationResult original={original} />
    </>
  )
}

export default MessagePanes;
