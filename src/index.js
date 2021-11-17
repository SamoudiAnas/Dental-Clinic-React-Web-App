import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

//themes
import { Dark } from "./Themes/Dark";
import { ThemeProvider } from "styled-components";

//contexts
import SidebarProvider from "./Contexts/SidebarContext";
import CalendarViewProvider from "./Contexts/CalendarViewContext";
import DateProvider from "./Contexts/DateContext";
import DataProvider from "./Contexts/PreviewDataContext";
import AddEventProvider from "./Contexts/AddEventContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Dark}>
      <SidebarProvider>
        <CalendarViewProvider>
          <DateProvider>
            <DataProvider>
              <AddEventProvider>
                <App />
              </AddEventProvider>
            </DataProvider>
          </DateProvider>
        </CalendarViewProvider>
      </SidebarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
