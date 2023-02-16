import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    --svgfill: #212026;
    --light: rgb(255, 255, 255);
    --dark: #212026;
    --translucent: #ffffff00;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    transition: all 0.50s linear;
  }

a {
    /* background: ${({ theme }) => theme.backgroundColor}; */
    color: ${({ theme }) => theme.color};
    transition: all 0.50s linear;
}

a:hover {
    transition: all 0.10s linear;
}

  a:after {
  
  }
  `;
