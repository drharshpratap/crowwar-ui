import { render } from '@testing-library/react';
import { TokenProgressBar } from '../TokenProgressBar';

describe('TokenProgressBar', () => {
  it('renders progress based on used tokens', () => {
    const { getByTestId } = render(<TokenProgressBar total={2000} used={1000} />);
    expect(getByTestId('token-progress-bar-fill')).toHaveStyle({ width: '50%' });
  });
});
