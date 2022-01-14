import { AppProps } from 'next/app';
import Router from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { setupStore } from '../store/store';
import GlobalStyles from '../styles/globalStyles';
import theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const store = setupStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
