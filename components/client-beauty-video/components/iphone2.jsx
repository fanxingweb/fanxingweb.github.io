import cls from "classnames";
import styled from "styled-components";
import { useState, useRef, useEffect, useMemo } from "react";

import { detectOS } from "@/utils/tools";
import Iconfont from "@/components/iconfont";

/**
 * https://uiverse.io/Rodrypaladin/plastic-otter-67
 */
export default function Iphone2({
  autoHidden,
  videoConfig,
  onClick = () => {},
  ...videoProps
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isVisible, setIsVisible] = useState(true); // 控制手机显示/隐藏
  const [showIcon, setShowIcon] = useState(false); // 控制图标显示/隐藏

  const sliderRef = useRef(null);
  const textRef = useRef(null);
  const touchStartXRef = useRef(0);
  const containerWidthRef = useRef(0);
  const videoRef = useRef(null);
  const phoneContainerRef = useRef(null); // 新增引用手机容器

  const currentOs = useMemo(() => {
    return detectOS();
  }, []);

  // 更新时间和日期
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })
      );
      setDate(
        now.toLocaleDateString("zh-CN", {
          month: "long",
          day: "numeric",
          weekday: "long",
        })
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // 监听手机隐藏动画结束，显示图标
  useEffect(() => {
    if (!isVisible) {
      // 当手机隐藏时，等待动画结束后显示图标
      const animationEndTimeout = setTimeout(() => {
        setShowIcon(true);
      }, 500); // 500ms是动画持续时间
      return () => clearTimeout(animationEndTimeout);
    } else {
      // 当手机显示时，立即隐藏图标
      setShowIcon(false);
    }
  }, [isVisible]);

  // 快捷键锁屏功能 (Ctrl+L / Commond+L)
  useEffect(() => {
    if (isLocked) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }

    const handleKeyDown = (e) => {
      // 检查是否按下了 Ctrl+L / Command+L 组合键
      const isCtrlL = (e.ctrlKey || e.metaKey) && e.key === "l";
      // 当手机显示时才会生效
      if (isVisible && isCtrlL) {
        e.preventDefault(); // 防止触发浏览器默认行为
        setIsLocked(!isLocked);
      }

      // 检查是否按下了 Ctrl+H / Command+H 组合键
      const isCtrlH = (e.ctrlKey || e.metaKey) && e.key === "h";
      if (isCtrlH) {
        e.preventDefault(); // 防止触发浏览器默认行为
        setIsVisible(!isVisible);
        setIsLocked(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocked, isVisible]);

  // 处理滑动解锁
  const handleTouchStart = (e) => {
    if (!isLocked) return;
    e.preventDefault(); // 阻止默认行为

    touchStartXRef.current = e.touches[0].clientX;
    if (sliderRef.current && sliderRef.current.parentElement) {
      containerWidthRef.current = sliderRef.current.parentElement.offsetWidth;
    }

    // 重置滑块样式
    if (sliderRef.current) {
      sliderRef.current.style.transition = "";
    }
  };

  const handleTouchMove = (e) => {
    if (!isLocked || !sliderRef.current) return;
    e.preventDefault(); // 阻止默认行为

    const touchX = e.touches[0].clientX;
    const deltaX = touchX - touchStartXRef.current;

    if (deltaX > 0) {
      const maxMove = containerWidthRef.current - sliderRef.current.offsetWidth;
      const newPosition = Math.min(deltaX, maxMove);
      sliderRef.current.style.transform = `translateX(${newPosition}px)`;

      // 更新文字遮挡效果
      if (textRef.current) {
        // 根据滑动距离设置文字的遮挡效果
        textRef.current.style.clipPath = `inset(0 0 0 ${
          newPosition + sliderRef.current.offsetWidth
        }px)`;
      }

      // 更新滑块背景颜色，根据滑动距离变化
      const progress = newPosition / maxMove;
      const bgOpacity = Math.min(0.5 + progress * 0.5, 1); // 从0.5到1的透明度
      sliderRef.current.style.backgroundColor = `rgba(255, 255, 255, ${bgOpacity})`;
    }
  };

  const handleTouchEnd = (e) => {
    if (!isLocked || !sliderRef.current) return;
    e.preventDefault(); // 阻止默认行为

    // 获取当前位置
    const style = window.getComputedStyle(sliderRef.current);
    const transform = style.getPropertyValue("transform");
    const matrix = new DOMMatrixReadOnly(transform);
    const currentX = matrix.m41;

    // 判断是否解锁
    const maxMove = containerWidthRef.current - sliderRef.current.offsetWidth;
    if (currentX > maxMove * 0.8) {
      setIsLocked(false);
    } else {
      // 回弹动画
      sliderRef.current.style.transition =
        "transform 0.3s ease-out, background-color 0.3s ease-out";
      sliderRef.current.style.transform = "translateX(0)";
      sliderRef.current.style.backgroundColor = "rgba(255, 255, 255, 1)";

      // 重置文字遮挡效果
      if (textRef.current) {
        textRef.current.style.transition = "clip-path 0.3s ease-out";
        textRef.current.style.clipPath = "inset(0 0 0 0)";

        setTimeout(() => {
          if (textRef.current) {
            textRef.current.style.transition = "";
          }
        }, 300);
      }

      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "";
        }
      }, 300);
    }
  };

  // 处理鼠标事件（用于桌面端测试）
  const handleMouseDown = (e) => {
    if (!isLocked) return;
    e.preventDefault();

    touchStartXRef.current = e.clientX;
    if (sliderRef.current && sliderRef.current.parentElement) {
      containerWidthRef.current = sliderRef.current.parentElement.offsetWidth;
    }

    // 添加鼠标移动和抬起事件监听
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // 重置滑块样式
    if (sliderRef.current) {
      sliderRef.current.style.transition = "";
    }
  };

  const handleMouseMove = (e) => {
    if (!isLocked || !sliderRef.current) return;
    e.preventDefault();

    const deltaX = e.clientX - touchStartXRef.current;

    if (deltaX > 0) {
      const maxMove =
        containerWidthRef.current - sliderRef.current.offsetWidth - 18;
      const newPosition = Math.min(deltaX, maxMove);
      sliderRef.current.style.transform = `translateX(${newPosition}px)`;

      // 更新文字遮挡效果
      if (textRef.current) {
        // 根据滑动距离设置文字的遮挡效果
        textRef.current.style.clipPath = `inset(0 0 0 ${
          newPosition + sliderRef.current.offsetWidth
        }px)`;
      }

      // 更新滑块背景颜色，根据滑动距离变化
      const progress = newPosition / maxMove;
      const bgOpacity = Math.min(0.5 + progress * 0.5, 1); // 从0.5到1的透明度
      sliderRef.current.style.backgroundColor = `rgba(255, 255, 255, ${bgOpacity})`;
    }
  };

  // 在回弹动画中重置文字遮挡效果
  const handleMouseUp = (e) => {
    if (!isLocked || !sliderRef.current) return;
    e.preventDefault();

    // 移除事件监听
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);

    // 获取当前位置
    const style = window.getComputedStyle(sliderRef.current);
    const transform = style.getPropertyValue("transform");
    const matrix = new DOMMatrixReadOnly(transform);
    const currentX = matrix.m41;

    // 判断是否解锁
    const maxMove = containerWidthRef.current - sliderRef.current.offsetWidth;
    if (currentX > maxMove * 0.8) {
      setIsLocked(false);
    } else {
      // 回弹动画
      sliderRef.current.style.transition =
        "transform 0.3s ease-out, background-color 0.3s ease-out";
      sliderRef.current.style.transform = "translateX(0)";
      sliderRef.current.style.backgroundColor = "rgba(255, 255, 255, 1)";

      // 重置文字遮挡效果
      if (textRef.current) {
        textRef.current.style.transition = "clip-path 0.3s ease-out";
        textRef.current.style.clipPath = "inset(0 0 0 0)";

        setTimeout(() => {
          if (textRef.current) {
            textRef.current.style.transition = "";
          }
        }, 300);
      }

      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "";
        }
      }, 300);
    }
  };

  // 处理图标点击事件
  const handleIconClick = () => {
    setIsVisible(true);
    setShowIcon(false);
  };

  return (
    <div
      className={cls("h-full p-6", {
        ["auto-hidden-on-w1080"]: autoHidden,
        ["auto-hidden-on-h430"]: autoHidden,
      })}
    >
      <StyledIphone2>
        <div
          ref={phoneContainerRef}
          className={`card relative bg-black w-full p-1 rounded-[1.75rem] ${
            isVisible ? "phone-visible" : "phone-hidden"
          }`}
          style={{ border: "2px solid rgb(40, 40, 40)" }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="btn1 top-[28%] h-10"></div>
          <div className="btn2 top-[18%] h-7"></div>
          <div className="btn3 top-[32%] h-7"></div>
          <div className="btn4"></div>
          <div className="card-int h-full rounded-3xl overflow-hidden">
            <div className="unlocked-screen w-full h-full flex flex-col">
              {isLocked && (
                <div className="lock-screen w-full h-full flex flex-col items-center justify-between py-8 bg-gradient-to-b from-gray-900 to-black">
                  <div className="lock-icon text-white text-2xl my-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>

                  <div className="clock text-center">
                    <div className="time text-white text-5xl font-bold">
                      {time}
                    </div>
                    <div className="date text-gray-300 mt-2">{date}</div>
                  </div>

                  <div className="slider-container w-4/5 h-10 bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-full flex items-center px-2 my-4 border border-gray-700">
                    <div
                      ref={sliderRef}
                      className="slider-thumb h-5 w-5 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-glow"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      onMouseDown={handleMouseDown}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>

                    <div
                      ref={textRef}
                      className="slider-text text-white text-sm ml-4 font-medium"
                    >
                      向右滑动解锁
                    </div>
                  </div>

                  <div className="shortcut-hint text-gray-400 text-xs">
                    请按下 {currentOs === "mac" ? "⌘+L" : "Ctrl+L"} 解锁屏幕
                  </div>
                </div>
              )}

              <div
                className={`${videoConfig.aspect} w-full rounded-xl overflow-hidden`}
                style={{ height: isLocked ? 0 : "100%" }}
              >
                <video
                  ref={videoRef}
                  id="beauty-video"
                  className="h-full w-full rounded-xl"
                  src={videoConfig.src}
                  controls
                  loop
                  {...videoProps}
                />
              </div>
            </div>
          </div>
          <div className="top h-4 rounded-lg top-2">
            <div className="camera top-1 bg-green-400 w-1 h-1 absolute"></div>
            <div className="speaker top-[-0.32rem]"></div>
          </div>

          {!isLocked && (
            <div
              className={`btn-home bg-black w-3 h-3 rounded-full absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-[-0.1rem] ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
              title="换一位"
              onClick={onClick}
            />
          )}
        </div>
      </StyledIphone2>
      {showIcon && (
        <div className="icon-container flex justify-center mt-4 icon-visible">
          <Iconfont
            type="#icon-phone"
            className="button-iphone cursor-pointer"
            style={{ fontSize: "4rem", color: "#333" }}
            onClick={handleIconClick}
          />
        </div>
      )}
    </div>
  );
}

const StyledIphone2 = styled.div`
  .card {
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.486);
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }

  .phone-visible {
    transform: translateY(0);
    opacity: 1;
  }

  .phone-hidden {
    transform: translateX(100%);
    opacity: 0;
  }

  /* 手机从底部出现的动画 */
  @keyframes slideFromBottom {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* 图标出现的动画 */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .icon-visible {
    animation: fadeIn 0.3s ease-in-out forwards;
  }

  .phone-visible {
    animation: slideFromBottom 0.5s ease-in-out;
  }

  .top {
    position: absolute;
    right: 50%;
    transform: translate(50%, 0%);
    width: 35%;
    background-color: black;
  }

  .speaker {
    position: absolute;
    right: 50%;
    transform: translate(50%, 0%);
    width: 40%;
    height: 2px;
    border-radius: 2px;
    background-color: rgba(20, 20, 20, 0.75);
  }

  .camera {
    position: absolute;
    border-radius: 50%;
    top: 50%;
    right: 15%;
    transform: translate(50%, -50%);
  }

  .btn-home {
    cursor: pointer;
    box-shadow: 0px 0px 3px #595959 inset;
    transition: opacity 0.1s; /* 减少过渡时间 */
  }

  .btn-home:hover {
    transform: translateX(-50%) translateY(-0.1rem) scale(1.3);
    transition: transform 0.3s; /* 只对hover状态应用较长的过渡 */
  }

  .btn1,
  .btn2,
  .btn3,
  .btn4 {
    position: absolute;
    width: 2px;
  }

  .btn1,
  .btn2,
  .btn3 {
    right: -4px;
    background-image: linear-gradient(
      to right,
      #111111,
      #222222,
      #333333,
      #464646,
      #595959
    );
  }

  .btn2,
  .btn3 {
    transform: scale(-1);
    left: -4px;
    transform: scale(-1);
  }

  .slider-container {
    position: relative;
    user-select: none;
    touch-action: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) inset;
    overflow: hidden; /* 确保文字不会溢出容器 */
  }

  .slider-thumb {
    position: relative;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    touch-action: none;
    transition: transform 0.1s ease-out, background-color 0.2s ease;
  }

  .shadow-glow {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 2px 8px rgba(0, 0, 0, 0.4);
  }

  .slider-thumb:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.7), 0 2px 8px rgba(0, 0, 0, 0.4);
  }

  .slider-text {
    position: absolute;
    width: 100%;
    left: 0;
    text-indent: 1rem;
    pointer-events: none;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    white-space: nowrap; /* 确保文字不换行 */
    clip-path: inset(0 0 0 0); /* 初始状态不裁剪 */
  }

  .shortcut-hint {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  .time,
  .date {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
