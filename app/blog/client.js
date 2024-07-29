"use client";

import { useEffect } from "react";
import IntersectionNode from "@/lib/intersectionNode";

export default function ClientComponent() {
  useEffect(() => {
    const cards = document.getElementsByClassName("blog-card");
    const observer = new IntersectionNode();
    observer.create({
      nodes: cards,
      change: (entry, idx) => {
        entry.classList.add("progressive-display");
        entry.style.animationDelay = idx * 0.25 + "s";
      },
    });
    observer.init();
  }, []);

  return null;
}
