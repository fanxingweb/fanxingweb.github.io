import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import { highlightAuto } from 'highlight.js';
import { menuLinks } from '@/lib/data-config'
// import 'highlight.js/styles/github.css';
import 'highlight.js/styles/atom-one-dark.css';

// note getStaticPaths
export async function getNoteListStaticPaths(slug, url) {
  const notesDirectory = path.join(process.cwd(), `notes${url ? ('/' + url) : ''}`)
  const fileNames = fs.readdirSync(notesDirectory)
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        [slug]: fileName.replace(/\.md$/, '')
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

// all note getStaticPaths
export async function getAllNoteStaticPaths(slug, post) {
  let paths = []
  const notesDirectory = path.join(process.cwd(), 'notes')
  const fileNames = fs.readdirSync(notesDirectory)
  fileNames.forEach(f => {
    const childrenNotesDirectory = path.join(process.cwd(), `notes/${f}`)
    const childrenFileNames = fs.readdirSync(childrenNotesDirectory)
    paths.push(...childrenFileNames.map((fileName) => {
      return {
        params: {
          [slug]: f.replace(/\.md$/, ''),
          [post]: fileName.replace(/\.md$/, '')
        }
      }
    }))
  })

  return {
    paths,
    fallback: false,
  }
}

// get notesList
export function getNotesListStaticProps(fieldName) {
  const notesDirectory = path.join(process.cwd(), `notes/${fieldName}`)
  const filenames = fs.readdirSync(notesDirectory)
  const notes = filenames.map((filename) => {
    const filePath = path.join(notesDirectory, filename)
    const slug = filename.replace(/\.md$/, '')
    const content = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(content)
    return {
      slug,
      title: data.title,
      date: data.date.toISOString(),
      link: `/blog/${fieldName}/${slug}`
    };
  })

  return Object.values(notes).flat(Infinity).sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
}

// get all notesList
export function getAllNotesListStaticProps() {
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

  return Object.values(notesTmp).flat(Infinity).sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
}

export async function getNoteContentStaticProps(slug, post) {
  const notesDirectory = path.join(process.cwd(), `notes/${slug}`)
  const filePath = path.join(notesDirectory, `${post}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // 解析 Markdown 文件中的元数据和正文内容
  const { data, content } = matter(fileContents)

  // 使用 unified 创建一个处理器
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight, { highlight: highlightAuto })
    .use(rehypeStringify);

  const contentHtml = processor.processSync(content).toString();

  // 将 date 字段转换为 ISO 8601 格式的字符串
  const isoDate = new Date(data.date).toISOString()

  return {
    content: contentHtml,
    data: {
      ...data,
      date: isoDate,
    },
  }
}