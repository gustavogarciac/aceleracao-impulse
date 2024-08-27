import React from 'react'

type CardProps = {
  children: React.ReactNode
}

type CardTitleProps = CardProps & object

type CardContentProps = CardProps & object

const Card = ({ children }: CardProps) => {
  return (
    <div className="px-5 py-12 border rounded-2xl border-zinc-50 flex flex-col gap-2">
      {children}
    </div>
  )
}

const CardTitle = ({ children }: CardTitleProps) => {
  return <h5 className="font-bold text-2xl text-center">{children}</h5>
}

const CardContent = ({ children }: CardContentProps) => {
  return (
    <div className="leading-relaxed font-medium text-center">{children}</div>
  )
}

export { Card, CardTitle, CardContent }
