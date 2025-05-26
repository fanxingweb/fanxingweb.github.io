import { create } from "zustand";

import { removeItem, setItem } from "@/utils/localStorage";
import { GlobalStoreEnum, LocalEnum, ThemeColor, ThemeMode } from "@/enum";

const useGlobalStore = create((set) => ({
  globalState: {
    themeMode: ThemeMode.Dark,
    themeColor: ThemeColor[ThemeMode.Dark],
  },
  i18nextLng: LocalEnum.zh,
  scrollRef: null,
  searchVisible: false,
  actions: {
    setGlobalState: (state) => {
      set((prev) => ({
        ...prev,
        globalState: { ...prev.globalState, ...state },
      }));
      setItem(GlobalStoreEnum.GlobalStateName, state);
    },
    setI18nextLng: (i18n) => {
      set((prev) => ({
        ...prev,
        i18nextLng: i18n,
      }));
      setItem(GlobalStoreEnum.I18n, i18n);
    },
    setScrollRef: (scrollRef) => {
      set((prev) => ({
        ...prev,
        scrollRef,
      }));
    },
    setSearchVisible: (visible) => {
      set((prev) => ({
        ...prev,
        searchVisible: visible,
      }));
    },
    clearGlobalState: () => {
      removeItem(GlobalStoreEnum.GlobalStateName);
    },
  },
}));

export const useGlobalState = () =>
  useGlobalStore((state) => state.globalState);
export const useI18nextLng = () => useGlobalStore((state) => state.i18nextLng);
export const useScrollRef = () => useGlobalStore((state) => state.scrollRef);
export const useSearchVisible = () =>
  useGlobalStore((state) => state.searchVisible);

export const useGlobalActions = () => useGlobalStore((state) => state.actions);
