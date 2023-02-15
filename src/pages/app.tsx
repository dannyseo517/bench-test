import React from 'react';
import { Text } from 'components/ui/core';
import * as Styled from './app.styled';
import { Header } from 'components/ui/core/header';

export const App = () => (
  <>
    <Header>
      <Text>Bench Test</Text>
    </Header>
    <Styled.PageContainer>test</Styled.PageContainer>
  </>
);
