'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { useTheme } from '@/hooks/useTheme'

export default function Navbar() {
  const pathname = usePathname()
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <header className="h-16">
        <nav className="w-full mt-5">
          <div className="mx-auto lg:px-[200px] lt-lg:px-[20px] -screen-xl">
            <div className="flex px-4 h-16 items-center justify-end gap-[30px]">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className={`${
                    pathname === '/' ? 'text-primary' : 'text-text hover:text-gray-400'
                  } text-[22px]`}
                >
                  首页
                </Link>
                <Link
                  href="/daily"
                  className={`${
                    pathname === '/daily' ? 'text-primary' : 'text-text hover:text-gray-400'
                  } text-[22px]`}
                >
                  日常
                </Link>
              </div>

              <button
                onClick={toggleTheme}
                className="rounded-lg p-2.5 text-text hover:bg-hover focus:outline-none ml-[15px]"
              >
                {isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <style jsx>
        {`
          .header {
            height: 6rem;
          }
        `}
      </style>
    </>
  )
}
