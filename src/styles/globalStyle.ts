import { createGlobalStyle } from 'styled-components';

// theme is also fully typed
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
  }
`;