import { createGlobalStyle, css } from "styled-components";

export const themeColors = {
  gray: {
    900: "#16191D",
    800: "#1B1E22",
    700: "#24272B",
    600: "#3B3E41",
    500: "#71757A",
  },
  white: { itself: "#FFFFFF" },
  blue: { 600: "#0284C7", 500: "#0EA5E9", 400: "#38BDF8" },
  green: { 500: "#10B981" },
};

export const xlBody = css`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;

export const lBody = css`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const mBody = css`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const sBody = css`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    font-family: 'Satoshi', sans-serif;
    ${mBody};

    color-scheme: light dark;
    color: ${themeColors.white.itself};
    background-color: ${themeColors.gray["900"]};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    
    *, *:before, *:after {
      box-sizing: inherit
    }
  }


  h1 {
    margin: 0 0 24px 0;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;
  }

  h2 {
    margin: 0 0 16px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
  }
  
  button {
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyle;
