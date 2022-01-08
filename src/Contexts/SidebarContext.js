import React, { useState, useContext, createContext } from "react";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{ isSideBarOpen, setIsSideBarOpen, handleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
