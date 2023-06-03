import { getNoteStaticPaths } from '@/lib/tool'

export default function Page({ params }) {
  return <h1>{params.slug}</h1>
}

export async function getStaticPaths() {
  return getNoteStaticPaths('slug')
}