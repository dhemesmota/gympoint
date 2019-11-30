import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0 !important;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    min-height: 100vh;
    max-height: 100vh;
  }

  html {
    font-size: 65%;
  }

  body {
    height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 1.4rem 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast {
    border-radius: 0.4rem !important;
  }

  .react-datepicker {
    font-size: 1.1rem !important;
    text-transform: capitalize;
  }

  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
    font-size: 1.3rem !important;
  }
`;
