'use client'

import { ChevronUpIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const UpPageButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const scrollHeight = document.documentElement.scrollHeight
      setIsVisible(scrollPosition / scrollHeight > 0.6)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <button
      className="fixed bottom-2 right-2 border bg-zinc-50 border-theme-blue-dark p-2 rounded-full z-50"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ChevronUpIcon className="size-5" />
    </button>
  )
}
