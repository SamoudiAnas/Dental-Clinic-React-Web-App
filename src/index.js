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
import AddEventProvider from "./Contexts/AddEventContext";
import OptionsProvider from "./Contexts/OptionsContext";
import AuthProvider from "./Contexts/AuthContext";
import AppointmentsProvider from "./Contexts/AppointmentsContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Dark}>
      <AuthProvider>
        <AppointmentsProvider>
          <SidebarProvider>
            <CalendarViewProvider>
              <DateProvider>
                <AddEventProvider>
                  <OptionsProvider>
                    <App />
                  </OptionsProvider>
                </AddEventProvider>
              </DateProvider>
            </CalendarViewProvider>
          </SidebarProvider>
        </AppointmentsProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
