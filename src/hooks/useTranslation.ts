'use client'

import { useParams } from 'next/navigation'
import { language, Locale } from "@/app/language"

export function useLocale() {
  const params = useParams()
  return params.lang as Locale
}

/*导航栏内容翻译*/
export function useNavigationTranslation() {
  const locale = useLocale()

  return {
    home: language[locale].navbar.home,
    daily: language[locale].navbar.daily,
  }
}

/*首页内容翻译*/
export function useHomePageTranslation() {
  const locale = useLocale()

  return {
    hello: language[locale].homePage.hello,
    introduce: language[locale].homePage.introduce,
    guideLanguage: language[locale].homePage.guideLanguage,
  }
}