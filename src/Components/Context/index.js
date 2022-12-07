import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const Context = ({ children }) => {
  const [appTitle, setAppTitle] = useState("");
  const value = {
    appTitle,
    setAppTitle,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
