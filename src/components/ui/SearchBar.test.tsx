import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders with placeholder text', () => {
    render(<SearchBar value="" />);
    expect(screen.getByPlaceholderText('Search cars, auctions, sellers')).toBeInTheDocument();
  });
});
