import { ThemeMode } from "@/enum";

export function getCurrentTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ThemeMode.Dark
    : ThemeMode.Light;
}
