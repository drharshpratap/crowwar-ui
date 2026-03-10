import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WishlistPage } from './index';

describe('WishlistPage', () => {
  it('renders wishlist header', () => {
    render(
      <MemoryRouter>
        <WishlistPage />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/Wishlist/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Saved Auctions/i)).toBeInTheDocument();
  });

  it('displays saved auction cards with countdown', () => {
    render(
      <MemoryRouter>
        <WishlistPage />
      </MemoryRouter>
    );

    expect(screen.getAllByTestId('countdown-timer').length).toBeGreaterThan(0);
  });
});
