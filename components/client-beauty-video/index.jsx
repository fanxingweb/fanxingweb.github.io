"use client";
import Card1 from "./components/card1";
import Iphone1 from "./components/iphone1";
import Iphone2 from "./components/iphone2";

import { DirectionEnum } from "@/enum";

/**
 * https://www.cunshao.com/api
 * 横屏：https://www.cunshao.com/666666/api/pc.php
 * 竖屏：https://www.cunshao.com/666666/api/web.php
 * 图片：https://www.cunshao.com/666666/api/pic.php
 */
function ClientBeautyVideo({
  direction = DirectionEnum.Vertical,
  autoHidden = true,
  cardStyle = "iphone2",
  ...videoProps
}) {
  const videoConfig =
    direction === DirectionEnum.Vertical
      ? {
          src: "https://www.cunshao.com/666666/api/web.php",
          aspect: "aspect-video-vertical",
        }
      : {
          src: "https://www.cunshao.com/666666/api/pc.php",
          aspect: "aspect-video",
        };

  // 换一位
  const change = () => {
    const video = document.getElementById("beauty-video");
    video.src = videoConfig.src;
    video.autoplay = true;
  };

  if (cardStyle === "card1") {
    return (
      <Card1
        autoHidden={autoHidden}
        videoConfig={videoConfig}
        onClick={change}
        {...videoProps}
      />
    );
  }

  if (cardStyle === "iphone1") {
    return (
      <Iphone1
        autoHidden={autoHidden}
        videoConfig={videoConfig}
        onClick={change}
        {...videoProps}
      />
    );
  }

  return (
    <Iphone2
      videoConfig={videoConfig}
      autoHidden={autoHidden}
      onClick={change}
      {...videoProps}
    />
  );
}
export default ClientBeautyVideo;
