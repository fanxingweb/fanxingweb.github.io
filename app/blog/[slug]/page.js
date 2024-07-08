import BlogList from '@/components/blogList'
import { getNoteListStaticPaths, getNotesListStaticProps } from '@/lib/tool'

export default function Page({ params }) {
  const notes = getNotesListStaticProps(params.slug)
  return <BlogList notes={notes} />
}

export async function getStaticPaths() {
  return getNoteListStaticPaths('slug')
}
