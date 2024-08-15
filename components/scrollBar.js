"use client";
import React, { useRef, useEffect, useState } from "react";
import cls from "classnames";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css"; // 导入样式

export default function Scrollbar({ children }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const ps = new PerfectScrollbar(containerRef.current, {
      wheelSpeed: 1,
      wheelPropagation: true,
      minScrollbarLength: 20,
    });

    return () => {
      ps.destroy();
    };
  }, []);

  useEffect(() => {
    const psx = containerRef.current.querySelector(".ps__rail-x");
    const psy = containerRef.current.querySelector(".ps__rail-y");

    let timeoutId;
    const handleScroll = (e) => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const hasIsHovered = psy.classList.contains("isHovered");
        if (hasIsHovered) return;
        setIsScrolling(false);
      }, 1000);
    };
    const handleMouseenter = (e) => {
      e.target.classList.add("isHovered");
    };
    const handleMouseleave = (e) => {
      e.target.classList.remove("isHovered");
      const hasIsScrolling =
        containerRef.current.classList.contains("scrolling");
      if (hasIsScrolling) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    const hasPsActiveY =
      containerRef.current.classList.contains("ps--active-y");
    if (hasPsActiveY) containerRef.current.classList.remove("ps--active-y");

    psx.addEventListener("mouseenter", handleMouseenter);
    psx.addEventListener("mouseleave", handleMouseleave);
    psy.addEventListener("mouseenter", handleMouseenter);
    psy.addEventListener("mouseleave", handleMouseleave);
    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      psx.removeEventListener("mouseenter", handleMouseenter);
      psx.removeEventListener("mouseleave", handleMouseleave);
      psy.removeEventListener("mouseenter", handleMouseenter);
      psy.removeEventListener("mouseleave", handleMouseleave);
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cls("relative overflow-hidden h-screen", {
        scrolling: isScrolling,
      })}
    >
      {children}
    </div>
  );
}
