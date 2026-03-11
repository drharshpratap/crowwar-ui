import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './index';

describe('HomePage', () => {
  it('renders hero and promotional sections', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Find Your Next Legendary Muscle Car/i)).toBeInTheDocument();
    expect(screen.getByText(/Pure American Muscle/i)).toBeInTheDocument();
  });

  it('displays search bar with placeholder', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Sell Your Muscle Car/i)).toBeInTheDocument();
  });
});
