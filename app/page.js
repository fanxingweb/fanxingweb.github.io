'use client'
import { useEffect } from 'react'
import IntersectionNode from '@/lib/intersectionNode'

export default function Home() {
  useEffect(() => {
    const sectionsDom = document.getElementsByTagName('section')
    const observer = new IntersectionNode()
    observer.create({
      nodes: sectionsDom,
      change: (entry) => {
        entry.classList.add('progressive-display')
      }
    })
    observer.init()
  }, [])

  return (
    <>
      <section className='display-opacity-0'>
        <h4 style={{ margin: '20% 0 1.5rem' }}>Hi, my name is</h4>
        <h1>Liu Taiqiang,</h1>
        <h1>This is my personal learning record website.</h1>
      </section>
      <section className='display-opacity-0'>
        <h4 style={{ margin: '20% 0 1.5rem' }}>Hi, my name is</h4>
        <h1>Liu Taiqiang,</h1>
        <h1>This is my personal learning record website.</h1>
      </section>
    </>
  )
}
