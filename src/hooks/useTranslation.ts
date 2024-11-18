import { useLanguage } from '@/app/context/LanguageContext'
import {language} from "@/app/language";

/*导航栏内容翻译*/
export function useNavigationTranslation() {
  const { locale } = useLanguage()
  return {
    home: language[locale].navbar.home,
    daily: language[locale].navbar.daily,
  }
}

/*首页内容翻译*/
export function useHomeTranslation() {
  const { locale } = useLanguage()
  return {
  }
}