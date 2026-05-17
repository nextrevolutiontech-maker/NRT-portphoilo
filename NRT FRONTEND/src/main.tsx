
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

import { ThemeProvider } from "./app/components/theme-provider.tsx";

import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </HelmetProvider>
);
