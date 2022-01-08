import React, { useState, useEffect, useContext, createContext } from "react";
import { getAppointments } from "../helpers/DataHelpers";

const AppointmentsContext = createContext();

function AppointmentsProvider({ children }) {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = () => {
    setIsLoading(true);
    getAppointments(setAppointments, setIsLoading);
  };

  useEffect(() => {
    loadData();
  }, []);

  const getAppointmentsByDate = (date) => {
    let results = [];

    for (let i = 0; i < appointments.length; i++) {
      if (appointments[i].date === date.format("YYYY-MM-DD")) {
        results.push(appointments[i]);
      }
    }

    return results;
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        setAppointments,
        getAppointmentsByDate,
        loadData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}

export default AppointmentsProvider;

export const useAppointmentsContext = () => {
  return useContext(AppointmentsContext);
};
