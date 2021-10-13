import React, { useState, useContext, createContext } from "react";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const initialState = {
    isSidebarOpen: false,
  };
  const [sidebarState, setSidebarState] = useState(initialState);
  const handleSidebar = () => {
    setSidebarState({
      ...sidebarState,
      isSidebarOpen: !sidebarState.isSidebarOpen,
    });
  };
  return (
    <SidebarContext.Provider
      value={{ sidebarState, setSidebarState, handleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
