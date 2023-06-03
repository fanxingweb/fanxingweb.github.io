import fs from 'fs'
import path from 'path'

// note getStaticPaths
export async function getNoteStaticPaths(slug) {
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

export async function getAllNoteStaticPaths(slugs) {

}