import { getAllNotesListStaticProps } from '@/lib/tool'
import BlogList from '@/components/blogList'

export default function Page() {
  const notes = getAllNotesListStaticProps()
  return <BlogList notes={notes} />
}
