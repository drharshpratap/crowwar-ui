import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './index';

describe('HomePage', () => {
  it('renders hero and trending sections', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Featured Auction/i)).toBeInTheDocument();
    expect(screen.getByText(/Curated selections/i)).toBeInTheDocument();
  });

  it('displays search bar with placeholder', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Search cars, auctions, sellers')).toBeInTheDocument();
  });
});
