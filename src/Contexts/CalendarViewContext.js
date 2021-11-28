import React, { useState, useContext, createContext } from "react";

const CalendarViewContext = createContext();

function CalendarViewProvider({ children }) {
  const [calendarViewMode, setCalendarViewMode] = useState("week");

  return (
    <CalendarViewContext.Provider
      value={{ calendarViewMode, setCalendarViewMode }}
    >
      {children}
    </CalendarViewContext.Provider>
  );
}

export default CalendarViewProvider;

export const useCalendarViewContext = () => {
  return useContext(CalendarViewContext);
};
