import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import strings from './util/strings';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(strings.LIST_LABEL);
  expect(linkElement).toBeInTheDocument();
});
