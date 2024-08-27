import React from 'react'

import { HeroAdvantageList } from '../hero-advantages-list'
import { ProgramTitle } from '../program-title'

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 pt-32 lg:pt-28 px-6 pb-10">
      <ProgramTitle />

      <h2 className="subtitle font-bold text-center">
        Comece seu próximo trabalho!
      </h2>

      <p className="text-center text-body">
        Se posicione para conquistar uma carreira acima dos{' '}
        <span className="text-theme-blue-default font-semibold">R$ 10.000</span>{' '}
        por mês
      </p>

      <HeroAdvantageList />
    </section>
  )
}
