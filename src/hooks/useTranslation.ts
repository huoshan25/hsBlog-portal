import { language, Locale } from "@/app/language"

export const translations = {
  /*导航栏翻译*/
  getNavigation(locale: Locale) {
    return {
      home: language[locale].navbar.home,
      daily: language[locale].navbar.daily,
    }
  },

  /*首页翻译*/
  getHomePage(locale: Locale) {
    return {
      hello: language[locale].homePage.hello,
      introduce: language[locale].homePage.introduce,
      guideLanguage: language[locale].homePage.guideLanguage,
    }
  }
}