import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';
import theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
