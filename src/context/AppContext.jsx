// src/context/AppContext.jsx
import React, { createContext } from "react";
import { doctorsData } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const value = {
    doctors: doctorsData,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
