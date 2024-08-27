import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center bg-theme-green-default hover:bg-theme-green-dark transition-colors duration-150 ease-in-out cursor-pointer text-sm md:text-base lg:text-lg font-semibold">
      {children}
    </button>
  )
}
