'use client'

import { createContext, useContext, useState } from 'react'
import { language, Locale } from '@/app/language'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
                                   children,
                                   defaultLocale
                                 }: {
  children: React.ReactNode
  defaultLocale: string
}) {
  const router = useRouter()
  const [locale, setLocale] = useState<Locale>(defaultLocale as Locale)

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    // 设置 cookie，有效期 365 天
    Cookies.set('locale', newLocale, { expires: 365, path: '/' })
    // 更新路由
    const currentPath = window.location.pathname
    const newPath = currentPath.replace(/^\/(zh|en)/, `/${newLocale}`)
    router.push(newPath)
  }

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = language[locale]
    for (const k of keys) {
      value = value[k]
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage必须在LanguageProvider中使用')
  }
  return context
}