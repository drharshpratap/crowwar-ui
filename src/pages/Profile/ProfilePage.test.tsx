import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProfilePage } from './index';

describe('ProfilePage', () => {
  it('shows profile info and stats', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Saved Cars/i })).toBeInTheDocument();
    expect(screen.getByText(/Active bids/i)).toBeInTheDocument();
  });

  it('renders saved cars grid', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/Ending soon/i).length).toBeGreaterThan(0);
  });
});
