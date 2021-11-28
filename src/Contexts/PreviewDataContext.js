import React, { useState, useContext, createContext, useReducer } from "react";
import { useEffect } from "react";

//database
import { ref, set, onValue } from "firebase/database";
import { databaseRef } from "../firebase-config";

//utils
import { month_names } from "../Utils/DateVariables";

//reducer
import AppointmentReducer from "../Reducers/AppointmentReducer";

//create context
const DataContext = createContext();

function DataProvider({ children }) {
  //from firebase
  const [database, setDatabase] = useState([]);

  const [data, dispatchData] = useReducer(AppointmentReducer, []);

  const getData = (year, month, day) => {
    //store results of the search
    let results = [];

    if (database !== null) {
      //loop through yearly data
      for (const [yearKey, yearValue] of Object.entries(database)) {
        //get the right year
        if (yearKey === year) {
          //loop through its monthly data
          for (const [monthKey, monthValue] of Object.entries(yearValue)) {
            //get the right month
            if (monthKey === month) {
              //loop through its daily data
              for (const [dayKey, dayValue] of Object.entries(monthValue)) {
                //get the right day
                if (dayKey === day) {
                  //loop through appointments of that day

                  for (const [
                    // eslint-disable-next-line
                    appointments,
                    appointmentsValue,
                  ] of Object.entries(dayValue)) {
                    results.push(appointmentsValue);
                  }
                }
              }
            }
          }
        }
      }
    }
    return results;
  };

  const addData = (year, month, day, item, id) => {
    set(
      ref(
        databaseRef,
        "/" + year + "/" + month_names[month - 1] + "/" + day + "/" + id
      ),
      item
    );
  };

  useEffect(() => {
    onValue(ref(databaseRef, "/"), (snapshot) => {
      if (snapshot.val() !== null) {
        setDatabase(snapshot.val());
      }
    });
    dispatchData({ type: "LOAD_DATA", payload: data });

    // eslint-disable-next-line
  }, []);

  return (
    <DataContext.Provider
      value={{ data, dispatchData, database, addData, getData }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;

export const useDataContext = () => {
  return useContext(DataContext);
};
