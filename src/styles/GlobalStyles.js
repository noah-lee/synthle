import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  /* CSS Reset */

  /* http://meyerweb.com/eric/tools/css/reset/ 
  * v2.0 | 20110126
  * License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Global Styles */

  :root {
    --color-main: #dadbdc;
    --color-accent: #7b1042;
    --color-white: #fcfdff;
    --color-black: #5b5b5c;
    --color-light: #fcfdff;
    --color-dark: #a7a8a9;
    /* --color-main: #2d394d;
    --color-accent: #b06177;
    --color-white: #fffaf8;
    --color-black: #0f1319;
    --color-light: #4a768d;
    --color-dark: #25303f; */
  }

  body {
    font-family: 'Roboto Mono', sans-serif;
    background-color: var(--color-main);
    color: var(--color-white);
  }

  /* #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  } */
`;
