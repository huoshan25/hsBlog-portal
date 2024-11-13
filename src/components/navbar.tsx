// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="h-16">
      <nav className="fixed top-0 z-50 w-full bg-bg/75 backdrop-blur">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className={`text-sm ${
                  pathname === '/'
                    ? 'text-primary'
                    : 'text-text hover:text-hover'
                }`}
              >
                首页
              </Link>
              <Link
                href="/daily"
                className={`text-sm ${
                  pathname === '/daily'
                    ? 'text-primary'
                    : 'text-text hover:text-hover'
                }`}
              >
                日常
              </Link>
            </div>

            <button
              onClick={toggleTheme}
              className="rounded-lg p-2.5 text-text hover:bg-hover focus:outline-none"
            >
              {isDark ? <IoSunny size={20}/> : <IoMoon size={20}/>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}