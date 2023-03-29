import ReactDOM from "react-dom/client";

import App from "./App";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  @font-face {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;800&display=swap");
  }

}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Global />
    <App />
  </>
);
