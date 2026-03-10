import { render, screen } from '@testing-library/react';
import { TokenBalance } from '../TokenBalance';

describe('TokenBalance', () => {
  it('shows remaining tokens', () => {
    render(<TokenBalance total={2000} used={350} />);
    expect(screen.getByText(/Tokens Remaining/i)).toBeInTheDocument();
    expect(screen.getByText(/1650/i)).toBeInTheDocument();
  });
});
