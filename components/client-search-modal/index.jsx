"use client";
import ClientSearch from "./client-search";

import { useGlobalActions, useSearchVisible } from "@/store/globalStore";

export default function ClientSearchModal() {
  const searchVisible = useSearchVisible();
  const { setSearchVisible } = useGlobalActions();

  const close = (e) => {
    // 点击蒙版时触发
    if (e.target.classList.contains("search-mask")) {
      setSearchVisible(false);
    } else {
      e.stopPropagation();
    }
  };

  /**
   * 判断回车时，使用 keyCode === 13 判断
   * 如何使用 code 或 key === "Enter" 判断时，中文输入法输入拼音时，按下回车选择文字也会触发，此时的 keyCode = 229
   */
  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      const word = e.target.value;
      const Baidu_Search_url =
        "https://www.baidu.com/s?tn=22073068_8_oem_dg&ch=2&ie=utf-8&word=";

      window.open(Baidu_Search_url + word, "_blank");
      setSearchVisible(false);
    }
  };

  if (!searchVisible) {
    return null;
  }

  return (
    <div
      className="search-mask fixed z-20 top-0 left-0 right-0 bottom-0"
      style={{ backgroundColor: "rgba(0 0 0 / 65%)" }}
      onClick={close}
    >
      <div
        className="search-container absolute top-[10%] left-[20%] right-[20%] min-h-[25%] max-h-[75%] px-6 py-10 rounded-xl backdrop-blur bg-[var(--search-modal-background)]"
        style={{ boxShadow: "0 0 8px var(--search-modal-shadow-color) inset" }}
      >
        <ClientSearch
          placeholder="按回车搜索"
          outStyle={{ marginBottom: "1rem" }}
          onKeyDown={handleSearch}
        />
        <div className="search-divider">百度 - 快捷搜索</div>
        <div className="search-content min-h-8"></div>
      </div>
    </div>
  );
}
