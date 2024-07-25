import { collectionConfig } from "@/lib/data-config";
import Image from "next/image";
import ClientComponent from "./client";

export default function Page() {
  return (
    <div className="grid gap-6 mt-3 grid-cols-n-media">
      {collectionConfig.map((card, index) => (
        <a
          className="collection-card w-56 h-24 overflow-hidden"
          key={`collection${index}`}
          href={card.link}
          target="_blank"
        >
          <div className="w-full h-full flex items-center gap-x-4 p-4 cursor-pointer">
            <div className="icon w-10">
              <Image
                src={card.icon}
                width={40}
                height={40}
                alt={card.desc}
                className="rounded-full max-w-10"
                style={{ maxWidth: "2.5rem" }}
              />
            </div>
            <div className="content h-full flex flex-col justify-center">
              <header>{card.title}</header>
              <p
                className="overflow-hidden overflow-ellipsis line-clamp-2 text-xs"
                style={{ color: "var(--blog-card-color)" }}
              >
                {card.desc}
              </p>
            </div>
          </div>

          {/* 添加蒙版,样式会出现边框特效 */}
          {/* <div className="mask"></div> */}
        </a>
      ))}

      <ClientComponent />
    </div>
  );
}
