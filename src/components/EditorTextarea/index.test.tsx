import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditorTextarea from '.';

const DESCRIBED_LABEL_TEXT = 'Enter text that you want to convert to emoji';

test('sets subject value onchange', () => {
  const exampleValue = 'Some example value';
  const { getByLabelText } = render(
    <EditorTextarea setDebouncedMessage={jest.fn()} />
  );
  const subject = getByLabelText(DESCRIBED_LABEL_TEXT) as HTMLInputElement;

  expect(subject.value).toBe('');
  fireEvent.change(subject, { target: { value: exampleValue } });
  expect(subject.value).toBe(exampleValue);
});
