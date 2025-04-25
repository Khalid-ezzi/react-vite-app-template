import React from "react";
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./components/context/LanguageContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <LanguageProvider>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
