import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import { LanguageProvider } from '@/app/context/LanguageContext'
import type { Metadata } from 'next'

type Props = {
  params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params

  return {
    title: lang === 'zh' ? '火山' : 'HuoShan',
    description:
      lang === 'zh'
        ? '你好，我是火山，一名前端开发工程师。 我喜欢用编程去实现一些有意思的事情， 为此，我会在技术上始终保持对前沿技术的追求，并始终在关注和探索新事物。'
        : "Hi, I'm HuoShan, a front-end development engineer. I like to use programming to achieve some interesting things. For this, I will always maintain the pursuit of cutting-edge technology and always pay attention to and explore new things.",
    keywords: 'HuoShan, 火山博客, react, next, nest, nuxt, vue, python',
    authors: [{ name: 'HuoShan' }],
    robots: 'index, follow',
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/img/avatar.jpg" />
        <link
          rel="stylesheet"
          href="https://chinese-fonts-cdn.deno.dev/packages/rzjryzzk/dist/nzgrRuYinZouZhangKai/result.css"
        />
      </head>
      <body>
        <LanguageProvider defaultLocale={lang}>
          <Navbar lang={lang}/>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
