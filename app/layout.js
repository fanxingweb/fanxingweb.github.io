import localFont from "next/font/local";
// import { appWithTranslation } from "next-i18next";

import ClientI18nComponent from "@/layouts/client-i18n-component";
import ClientThemeComponent from "@/theme/components/client-theme-component";
import ClientScrollbar from "@/components/client-scrollbar";
import ClientScrollbarContainer from "@/layouts/client-scrollbar-container";
import ClientInitLoading from "@/layouts/client-init-animate";
import ClientHeader from "@/layouts/client-header";

import "./globals.css";
import Footer from "@/layouts/footer";
import Script from "next/script";
import ClientSearchModal from "@/components/client-search-modal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Fanxing's web",
  description: "Private way station",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 导入 iconfont symbol 类型 */}
        <Script src="/iconfont/iconfont.js" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <ClientI18nComponent>
          <ClientThemeComponent>
            <ClientInitLoading>
              <ClientScrollbarContainer>
                <ClientHeader />
                {children}
                {/* <Footer /> */}
              </ClientScrollbarContainer>
            </ClientInitLoading>
          </ClientThemeComponent>
        </ClientI18nComponent>

        {/* 搜索弹窗 */}
        <ClientSearchModal />
      </body>
    </html>
  );
}
