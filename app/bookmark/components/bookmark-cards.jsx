import BookmarkCard from "./bookmark-card";

export default function BookmarkCards({ cards }) {
  return (
    <div className="bookmark-cards grid grid-cols-4 gap-5">
      {cards.map((item, i) => (
        <BookmarkCard data={item} key={i} />
      ))}
    </div>
  );
}
