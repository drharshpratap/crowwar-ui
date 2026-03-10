import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuctionDetailPage } from './index';

describe('AuctionDetailPage', () => {
  it('renders specifications and seller details', () => {
    render(
      <MemoryRouter initialEntries={['/auction/car-01']}>
        <Routes>
          <Route path="/auction/:id" element={<AuctionDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Vehicle Specifications/i)).toBeInTheDocument();
    expect(screen.getByText(/Seller Notes/i)).toBeInTheDocument();
  });

  it('shows bid history heading and countdown timer', () => {
    render(
      <MemoryRouter initialEntries={['/auction/car-01']}>
        <Routes>
          <Route path="/auction/:id" element={<AuctionDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Bid History/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('countdown-timer').length).toBeGreaterThan(0);
  });
});
