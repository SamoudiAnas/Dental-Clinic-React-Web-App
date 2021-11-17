import React, { useState, useContext, createContext } from "react";

const AddEventContext = createContext();

function AddEventProvider({ children }) {
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);

  return (
    <AddEventContext.Provider value={{ isAddEventOpen, setIsAddEventOpen }}>
      {children}
    </AddEventContext.Provider>
  );
}

export default AddEventProvider;

export const useAddEventContext = () => {
  return useContext(AddEventContext);
};
