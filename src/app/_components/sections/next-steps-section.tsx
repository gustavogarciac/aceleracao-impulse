import React from 'react'

import { Card, CardContent, CardIndex, CardTitle } from '@/components/card'
import { nextStepsCards } from '@/consts/cards'

export const NextStepsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 pt-10 px-6 pb-20">
      <h2 className="subtitle text-center font-bold text-2xl text-theme-blue-default">
        Qual o próximo passo?
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-2 lg:max-w-4xl mx-auto">
        {nextStepsCards.map((card, index) => (
          <Card key={card.title} variant={'secondary'}>
            <CardIndex index={index + 1} variant={'secondary'} />
            <CardTitle variant={'secondary'}>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
