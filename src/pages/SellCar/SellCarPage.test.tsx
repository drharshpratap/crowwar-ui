import { render, screen } from '@testing-library/react';
import { SellCarPage } from './index';

describe('SellCarPage', () => {
  it('renders the stepper controls and default section', () => {
    render(<SellCarPage />);

    expect(screen.getByText(/Sell a Car/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Vehicle/i }).length).toBeGreaterThan(0);
  });

  it('shows navigation controls', () => {
    render(<SellCarPage />);

    expect(screen.getByText(/Step 1 of 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
  });
});
