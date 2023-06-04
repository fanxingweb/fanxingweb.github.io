import fs from 'fs'
import path from 'path'

// note list getStaticPaths
export async function getNoteListStaticPaths(slug) {
  const notesDirectory = path.join(process.cwd(), 'notes')
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

export async function getAllNoteStaticPaths(slug, post) {
  let paths = []

  // 获取所有note分类文件夹名
  const notesDirectory = path.join(process.cwd(), 'notes')
  const fileNames = fs.readdirSync(notesDirectory)
  fileNames.forEach(f => {
    const childrennotesDirectory = path.join(process.cwd(), `notes/${f}`)
    const childrenfileNames = fs.readdirSync(childrennotesDirectory)
    paths.push(...childrenfileNames.map((fileName) => {
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