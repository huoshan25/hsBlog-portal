'use client'

import { usePathname, useRouter } from 'next/navigation'
import { IoMoon, IoSunny, IoLanguage } from 'react-icons/io5'
import { useTheme } from '@/hooks/useTheme'
import { useAvatarStore } from '@/store/avatar'
import Avatar from '@/components/Avatar'
import { useState } from 'react'
import { useLanguage } from '@/app/context/LanguageContext'
import {useLocale, useNavigationTranslation} from '@/hooks/useTranslation'
import { Locale } from '@/app/language'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { isDark, toggleTheme } = useTheme()
  const { isHome, setIsHome } = useAvatarStore()
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { locale, setLocale, t } = useLanguage()
  const { home, daily } = useNavigationTranslation()

  /*检查当前路径是否匹配目标路径*/
  const isPathMatch = (targetPath: string) => {
    return pathname === targetPath || pathname === `${targetPath}/`
  }

  const handleNavigation = async (path: string) => {
    if (isPathMatch(path)) return

    const targetPath = path
    const isTargetHome = isPathMatch(`/${languagePrefix}`)

    if (document.startViewTransition) {
      await document.startViewTransition(async () => {
        setIsHome(isTargetHome)
        await router.push(targetPath)
      }).finished
    } else {
      setIsHome(isTargetHome)
      await router.push(targetPath)
    }
  }

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale as Locale)
    setShowLangMenu(false)
  }
  const languagePrefix = useLocale()

  return (
    <header className="h-16">
      <nav className="w-full mt-5">
        <div className="mx-auto lg:px-[200px] lt-lg:px-[20px]">
          <div className="flex px-6 h-16 items-center justify-between">
            <div className="w-[40px] h-[40px]" />
            <Avatar />
            <div id="navbar" />
            <div className="flex items-center gap-[30px]">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => handleNavigation(`/${languagePrefix}`)}
                  className={`${
                    pathname === `/${languagePrefix}` ? 'text-primary' : 'text-text hover:text-gray-400'
                  } text-[22px]`}
                >
                  {home}
                </button>
                <button
                  onClick={() => handleNavigation(`/${languagePrefix}/daily`)}
                  className={`${
                    pathname === `/${languagePrefix}/daily` ? 'text-primary' : 'text-text hover:text-gray-400'
                  } text-[22px]`}
                >
                  {daily}
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="rounded-lg p-2.5 text-text hover:bg-hover focus:outline-none ml-[15px]"
              >
                {isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center text-text hover:bg-hover p-2.5"
                >
                  <IoLanguage size={20} />
                </button>

                {showLangMenu && (
                  <div className="absolute right-0 mt-2 py-2 w-24 rounded-md shadow-lg">
                    <button
                      className="text-text block w-full px-4 py-2 text-left hover:bg-hover bg-base"
                      onClick={() => {
                        handleLocaleChange('zh')
                      }}
                    >
                      简体中文
                    </button>
                    <button
                      className="text-text block w-full px-4 py-2 text-left hover:bg-hover bg-base"
                      onClick={() => {
                        handleLocaleChange('en')
                      }}
                    >
                      English
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
