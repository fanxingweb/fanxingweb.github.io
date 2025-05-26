"use client";
import { useTranslation } from "react-i18next";
import cls from "classnames";

import ClientScrollbar from "@/components/client-scrollbar";

import { bookmarkGroup } from "@/enum/constant";
import { useBookmarkActions, useBookmarkState } from "@/store/bookmarkStore";

export default function BookmarkUl() {
  const { t } = useTranslation();
  const { currentBookmark } = useBookmarkState();
  const { setCurrentBookmark } = useBookmarkActions();

  const handleSwitch = (type) => {
    setCurrentBookmark(type);
  };

  return (
    <div className="bookmark-navs fixed top-0 left-0 bottom-0 w-sider">
      <ClientScrollbar>
        <div className="h-20"></div>
        <ul className="bookmark-ul flex flex-col gap-1 h-full px-8 py-4">
          {bookmarkGroup.map((item, idx) => (
            <li
              key={item.type}
              className={cls(
                "bookmark-li h-10 leading-10 duration-500 shadow-[0 2px 5px rgb(130 130 130 / 50%)]",
                {
                  ["bookmark-actived"]: currentBookmark === item.type,
                }
              )}
            >
              <a
                className="transition-all hover:text-theme"
                onClick={() => handleSwitch(item.type)}
                href={`#${item.type}`}
              >
                {t(`sys.bookmark.${item.title}`)}
              </a>
            </li>
          ))}
        </ul>
      </ClientScrollbar>
    </div>
  );
}
