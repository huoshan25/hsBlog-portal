'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Avatar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className={`
      fixed transition-all duration-300 ease-in-out
      ${isHome
      ? 'lg:left-[200px] lt-lg:left-[40px] top-[100px] scale-100'
      : 'left-[40px] top-[20px] scale-[0.4]'
    }
    `}>
      <Image
        src="/img/avatar.jpg"
        height={100}
        width={100}
        alt="avatar"
        className="rounded-circle"
        style={{ viewTransitionName: 'avatar' }}
      />
    </div>
  )
}