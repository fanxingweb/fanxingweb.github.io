'use client'
import cls from 'classnames'
import Link from 'next/link'
import NavLink from './navLink'
import { useEffect } from 'react'
import { useCurrentRoute } from '@/lib/hooks'
import { useProgressiveDisplay } from '@/lib/animation'
import { headerLinks } from '@/lib/data-config'
import styles from '@/styles/layout.module.css'

export default function Header() {
  const [currentRoute] = useCurrentRoute()
  const [isDisplay, display] = useProgressiveDisplay(styles.Header_nav) // 渐显动画

  useEffect(() => { display() }, [])

  return (
    <div className={`${styles.Header_wrapper} h-20 opacity-bg-filter`}>
      <div className={styles.Header_container}>
        <div className={styles.Header_logo}>
          <Link href='/'>
            <div className={styles.Logo_wrapper}>
              <span className="iconfont icon-tianxiezuo icon-logo" />
              <div className={styles.Logo_title}>
                {
                  'Fanxing'.split('').map((w, i) => (
                    <span key={i} style={{ transitionDelay: `${0.05 * (i + 1) + 0.05}s` }}>{w}</span>
                  ))
                }
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.Header_nav}>
          {
            headerLinks.map(({ title, link }, idx) => (
              <Link href={link} className={cls(styles['nav-link'], {
                theme_nav_selected: currentRoute.indexOf(link) !== -1,
                ['progressive-display']: isDisplay
              })} key={idx}>
                <NavLink>{title}</NavLink>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}