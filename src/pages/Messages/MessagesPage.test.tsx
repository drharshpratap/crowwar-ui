import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MessagesPage } from './index';

describe('MessagesPage', () => {
  it('renders conversation list', () => {
    render(
      <MemoryRouter>
        <MessagesPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Conversations/i)).toBeInTheDocument();
    expect(screen.getByText(/Chat with seller/i)).toBeInTheDocument();
  });

  it('lets you select a conversation', () => {
    render(
      <MemoryRouter>
        <MessagesPage />
      </MemoryRouter>
    );

    expect(screen.getAllByRole('button', { name: /Send/i }).length).toBe(1);
  });
});
