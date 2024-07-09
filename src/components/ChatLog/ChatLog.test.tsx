import { screen } from '@testing-library/react';
import { render } from '../../utils/tests';
import { ChatLog, Messages } from '.';

const messagesMock: Messages = [
  { role: 'user', content: 'Lorem ipsum?', time: '10:04', loading: false },
  { role: 'assistant', content: 'Dolor sit?', time: '10:04', loading: false },
  { role: 'user', content: 'Amet', time: '10:05', loading: false },
  { role: 'assistant', content: '', time: '10:05', loading: true },
];

describe('components/ChatLog', () => {
  it('should render', async () => {
    render(<ChatLog messages={messagesMock} />);

    const chatLog = screen.queryByRole('log');

    expect(chatLog).toBeInTheDocument();
  });
});
