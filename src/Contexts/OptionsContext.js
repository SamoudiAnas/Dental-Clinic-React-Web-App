import React, { useState, useContext, createContext } from "react";

const OptionsContext = createContext();

function OptionsProvider({ children }) {
  //selected patient appointment to edit
  const [selectedPatientToEdit, setSelectedPatientToEdit] = useState({});

  //edit modal
  const [isEditOpen, setIsEditOpen] = useState(false);

  //delete modal
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  //if there is an error we want to show to the user
  const [errorInEdit, setErrorInEdit] = useState(false);

  return (
    <OptionsContext.Provider
      value={{
        errorInEdit,
        setErrorInEdit,
        isEditOpen,
        setIsEditOpen,
        isDeleteOpen,
        setIsDeleteOpen,
        selectedPatientToEdit,
        setSelectedPatientToEdit,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
}

export default OptionsProvider;

export const useOptionsContext = () => {
  return useContext(OptionsContext);
};
