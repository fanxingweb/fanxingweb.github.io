'use client'
import { useEffect } from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'
import cls from 'classnames'

export default function Content({ children }) {
  const segments = useSelectedLayoutSegments()
  useEffect(() => {
    import('@/lib/bgParticle').then(({ default: BGParticle }) => {
      const particle = new BGParticle('__next_background')
      particle.init()
    })
  }, [])

  return (
    <>
      <main
        className={cls('flex flex-col items-center justify-between mt-20', {
          ['blog-wrapper']: segments.length
        })}
        style={{ minHeight: 'calc(100vh - 10rem)' }}
      >
        {children}
      </main>
      <div id='__next_background' style={segments.length ? { position: 'fixed', zIndex: -1 } : { display: 'none' }} />
    </>
  )
}