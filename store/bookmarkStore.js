import { BookmarkGroupEnum } from "@/enum";
import { create } from "zustand";

const useBookmarkStore = create((set) => ({
  bookmarkState: {
    currentBookmark: BookmarkGroupEnum.Common,
  },
  actions: {
    setCurrentBookmark: (state) => {
      set((prev) => ({
        ...prev,
        bookmarkState: {
          currentBookmark: state,
        },
      }));
    },
  },
}));

export const useBookmarkState = () =>
  useBookmarkStore((state) => state.bookmarkState);
export const useBookmarkActions = () =>
  useBookmarkStore((state) => state.actions);
