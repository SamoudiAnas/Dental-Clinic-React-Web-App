import moment from "moment";
import React, { useState, useContext, createContext } from "react";

const DateContext = createContext();

function DateProvider({ children }) {
  const [date, setDate] = useState(moment());

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
}

export default DateProvider;

export const useDateContext = () => {
  return useContext(DateContext);
};
