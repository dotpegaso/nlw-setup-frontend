import { createGlobalStyle } from 'styled-components';

// theme is also fully typed
export const GlobalStyles = createGlobalStyle`
  * {
    color: ${props => props.theme.colors.white};
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
  }
  
  body {
    background-color: ${props => props.theme.colors.background};
    scroll-behavior: smooth;
  }
`;