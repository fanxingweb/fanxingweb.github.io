import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LoadAnimation from '@/components/loadAnimation'

export const metadata = {
  title: "Fanxing's Web",
  description: "凡星（fanxing）的个人小站，记录学习。",
  keyword: "react,next.js,javascript,js,css,web,blog",
  author: "fanxing",
  robots: "index,follow"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadAnimation>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between mt-20" style={{ minHeight: 'calc(100vh - 10rem)' }}>
            {children}
          </main>
          <Footer>
            <p>Welcome Fanxing&apos;s Web</p>
            <p>这是我用来学习、记录、提升技能的个人网站</p>
          </Footer>
        </LoadAnimation>
      </body>
    </html>
  )
}