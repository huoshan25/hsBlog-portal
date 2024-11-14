import '@/styles/globals.css'
import Navbar from '@/components/navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title key="title">Create Next App1</title>
        <link
          rel="stylesheet"
          href="https://chinese-fonts-cdn.deno.dev/packages/rzjryzzk/dist/nzgrRuYinZouZhangKai/result.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
