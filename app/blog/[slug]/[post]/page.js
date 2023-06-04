import { getAllNoteStaticPaths, getNoteContentStaticProps } from '@/lib/tool'

export default async function Page({ params }) {
  const { slug, post } = params
  const { data, content } = await getNoteContentStaticProps(slug, post)
  return (
    <>
      <h1 className='blog-title' style={{ borderBottom: 0 }}>{data.title}</h1>
      <div className='markdown-body py-2' dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export async function getStaticPaths() {
  return getAllNoteStaticPaths('slug', 'post')
}