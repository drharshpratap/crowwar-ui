import { render, screen } from '@testing-library/react';
import { describe, it, beforeEach, afterEach, vi } from 'vitest';
import { CountdownTimer } from './CountdownTimer';

describe('CountdownTimer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders hours, minutes, and seconds', () => {
    const future = new Date(Date.now() + 2 * 3600 * 1000 + 1500);
    render(<CountdownTimer endTime={future.toISOString()} />);

    vi.advanceTimersByTime(1000);

    expect(screen.getByTestId('countdown-timer')).toHaveTextContent(/\d{2}:\d{2}:\d{2}/);
  });
});
