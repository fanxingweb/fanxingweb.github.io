import dynamic from "next/dynamic";
import { getNoteContentStaticProps } from "@/lib/tool";

const ClientComponent = dynamic(() => import("./client"), {
  ssr: false,
});

export default async function Page({ params }) {
  const { slug, post } = params;
  const { data, content } = getNoteContentStaticProps(slug, post);

  return (
    <>
      <h1 className="blog-title" style={{ borderBottom: 0 }}>
        {data.title}
      </h1>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* 客户端代码 */}
      <ClientComponent data={data} />
    </>
  );
}
