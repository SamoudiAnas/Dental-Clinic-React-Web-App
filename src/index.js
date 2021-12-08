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
import LoginProvider from "./Contexts/LoginContext";
import OptionsProvider from "./Contexts/OptionsContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Dark}>
      <LoginProvider>
        <SidebarProvider>
          <CalendarViewProvider>
            <DateProvider>
              <DataProvider>
                <AddEventProvider>
                  <OptionsProvider>
                    <App />
                  </OptionsProvider>
                </AddEventProvider>
              </DataProvider>
            </DateProvider>
          </CalendarViewProvider>
        </SidebarProvider>
      </LoginProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
