import { screen } from '@testing-library/react';
import { render } from '../../utils/tests';
import { SendButton } from '.';
import userEvent from '@testing-library/user-event';

const onClickMock = jest.fn();

describe('components/SendButton', () => {
  const user = userEvent.setup();

  it('should render', () => {
    render(<SendButton onClick={onClickMock} />);

    const sendButton = screen.queryByRole('button');

    expect(sendButton).toBeInTheDocument();
  });

  it('should trigger click', async () => {
    render(<SendButton onClick={onClickMock} />);

    const sendButton = screen.queryByRole('button')!;

    await user.click(sendButton);

    expect(sendButton).toBeInTheDocument();
  });
});
