"use client";
import { useEffect } from "react";
import { useGlobalActions, useGlobalState } from "@/store/globalStore";
import { getCurrentTheme } from "@/utils/tools";
import { useUpdateEffect } from "@/hooks";
import { getItem } from "@/utils/localStorage";

import { GlobalStoreEnum, ThemeColor, ThemeMode } from "@/enum";
import StyledGlobalTheme from "../styled-global";

export default function ClientThemeComponent({ children }) {
  const globalState = useGlobalState();
  const { setGlobalState } = useGlobalActions();

  function applyTheme(currentTheme) {
    document.body.classList.remove(ThemeMode.Light, ThemeMode.Dark);
    document.body.classList.add(currentTheme);
  }

  useEffect(() => {
    const themeMode = getItem(GlobalStoreEnum.GlobalStateName)?.themeMode;
    applyTheme(themeMode || globalState.themeMode);

    setGlobalState({
      ...globalState,
      themeMode: themeMode || getCurrentTheme(),
    });
  }, []);

  useUpdateEffect(() => {
    applyTheme(globalState.themeMode);

    setGlobalState({
      ...globalState,
      themeColor: ThemeColor[globalState.themeMode],
    });
  }, [globalState.themeMode]);

  return (
    <>
      <StyledGlobalTheme globalState={globalState} />
      {children}
    </>
  );
}
