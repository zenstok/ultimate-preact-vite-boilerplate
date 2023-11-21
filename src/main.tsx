import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import { App } from "./app";

const rootElement = document.getElementById("app") as HTMLElement;

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
