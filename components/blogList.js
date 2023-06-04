import Link from 'next/link';

export default function BlogList({ notes }) {
  return (
    <div className='flex flex-col w-full py-2 blog-list'>
      <div className='flex-1'>
        <ul>
          {
            notes.map((note, idx) => (
              <li key={idx}>
                <div className='flex h-6 leading-6 justify-between mx-3 my-2'>
                  <Link href={note.link} className='blog-h2'>{note.title}</Link>
                  <p className='blog-link-date'>{new Date(note.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}