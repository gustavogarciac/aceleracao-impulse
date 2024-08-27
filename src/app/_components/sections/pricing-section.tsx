import React from 'react'

import { Button } from '@/components/button'

export const PricingSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 pt-6 px-6 pb-10">
      <h2 className="subtitle text-theme-blue-default text-2xl text-center font-bold">
        Escolha seu Plano
      </h2>

      <div className="flex flex-col gap-12 items-center md:flex-row md:items-start md:gap-6 max-w-4xl mx-auto">
        <div className="space-y-4 w-full">
          <div className="flex flex-col gap-9 bg-zinc-950 text-zinc-50 w-full rounded-lg px-6 py-10 items-center min-h-[500px] justify-start">
            <h5 className="text-yellow-500 font-bold text-xl leading-relaxed">
              Aulas em grupo
            </h5>
            <span className="text-lg">01 hora por semana</span>
            <span className="text-lg">R$100 por mês</span>

            <ul className="list-disc list-inside space-y-4">
              <li>Pratique com um tutor e mais 1 ou 2 alunos</li>
              <li>Discussões estruturadas para todos os níveis</li>
              <li>Para adultos maiores de 18 anos</li>
            </ul>
          </div>

          <Button>Quero começar agora</Button>
        </div>

        <div className="space-y-4 w-full">
          <div className="flex flex-col gap-9 bg-[#FEB500] text-zinc-50 w-full rounded-lg px-6 py-10 items-center min-h-[500px] justify-start">
            <h5 className="text-zinc-50 font-bold text-xl leading-relaxed">
              Aulas em grupo
            </h5>
            <span className="text-lg">01 hora por semana</span>
            <span className="text-lg">R$60 por mês - no plano anual</span>

            <ul className="list-disc list-inside space-y-4">
              <li>Experiência completa</li>{' '}
              <li>Faça aulas 100% particulares ou experimente grupos também</li>
              <li>Assista novamente aos vídeos de suas aulas</li>{' '}
              <li>Receba exercícios personalizados entre as aulas</li>
            </ul>
          </div>

          <Button>Quero começar agora</Button>
        </div>
      </div>
    </section>
  )
}
