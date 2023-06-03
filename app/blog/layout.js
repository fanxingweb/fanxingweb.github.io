import BlogMenu from '@/components/blogMenu'

export default function BlogLayout({ children }) {
  return (
    <div className="blog-layout" style={{ width: '100%' }}>
      <BlogMenu />
      {children}
    </div>
  )
}