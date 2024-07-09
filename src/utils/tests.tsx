import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { theme } from '@constants';
import { GlobalStyle } from '@components';
import { WrapperProps } from './types';

function render(ui: React.ReactElement, renderOptions?: RenderOptions) {
  function Wrapper({ children }: WrapperProps): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
