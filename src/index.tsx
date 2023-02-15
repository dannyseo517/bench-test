import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/ui/theme';
import { GlobalStyle } from 'index.styled';
import { QueryClientProvider, QueryClient } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
