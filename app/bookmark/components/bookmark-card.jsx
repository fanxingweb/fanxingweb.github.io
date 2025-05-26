import Image from "next/image";
import styled from "styled-components";

export default function BookmarkCard({ data }) {
  return (
    <StyledBookmarkCard>
      <div className="bookmark-card-wrapper opacity-0 relative h-[144px]">
        <div
          className="bookmark-card cursor-pointer"
          onClick={() => {
            window.open(data.link, { target: "_blank" });
          }}
        >
          <div className="card-header">
            <Image
              src={data.icon}
              width={40}
              height={40}
              alt={data.desc}
              className="card-icon"
              style={{ maxWidth: "2.5rem" }}
              unoptimized
            />
            <a
              href={data.link}
              className="card-title"
              title={data.title}
              target="_blank"
            >
              {data.title}
            </a>
          </div>
          <p className="card-description" title={data.desc}>
            {data.desc}
            <br />
          </p>
        </div>
        <div className="bookmark-card-bg" />
      </div>
    </StyledBookmarkCard>
  );
}

const StyledBookmarkCard = styled.div`
  .bookmark-card {
    border-radius: 20px;
    padding: 24px;
    border: 2px solid var(--bookmark-card-border-color);
    transition: all 0.4s;
    height: 9rem;
    display: flex;
    flex-direction: column;
    background: var(--bookmark-card-bg);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .bookmark-card-bg {
    width: 100%;
    height: 100%;
    border-radius: 19px;
    background: rgba(130, 130, 130);
  }

  .bookmark-card:hover {
    transform: translateX(-5px) translateY(-5px);
  }

  .bookmark-card:hover + .bookmark-card-bg {
    filter: blur(1px);
  }

  .bookmark-card .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1.25rem;
  }

  .card-title {
    font-size: 17px;
    font-weight: 900;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.4s;
  }

  .card-icon {
    border-radius: 50%;
    transition: all 0.4s;
  }

  .bookmark-card:hover .card-icon {
    box-shadow: 2px 2px 0 1px rgba(130, 130, 130);
  }

  .bookmark-card:hover .card-title {
    color: var(--theme-color);
    border-color: var(--theme-color);
  }

  .btn:focus {
    background: transparent;
  }

  .card-description {
    font-size: 0.75rem;
    line-height: 1rem;
    height: 2rem;
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
