import { screen } from '@testing-library/react';
import { render } from '@utils/tests';
import { Chat } from '.';

jest.mock('@hooks/useMessageHandlerAI', () => ({
  useMessageHandlerAI: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => []),
}));

describe('containers/Chat', () => {
  it('should render', async () => {
    render(<Chat />);

    const ChatElement = screen.queryByRole('main');

    expect(ChatElement).toBeInTheDocument();
  });
});

// testing-library is having issues to test div[contentEditable], affecting the possibility of tests that involve typing
// https://github.com/facebook/lexical/issues/4595
