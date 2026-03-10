import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ExplorePage } from './index';

describe('ExplorePage', () => {
  it('renders filter panel and search area', () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Explore Auctions/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search cars, auctions, sellers')).toBeInTheDocument();
  });

  it('shows a grid of auction cards', () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/Live/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Current Bid/i).length).toBeGreaterThan(0);
  });
});
