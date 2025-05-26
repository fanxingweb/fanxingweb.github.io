"use client";
import { useTranslation } from "react-i18next";
import { useI18nextLng } from "@/store/globalStore";
import { useUpdateEffect } from "@/hooks";

// 引入i18n
import "../locales/i18n";

export default function ClientI18nComponent({ children }) {
  const i18nextLng = useI18nextLng();
  const { i18n } = useTranslation();

  useUpdateEffect(() => {
    i18n.changeLanguage(i18nextLng);
  }, [i18nextLng]);

  return children;
}
