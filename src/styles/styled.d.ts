// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      background: string,
      white: string,
      placeholder: string,
      black: string,
      secondaryBlack: string,
      primary: string,
      secondary: string,
      success: string,
    };
  }
}