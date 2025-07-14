// src/context/AppContext.jsx

import React, { createContext } from "react";
// Change 'doctors' to 'doctorsData' to match the export name
import { doctorsData } from "../assets/assets"; 

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = '$';
  const value = {
    // Pass 'doctorsData' as 'doctors' in the context value if you prefer that name
    doctors: doctorsData, 
    currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;