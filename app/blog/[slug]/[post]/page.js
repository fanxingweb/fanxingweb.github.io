import dynamic from 'next/dynamic'
import { getAllNoteStaticPaths, getNoteContentStaticProps } from '@/lib/tool'

const ServerToClientCode = dynamic(() => import('@/lib/serverToClientCode'), { ssr: false });

export default async function Page({ params }) {
  const { slug, post } = params
  const { data, content } = getNoteContentStaticProps(slug, post)

  return (
    <>
      <h1 className='blog-title' style={{ borderBottom: 0 }}>{data.title}</h1>
      <div className='markdown-body' dangerouslySetInnerHTML={{ __html: content }} />

      {/* 空组件，不引入dom，通过异步引入，实现在服务端组件写入客户端代码 */}
      <ServerToClientCode />
    </>
  )
}

export async function getStaticPaths() {
  return getAllNoteStaticPaths('slug', 'post')
}