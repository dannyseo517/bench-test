import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/ui/theme';
import { GlobalStyle } from 'index.styled';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
