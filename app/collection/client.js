"use client";

import { useEffect } from "react";
import IntersectionNode from "@/lib/intersectionNode";

export default function ClientComponent() {
  useEffect(() => {
    const cards = document.getElementsByClassName("collection-card");
    const observer = new IntersectionNode();
    observer.create({
      nodes: cards,
      change: (entry, idx) => {
        entry.classList.add("progressive-display");
        entry.style.animationDelay = idx * 0.1 + "s";
      },
    });
    observer.init();

    function moveHandle(event) {
      // 获取鼠标位置
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      // 遍历元素并输出距离鼠标的坐标
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const rect = card.getBoundingClientRect();
        const elementX = rect.left + window.pageXOffset;
        const elementY = rect.top + window.pageYOffset;

        const distanceX = mouseX - elementX;
        const distanceY = mouseY - elementY;

        // 将距离值设置到每一个卡片元素上面
        card.style.setProperty("--cardX", distanceX + "px");
        card.style.setProperty("--cardY", distanceY + "px");
      }
    }
    // 添加鼠标移动事件监听器
    document.addEventListener("mousemove", moveHandle);

    return () => {
      document.removeEventListener('mousemove', moveHandle);
    }
  }, []);

  return null;
}
