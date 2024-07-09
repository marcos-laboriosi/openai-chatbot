import { screen } from '@testing-library/react';
import { render } from '../../utils/tests';
import { Header } from '.';
import userEvent from '@testing-library/user-event';

const clearMessagesMock = jest.fn();

jest.mock('@store/messages', () => ({
  clearMessages: () => clearMessagesMock(),
  store: { dispatch: jest.fn() },
}));

describe('components/Header', () => {
  const user = userEvent.setup();

  it('should render', () => {
    render(<Header />);

    const header = screen.queryByRole('banner');

    expect(header).toBeInTheDocument();
  });

  it('should render', async () => {
    render(<Header />);

    const button = await screen.findByRole('button');

    await user.click(button);

    expect(clearMessagesMock).toHaveBeenCalled();
  });
});
