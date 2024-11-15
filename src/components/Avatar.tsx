'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Avatar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = () => {
      if (isHome) {
        const contentElement = document.getElementById('content-start')
        if (contentElement) {
          const rect = contentElement.getBoundingClientRect()
          const scrollY = window.scrollY
          setContentOffset({
            x: rect.left,
            y: rect.top + scrollY - 120
          })
        }
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [isHome])

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        x: isHome ? contentOffset.x : 40,
        y: isHome ? contentOffset.y : 20,
        scale: isHome ? 1 : 0.4
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }}
      className={`${isHome ? 'absolute' : 'fixed left-16 top-[-8px]'} top-0 left-0`}
    >
      <Image
        src="/img/avatar.jpg"
        height={100}
        width={100}
        alt="avatar"
        className="rounded-full"
      />
    </motion.div>
  )
}