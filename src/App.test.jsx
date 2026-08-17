import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders main app component without crashing', () => {
  render(<App />);
  expect(document.body).toBeDefined();
});