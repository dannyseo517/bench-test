import React from 'react';
import { Text } from 'components/ui/core';
import * as Styled from './app.styled';
import { Header, ErrorFallback } from 'components/ui/core';
import { Transactions } from 'components/transactions';
import { ErrorBoundary } from 'react-error-boundary';

export const App = () => (
  <>
    <Header>
      <Text>Bench Test</Text>
    </Header>
    <Styled.PageContainer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Transactions />
      </ErrorBoundary>
    </Styled.PageContainer>
  </>
);
