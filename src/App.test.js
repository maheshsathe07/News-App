import { render, screen } from '@testing-library/react';
import App from './App';

// Suppress ReactDOMTestUtils deprecation warning
console.error = jest.fn();

test('renders NewsApp header in Navbar', () => {
  render(<App />);
  const headerElement = screen.getByText(/NewsApp/i);
  expect(headerElement).toBeInTheDocument();
});
