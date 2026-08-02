import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { I18nProvider } from "./i18n/I18nProvider";
import App from "./App";

const root = document.getElementById("root");

if (!root) throw new Error("React root element was not found.");

createRoot(root).render(
  <React.StrictMode>
    <I18nProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </I18nProvider>
  </React.StrictMode>,
);
