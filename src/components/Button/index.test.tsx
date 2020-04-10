import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

test('renders child text', () => {
  const { getByText } = render(<Button>Some text</Button>);
  const linkElement = getByText(/Some text/i);
  expect(linkElement).toBeInTheDocument();
});
