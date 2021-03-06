import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  body {
    background-color: var(--primary);
    height: 100vh;
  }
  #root {
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    color: var(--text-primary)
  }
  ul {
    list-style: none;
  }

  :root {
    --primary: #1F1D2B;
    --text-primary: #C5C1D2;
    --text-secondary: #969599;
    --purple: #9750E8;
    --red: #E25E5E;
    --yellow: #D8E25E;
    --orange: #E2B55E;
    --green: #A0E25E;
  }
`;
