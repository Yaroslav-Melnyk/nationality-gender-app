import React from 'react';
import { render } from '@testing-library/react';
import {Routes} from './App';

test('renders title is present', () => {
  const { getByText } = render(<Routes />);
  const title = getByText(/Prediction App/i);
  expect(title).toBeInTheDocument();
});
