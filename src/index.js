import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SidebarProvider from "./Contexts/SidebarContext";
import { Dark } from "./Themes/Dark";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Dark}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
