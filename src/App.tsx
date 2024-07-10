import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Header } from '@components';
import { theme } from '@constants';
import { Chat } from '@containers';
import { Provider } from 'react-redux';
import { store } from '@store/messages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Chat />
        <div id='overlays-portal' />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
