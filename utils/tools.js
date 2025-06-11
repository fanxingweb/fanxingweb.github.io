import { ThemeMode } from "@/enum";

export function getCurrentTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ThemeMode.Dark
    : ThemeMode.Light;
}

export function detectOS() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  
  if (/Mac|iPhone|iPod|iPad/i.test(platform)) {
    return 'mac';
  } else if (/Win/i.test(platform)) {
    return 'windows';
  } else if (/Linux/i.test(platform)) {
    return 'linux';
  } else if (/Mac/i.test(userAgent) && !/(iPhone|iPod|iPad)/i.test(userAgent)) {
    // 某些情况下，Mac 用户代理可能不包含平台信息
    return 'mac';
  }
  return 'unknown';
};
