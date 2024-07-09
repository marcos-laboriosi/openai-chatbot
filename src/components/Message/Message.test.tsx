import { screen } from '@testing-library/react';
import { render } from '../../utils/tests';
import { Message } from '.';

describe('components/Message', () => {
  it('should render', async () => {
    render(
      <Message role='assistant' time='10:04' loading={false}>
        Lorem ipsum
      </Message>
    );

    const message = screen.queryByText('Lorem ipsum');

    expect(message).toBeInTheDocument();
  });

  it('should be loading', async () => {
    render(
      <Message role='assistant' time='10:04' loading>
        Lorem ipsum
      </Message>
    );

    const loading = screen.queryByTestId('loading');

    expect(loading).toBeInTheDocument();
  });
});
