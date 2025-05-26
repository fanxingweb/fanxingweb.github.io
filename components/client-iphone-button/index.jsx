"use client";
import cls from "classnames";

import { useRef } from "react";

import ClientBeautyVideo from "../client-beauty-video";
import Iconfont from "../iconfont";

export default function ClientIphoneButton({ autoHidden = true }) {
  const iphoneRef = useRef();

  const handleClick = () => {
    if (
      iphoneRef.current.style.display === "none" ||
      iphoneRef.current.style.display === ""
    ) {
      // 显示并应用出现动画
      iphoneRef.current.style.display = "block";
      iphoneRef.current.classList.remove("scale-out-ver-bottom");
      iphoneRef.current.classList.add("scale-in-ver-bottom");
    } else {
      // 应用消失动画，并在动画结束后隐藏
      iphoneRef.current.classList.remove("scale-in-ver-bottom");
      iphoneRef.current.classList.add("scale-out-ver-bottom");
      iphoneRef.current.addEventListener(
        "animationend",
        function handleAnimationEnd() {
          iphoneRef.current.style.display = "none";
          iphoneRef.current.removeEventListener(
            "animationend",
            handleAnimationEnd
          );
        },
        { once: true }
      );
    }
  };

  return (
    <div
      className={cls("operation-button flex justify-center relative", {
        ["auto-hidden-on-1080"]: autoHidden,
      })}
    >
      <Iconfont
        type="#icon-phone"
        className="button-iphone cursor-pointer"
        style={{ fontSize: "4rem" }}
        onClick={handleClick}
      />
      <div
        ref={iphoneRef}
        className="iphone-content w-full hidden absolute bottom-16"
      >
        <ClientBeautyVideo autoHidden={autoHidden} />
      </div>
    </div>
  );
}
