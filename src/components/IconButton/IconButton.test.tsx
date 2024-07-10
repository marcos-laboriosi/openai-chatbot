import { screen } from '@testing-library/react';
import { render } from '../../utils/tests';
import { IconButton } from '.';
import DeleteIcon from '@assets/delete-icon.svg';
import userEvent from '@testing-library/user-event';

const onClickMock = jest.fn();

describe('components/IconButton', () => {
  const user = userEvent.setup();

  it('should render', () => {
    render(
      <IconButton onClick={onClickMock} icon={<DeleteIcon />}>
        Lorem ipsum
      </IconButton>
    );

    const button = screen.queryByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should trigger click', async () => {
    render(
      <IconButton onClick={onClickMock} icon={<DeleteIcon />}>
        Lorem ipsum
      </IconButton>
    );

    const button = screen.queryByRole('button')!;

    await user.click(button);

    expect(button).toBeInTheDocument();
  });
});
