import React from 'react';
import * as Styled from './header.styled';

type Props = {
  /* required content of the header */
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return <Styled.Container role="banner">{children}</Styled.Container>;
};
