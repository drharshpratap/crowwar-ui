import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuctionCard } from './AuctionCard';
import { sampleAuctions } from '../../mock/sampleData';

describe('AuctionCard', () => {
  it('renders auction summary information', () => {
    render(
      <MemoryRouter>
        <AuctionCard auction={sampleAuctions[0]} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Ferrari 488 Pista/)).toBeInTheDocument();
    expect(screen.getByText(/Live/)).toBeInTheDocument();
    expect(screen.getByText(/View Auction/)).toBeInTheDocument();
  });
});
