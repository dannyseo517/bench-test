import styled from 'styled-components';
import { TextProps } from './text';

export const Container = styled.div<Omit<TextProps, 'children'>>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'inherit')};
  font-size: 14px;
  text-align: ${({ textAlign }) => textAlign};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscale;
`;
