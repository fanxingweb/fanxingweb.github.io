import "./globals.css";
import Header from "@/components/header";
import Content from "@/components/content";
import Footer from "@/components/footer";
import LoadAnimation from "@/components/loadAnimation";
import GlobalProvider from "@/components/globalContext";
import Scrollbar from "@/components/scrollBar";

export const metadata = {
  title: "Fanxing's Web",
  description: "凡星（fanxing）的个人小站，记录学习。",
  keyword: "react,next.js,javascript,js,css,web,blog",
  author: "fanxing",
  robots: "index,follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <LoadAnimation>
            <Scrollbar>
              <Header />
              <Content>{children}</Content>
              <Footer>
                <p>Welcome Fanxing&apos;s Web</p>
                <p>这是我用来记录学习的个人网站</p>
              </Footer>
            </Scrollbar>
          </LoadAnimation>
        </GlobalProvider>
      </body>
    </html>
  );
}
