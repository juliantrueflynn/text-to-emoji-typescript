import React from 'react';
import App from '..';
import { renderWithRedux } from '../../../testUtilities/renderWithRedux';

it('renders link to GitHub', () => {
  const github = 'https://github.com/juliantrueflynn/text-to-emoji-typescript';
  const { getByText } = renderWithRedux(<App />);
  const subject = getByText('GitHub');

  expect(subject).toHaveAttribute('href', github);
});

it('renders link to email', () => {
  const name = 'hello@juliantrueflynn.com';
  const contact = `mailto:${name}`;
  const { getByText } = renderWithRedux(<App />);
  const subject = getByText(name);

  expect(subject).toHaveAttribute('href', contact);
});
