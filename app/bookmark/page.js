import BaseContent from "@/layouts/base-content";
import BookmarkUl from "./components/bookmark-ul";
import BookmarkContent from "./components/bookmark-content";

export default function Bookmark() {
  return (
    <BaseContent>
      <div className="fx-bookmark flex min-h-full">
        <BookmarkUl />
        <BookmarkContent />
      </div>
    </BaseContent>
  );
}
