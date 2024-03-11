"use client";
import { useEffect, useState, useContext } from "react";
import cls from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./navLink";
import { useProgressiveDisplay } from "@/lib/animation";
import { headerLinks } from "@/lib/data-config";
import styles from "@/styles/layout.module.css";
import { GlobalContext } from "@/components/globalContext";

export default function Header() {
  const currentRoute = usePathname();
  const [isDisplay, display] = useProgressiveDisplay(styles.Header_nav); // 渐显动画
  const { globalState, updateGlobalState } = useContext(GlobalContext);

  const themeStateChange = (value) => {
    updateGlobalState({ theme: value });
  };

  useEffect(() => {
    display();
    addEventListenerToogleTheme();
  }, []);

  function toggleTheme() {
    const theme = localStorage.getItem("theme");

    switch (theme) {
      case "dark":
        themeStateChange("light");
        document.body.className = "light";
        localStorage.setItem("theme", "light");
        break;
      case "light":
        themeStateChange("dark");
        document.body.className = "dark";
        localStorage.setItem("theme", "dark");
        break;
      default:
        break;
    }
  }

  function addEventListenerToogleTheme() {
    document
      .getElementById("theme-toggle")
      ?.addEventListener("click", toggleTheme);
  }

  return (
    <div className={`${styles.Header_wrapper} h-20 opacity-bg-filter`}>
      <div className={styles.Header_container}>
        <div className={styles.Header_logo}>
          <Link href="/">
            <div className={styles.Logo_wrapper}>
              <span className="iconfont icon-tianxiezuo icon-logo" />
              <div className={styles.Logo_title}>
                {"Fanxing".split("").map((w, i) => (
                  <span
                    key={i}
                    style={{ transitionDelay: `${0.05 * (i + 1) + 0.05}s` }}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.Header_nav}>
          {headerLinks.map(({ title, link }, idx) => (
            <Link
              href={link}
              className={cls(styles["nav-link"], {
                theme_nav_selected: currentRoute.indexOf(link) !== -1,
                ["progressive-display"]: isDisplay,
              })}
              key={idx}
            >
              <NavLink>{title}</NavLink>
            </Link>
          ))}
          <div className={styles.Header_theme_button}>
            <span
              id="theme-toggle"
              className={cls("iconfont icon-theme-btn", {
                "icon-mingliangmoshi": globalState.theme === "dark",
                "icon-heianmoshi": globalState.theme === "light",
              })}
            />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
