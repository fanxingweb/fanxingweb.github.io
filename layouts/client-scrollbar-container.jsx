"use client";
import ClientScrollbar from "@/components/client-scrollbar";
import { useGlobalActions } from "@/store/globalStore";
import { useEffect, useRef } from "react";

export default function ClientScrollbarContainer({ children }) {
  const { setScrollRef } = useGlobalActions();

  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    setScrollRef(ref);
    ref.current.style.scrollBehavior = "smooth"; // 添加滚动过渡效果
  }, []);

  return <ClientScrollbar ref={ref}>{children}</ClientScrollbar>;
}
