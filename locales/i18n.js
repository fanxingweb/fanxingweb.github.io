// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import I18NextHttpBackend from "i18next-http-backend";

import { LocalEnum } from "@/enum";
import en from "./lang/en";
import zh from "./lang/zh";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)

  // *********** 从服务端引入翻译文件，出现报错，暂未解决，现使用本地引入翻译文件
  // load the translation file from the server
  // learn maro: https://github.com/i18next/i18next-http-backend
  // .use(I18NextHttpBackend)
  // ***********

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: LocalEnum.zh, // 默认语言：localstorage -> i18n: zh
    fallbackLng: LocalEnum.zh, // 如果无法检测到语言，使用zh
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    // backend: {
    //   loadPath: "/locales/lang/{{lng}}/translation.json", // resources path
    // },
  });

export default i18n;
