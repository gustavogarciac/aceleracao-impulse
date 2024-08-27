import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

const cardVariants = cva('px-5 py-12 rounded-2xl flex flex-col gap-5', {
  variants: {
    variant: {
      default: 'border border-zinc-50 text-center bg-theme-blue-dark',
      secondary: 'bg-zinc-100 text-start',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type CardProps = {
  children: React.ReactNode
}

type CardContainerProps = CardProps &
  VariantProps<typeof cardVariants> & {
    className?: string
  }

type CardTitleProps = CardProps & {
  variant?: VariantProps<typeof cardVariants>['variant']
}

type CardContentProps = CardProps & object

type CardIndexProps = {
  index: number
  variant?: VariantProps<typeof cardVariants>['variant']
}

const Card = ({ children, variant }: CardContainerProps) => {
  return <div className={cn(cardVariants({ variant }))}>{children}</div>
}

const CardIndex = ({ index, variant }: CardIndexProps) => {
  return (
    <span
      className={cn(
        'text-start font-bold text-3xl',
        variant === 'secondary' && 'text-theme-blue-default',
      )}
    >
      {index.toString().padStart(2, '0')}
    </span>
  )
}

const CardTitle = ({ children, variant }: CardTitleProps) => {
  return (
    <h5
      className={cn(
        'font-bold text-2xl',
        variant === 'secondary' && 'text-theme-blue-default',
      )}
    >
      {children}
    </h5>
  )
}

const CardContent = ({ children }: CardContentProps) => {
  return <div className="leading-relaxed font-medium">{children}</div>
}

export { Card, CardIndex, CardTitle, CardContent }
