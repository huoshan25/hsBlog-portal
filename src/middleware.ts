import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { language, Locale } from '@/app/language'

const locales = Object.keys(language) as Locale[]
const defaultLocale: Locale = 'zh'

function getLocaleFromBrowser(request: NextRequest): Locale {
  // 获取浏览器的 Accept-Language 头
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  // 解析 Accept-Language，获取首选语言
  const browserLocale = acceptLanguage.split(',')[0].split('-')[0]

  // 如果浏览器首选语言在支持的语言列表中
  return locales.includes(browserLocale as Locale)
    ? browserLocale as Locale
    : defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 静态资源、API 请求直接跳过
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // 检查路径是否已有语言前缀
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // 优先使用 cookie 中的语言设置
  const cookieLocale = request.cookies.get('locale')?.value

  // 确定使用的语言：cookie > 浏览器语言 > 默认语言
  const locale = cookieLocale && locales.includes(cookieLocale as Locale)
    ? cookieLocale
    : getLocaleFromBrowser(request)

  // 构建新的 URL
  const newPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  return NextResponse.redirect(new URL(newPath, request.url))
}

export const config = {
  matcher: [
    // 匹配所有路径，除了静态资源和API路由
    '/((?!api|_next/static|_next/image|favicon.ico|img|svg|gif).*)'
  ]
}