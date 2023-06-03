'use client'
import Link from 'next/link';
import styles from '@/styles/layout.module.css'
import { menuLinks } from '@/lib/data-config'
import cls from 'classnames'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

export default function BlogMenu() {
  const currentRoute = usePathname()
  const router = useRouter()

  return (
    <div className={styles.blog_menu_wrapper}>
      <span onClick={() => router.push('/blog')} className='iconfont icon-shujia icon-menu' />
      <ul
        className={`${styles['menu-ul']} ${styles['menu-expand-show-animate']}`}
      >
        {menuLinks.map(({ title, link }) => (
          <li key={title} className={cls('', {
            [styles['blog_menu-selected']]: currentRoute.indexOf(link) !== -1
          })}>
            <Link href={link}>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
