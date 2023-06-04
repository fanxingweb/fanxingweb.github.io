import { getAllNoteStaticPaths } from '@/lib/tool'

export default function Page({ params }) {
  return <h1>{params.post}</h1>
}

export async function getStaticPaths() {
  return getAllNoteStaticPaths('slug', 'post')
}