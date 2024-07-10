import Link from "next/link";
import NavLink from "@/components/navLink";

export default function BlogList({ notes }) {
  return (
    <div className="flex flex-col w-full py-2 blog-list">
      <div className="flex-1">
        <ul>
          {notes.map((note, idx) => (
            <li className="mb-6" key={idx}>
              <Link
                href={note.link}
                className="blog-card display-opacity-0 progressive-display flex flex-col"
                style={{ animationDelay: idx * 0.25 + "s" }}
              >
                <header className="w-full flex justify-between leading-6 mb-3 font-sans">
                  <NavLink style={{ maxWidth: "72%" }}>{note.title}</NavLink>
                  <p className="blog-link-date font-serif">
                    {new Date(note.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </header>
                {note.desc && (
                  <description className="w-11/12 ps-4 pe-4 text-xs font-serif">
                    {note.desc}
                  </description>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
