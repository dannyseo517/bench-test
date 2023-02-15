import { createGlobalStyle } from 'styled-components';
import { theme } from 'components/ui/theme';

type ThemeType = typeof theme;

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    font-family: 'Open Sans';
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.black};
    background: ${({ theme }) => theme.color.grey400};
  }
`;
