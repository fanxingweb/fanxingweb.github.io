"use client";
import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});

  useEffect(() => {
    setGlobalState({ theme: applyTheme() });
  }, []);

  function getCurrentTheme() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme() {
    const theme = getCurrentTheme();
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    return theme;
  }

  // 你可以将函数传递给 children，以便能够更新状态
  const updateGlobalState = (newState) => {
    setGlobalState({ ...globalState, ...newState });
  };

  return (
    <GlobalContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
