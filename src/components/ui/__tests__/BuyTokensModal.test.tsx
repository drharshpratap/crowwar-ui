import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { BuyTokensModal } from '../BuyTokensModal';

vi.mock('../../store/tokenStore', () => ({
  useTokenStore: vi.fn(() => ({
    purchaseTokens: vi.fn(),
    tokens: {}
  }))
}));

describe('BuyTokensModal', () => {
  it('renders pack buttons when open', () => {
    render(<BuyTokensModal auctionId="car-01" open onClose={() => {}} />);
    expect(screen.getByText(/Buy Tokens/i)).toBeInTheDocument();
  });
});
