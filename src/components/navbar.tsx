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
      <header className="h-24">
        <nav className="fixed top-0 z-50 w-full mt-5">
          <div className="mx-auto max-w-3xl -screen-xl">
            <div className="flex px-4 h-16 items-center justify-between">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className={`${
                    pathname === '/' ? 'text-primary' : 'text-text hover:text-gray-400'
                  }`}
                >
                  首页
                </Link>
                <Link
                  href="/daily"
                  className={`${
                    pathname === '/daily' ? 'text-primary' : 'text-text hover:text-gray-400'
                  }`}
                >
                  日常
                </Link>
              </div>

              <button
                onClick={toggleTheme}
                className="rounded-lg p-2.5 text-text hover:bg-hover focus:outline-none"
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
