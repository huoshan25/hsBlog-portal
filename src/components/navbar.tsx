'use client'

import { usePathname, useRouter } from 'next/navigation'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { useTheme } from '@/hooks/useTheme'
import { useAvatarStore } from '@/store/avatar'
import Avatar from '@/components/Avatar'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { isDark, toggleTheme } = useTheme()
  const { isHome, setIsHome } = useAvatarStore()
  const handleNavigation = async (path: string) => {
    if (pathname === path) return

    if (document.startViewTransition) {
      const transition = document.startViewTransition(async () => {
        setIsHome(path === '/')
        router.push(path)
      })
    } else {
      setIsHome(path === '/')
      router.push(path)
    }
  }

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
                  onClick={() => handleNavigation('/')}
                  className={`${
                    pathname === '/' ? 'text-primary' : 'text-text hover:text-gray-400'
                  } text-[22px]`}
                >
                  首页
                </button>
                <button
                  onClick={() => handleNavigation('/daily')}
                  className={`${
                    pathname === '/daily' ? 'text-primary' : 'text-text hover:text-gray-400'
                  } text-[22px]`}
                >
                  日常
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="rounded-lg p-2.5 text-text hover:bg-hover focus:outline-none ml-[15px]"
              >
                {isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
