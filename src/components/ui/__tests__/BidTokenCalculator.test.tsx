import { render, screen } from '@testing-library/react';
import { BidTokenCalculator } from '../BidTokenCalculator';

describe('BidTokenCalculator', () => {
  it('shows bid amount and remaining tokens', () => {
    render(<BidTokenCalculator bidAmount={50000} tokensRequired={500} remaining={1500} />);
    expect(screen.getByText(/Bid Amount/i)).toBeInTheDocument();
    expect(screen.getByText(/Tokens Required/i)).toBeInTheDocument();
    expect(screen.getByText(/Remaining/i)).toBeInTheDocument();
  });
});
