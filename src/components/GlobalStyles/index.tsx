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

  body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

h2 {
  color: ${({ theme }) => theme.color};
  transition: all 0.50s linear;
}

span {
  transition: all 0.50s linear;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--dark);
  cursor: pointer;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

a {
    color: ${({ theme }) => theme.color};
    transition: all 0.50s linear;
    font-weight: 500;
    text-decoration: inherit;
}

a:hover {
    transition: all 0.10s linear;
    color: ${({ theme }) => theme.textHoverColor};
}

  `;
