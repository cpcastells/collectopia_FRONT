import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
      form: string;
    };

    colors: {
      "light-green": string;
      "medium-green": string;
      "dark-green": string;
      background: string;
      error: string;
      yellow: string;
    };

    padding: string;
  }
}
