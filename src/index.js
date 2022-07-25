import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const app = createRoot(document.getElementById("root"));

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    font-family: "Roboto", Helvetica Neue;
}

button {
  outline:none;
  border:none;
  cursor:pointer;
}
`;

app.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
