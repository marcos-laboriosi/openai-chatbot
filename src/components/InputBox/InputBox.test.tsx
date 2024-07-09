import { screen } from '@testing-library/react';
import { render } from '../../utils/tests';
import { InputBox } from '.';

const submitMock = jest.fn();

describe('components/InputBox', () => {
  it('should render', () => {
    render(
      <InputBox
        id='input-box'
        onInput={jest.fn()}
        submit={submitMock}
        placeholder='Lorem ipsum'
        value=''
      />
    );

    const inputBox = screen.queryByRole('textbox');

    expect(inputBox).toBeInTheDocument();
  });
});
