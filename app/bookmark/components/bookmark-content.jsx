"use client";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useBookmarkActions } from "@/store/bookmarkStore";
import { useScrollRef } from "@/store/globalStore";
import IntersectionNode from "@/utils/intersection-node";

import BookmarkCards from "./bookmark-cards";

import { bookmarkGroup } from "@/enum/constant";
import { bookmarkConfig } from "@/enum/bookmarks";
import { BookmarkGroupEnum } from "@/enum";

export default function BookmarkContent() {
  const { t } = useTranslation();
  const { setCurrentBookmark } = useBookmarkActions();

  const scrollRef = useScrollRef();
  const contentRef = useRef();

  const getCurrentTypeBookmarks = (type) => {
    return bookmarkConfig.filter((item) => item.type.includes(type));
  };

  const scrollAnchor = () => {
    if (!contentRef?.current?.children) return;
    const sections = contentRef.current.children;

    let cid = "";
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      // const sectionHeight = section.clientHeight;
      // 112 --> header高度5rem(80px) gap间距2rem(32px)
      if (scrollRef.current.scrollTop >= sectionTop - 112) {
        cid = section.getAttribute("id");
      }
    }

    setCurrentBookmark(cid);
  };

  useEffect(() => {
    const cards = document.getElementsByClassName("bookmark-card-wrapper");
    const observer = new IntersectionNode();
    observer.create({
      nodes: cards,
      change: (entry, idx) => {
        entry.classList.add("progressive-display");
        entry.style.animationDelay = idx * 0.1 + "s";
      },
    });
    observer.init();
  }, []);

  useEffect(() => {
    if (!scrollRef) return;

    scrollRef.current.addEventListener("scroll", scrollAnchor);
    return () => {
      setCurrentBookmark(BookmarkGroupEnum.Common);
      scrollRef.current?.removeEventListener("scroll", scrollAnchor);
    };
  }, [scrollRef]);

  return (
    <div
      ref={contentRef}
      className="bookmark-content flex-1 py-4 flex flex-col gap-8"
    >
      {bookmarkGroup.map((item, idx) => (
        <div id={item.type} key={item.type} className="bookmark-content">
          <h1 className="bookmark-text-shadow text-2xl mb-8 font-normal">
            {t(`sys.bookmark.${item.title}`)}
          </h1>
          <BookmarkCards cards={getCurrentTypeBookmarks(item.type)} />
        </div>
      ))}
    </div>
  );
}
