import BlogList from '@/components/blogList'
import { getNotesListStaticProps } from '@/lib/tool'

export default function Page({ params }) {
  const notes = getNotesListStaticProps(params.slug)
  return <BlogList notes={notes} />
}
