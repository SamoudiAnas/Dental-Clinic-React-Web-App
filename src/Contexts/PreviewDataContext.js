import React, { useState, useContext, createContext } from "react";
import { useEffect } from "react";
import { v4 } from "uuid";
import { replaceEmptyAppointments } from "../Utils/BuildAppointments";
import { ref, set, onValue } from "firebase/database";
import { databaseRef } from "../firebase-config";
import { month_names } from "../Utils/DateVariables";

const DataContext = createContext();

function DataProvider({ children }) {
  const initialState = [
    {
      id: v4(),
      clientName: "Anas Samoudi",
      date: "2021-10-31",
      hour: "09:00 - 10:00",
      index: 1,
    },
    {
      id: v4(),
      clientName: "Someone",
      date: "2021-10-31",
      hour: "15:00 - 16:00",
      index: 7,
    },
  ];

  //from firebase
  const [database, setDatabase] = useState([]);

  const [data, setData] = useState(initialState);

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
    setData(replaceEmptyAppointments(data));

    // eslint-disable-next-line
  }, []);

  return (
    <DataContext.Provider value={{ data, setData, database, addData, getData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;

export const useDataContext = () => {
  return useContext(DataContext);
};
