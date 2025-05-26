"use client";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import cls from "classnames";
import Link from "next/link";
import ClientThemeSwitcher from "@/components/client-theme-switcher";
// import ClientLanguageSwitcher from "@/components/client-lang-switcher";

import { headerLinks } from "@/enum/constant";
import TransitionHoverText from "@/components/transition-hover-text";
import { useGlobalActions } from "@/store/globalStore";

export default function ClientHeader() {
  const { t } = useTranslation();
  const currentRoute = usePathname();
  const { setSearchVisible } = useGlobalActions();

  return (
    <div
      id="fx-header"
      className="bg-theme-filter mx-auto fixed top-0 right-0 bottom-0 left-0 z-10 h-20 bg-theme-nav border-solid border-b-theme-w border-theme-c shadow-theme"
    >
      <div className="h-full px-[15%] flex gap-10 justify-between">
        <div className="fx-logo flex justify-center items-center text-2xl font-bold">
          <Link href="/" className="flex items-center">
            <span
              className="iconfont icon-tianxiezuo mr-2"
              style={{ fontSize: "1.5rem" }}
            />
            <TransitionHoverText
              text="Fanxing"
              initIdx={1}
              autoControl={false}
            />
          </Link>
        </div>
        <div className="header flex justify-between items-center gap-10">
          {headerLinks.map(({ title, link }, idx) => (
            <Link
              key={idx}
              href={link}
              className={cls(
                "text-foreground transition-all hover:text-theme",
                {
                  ["nav-actived"]: `${link}/` === currentRoute,
                }
              )}
            >
              {t(`sys.menu.${title}`)}
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-5 justify-end items-center w-[10vw]">
        <span
          className="iconfont icon-sousuo cursor-pointer hover:scale-125 transition-all"
          style={{ fontSize: "1.5rem" }}
          onClick={() => setSearchVisible(true)}
        />
        {/* <ClientLanguageSwitcher /> */}
        <ClientThemeSwitcher />
      </div>
    </div>
  );
}
