import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { menuLinks } from '@/lib/data-config'
import BlogList from '@/components/blogList'

export default function Blog({ notes }) {
  return (
    <div className='flex flex-col'>
      <h1 className='blog-h1'>Blog</h1>
      <BlogList notes={notes} />
    </div>
  );
}

export async function getStaticProps() {
  const notesTmp = {}
  menuLinks.forEach((c) => {
    const notesDirectory = path.join(process.cwd(), `notes/${c.title.toLocaleLowerCase()}`)
    const filenames = fs.readdirSync(notesDirectory)
    const notesData = filenames.map((filename) => {
      const filePath = path.join(notesDirectory, filename)
      const slug = filename.replace(/\.md$/, '')
      const content = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(content)
      return {
        slug,
        title: data.title,
        date: data.date.toISOString(),
        link: `${c.link}/${slug}`
      };
    })
    notesTmp[c.title] = notesData
  })

  const notes = Object.values(notesTmp).flat(Infinity).sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return {
    props: { notes },
  };
}
