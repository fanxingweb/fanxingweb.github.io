"use client";
import { useState, useEffect } from "react";
import NavLink from "@/components/navLink";
import cls from "classnames";

export default function ClientComponent({ data }) {
  const [activated, setActivated] = useState(false);

  function copyCodeToClipboard(element) {
    const code = element.nextElementSibling.textContent;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Text copied to clipboard");
        element.textContent = "Copied!";
        setTimeout(() => (element.textContent = "Copy"), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text to clipboard: ", err);
      });
  }

  function clickMoreBtn(element) {
    const moreBtnDom = element.target || element.srcElement;
    const isActivated = moreBtnDom.classList.contains("blog-more-activated");

    if (isActivated) {
      setActivated(false);
    } else {
      setActivated(true);
    }
  }

  // 添加复制功能函数
  useEffect(() => {
    const copyBtnDoms = document.querySelectorAll(".copy-button");
    copyBtnDoms.forEach((button) => {
      button.addEventListener("click", () => copyCodeToClipboard(button));
    });

    return () => {
      copyBtnDoms.forEach((button) => {
        button.removeEventListener("click", () => copyCodeToClipboard(button));
      });
    };
  }, []);

  // 添加更多操作
  useEffect(() => {
    const moreBtnDom = document.querySelector(".blog-more");
    moreBtnDom.addEventListener("click", clickMoreBtn);

    return () => {
      moreBtnDom.removeEventListener("click", clickMoreBtn);
    };
  }, []);

  return (
    <div className="blog-more-container">
      <span
        className={cls("blog-more iconfont icon-gengduo", {
          ["blog-more-activated"]: activated,
        })}
      ></span>
      <div
        className={cls("blog-anchor", {
          ["blog-anchor-show"]: activated,
        })}
      >
        {data?.nav?.map((anchor, idx) => (
          <a
            className="anchor progressive-display"
            href={`#${anchor.toLowerCase()}`}
            key={anchor}
          >
            <NavLink>{anchor}</NavLink>
          </a>
        ))}
      </div>
    </div>
  );
}
