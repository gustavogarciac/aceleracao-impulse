import React, { ButtonHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center bg-theme-green-default hover:bg-theme-green-dark transition-colors duration-150 ease-in-out cursor-pointer text-sm md:text-base lg:text-lg font-semibold rounded-full px-6 py-4 w-full text-zinc-50',
        className,
      )}
    >
      {children}
    </button>
  )
}
