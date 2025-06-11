"use client";
import cls from "classnames";
import { useRef } from "react";

import ClientBeautyVideo from "../client-beauty-video";

export default function ClientIphoneButton({ autoHidden = true }) {
  const iphoneRef = useRef();

  return (
    <div
      className={cls("operation-button flex justify-center relative", {
        ["auto-hidden-on-w1080"]: autoHidden,
        ["auto-hidden-on-h430"]: autoHidden,
      })}
    >
      <div ref={iphoneRef} className="iphone-content w-full absolute bottom-0">
        <ClientBeautyVideo autoHidden={autoHidden} />
      </div>
    </div>
  );
}
