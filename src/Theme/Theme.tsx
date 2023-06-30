import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bgOrange: "#DB843E",
    btnOrange: "#DB9842",
    bgGray: "#F6F8FB",
    gray: "#D1D1D1",
    black: "#000",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export type ThemeType = typeof theme;

export default Theme;
