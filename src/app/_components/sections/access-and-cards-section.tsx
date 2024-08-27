import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/button'
import { Card, CardContent, CardTitle } from '@/components/card'
import { whosTheProgramForCards } from '@/consts/cards'

export const AccessAndCardsSection = () => {
  return (
    <section className="flex flex-col items-center bg-theme-blue-default justify-center pt-32 px-6 text-zinc-50 pb-20 relative">
      <div className="w-full min-h-40 absolute top-0 inset-x-0 z-10">
        <div className="w-full min-h-40 relative">
          <Image
            src="/assets/background-sm.png"
            quality={100}
            fill
            className="z-10 relative bg-bottom object-cover"
            alt="Imagem de fundo"
          />
          <div className="bg-theme-blue-default bg-opacity-35 min-h-40 w-full z-50 relative" />
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center justify-center relative z-20">
        <h2 className="subtitle text-center text-3xl">
          Veja ao que você terá acesso
        </h2>

        {/* Access and Benefits List */}
        <ul className="flex flex-col gap-8">
          <li className="space-y-1 text-center">
            <h4 className="font-black">Avaliação de Currículo:</h4>
            <p className="leading-relaxed">
              Feedback especializado para otimizar seu currículo e se destacar
              entre os candidatos.
            </p>
          </li>

          <li className="space-y-1 text-center">
            <h4 className="font-black">Direcionamento de Carreira:</h4>
            <p className="leading-relaxed">
              Tenha claro os próximos passos da carreira online e receba um
              plano de ação semanal, desenhado por um especialista.
            </p>
          </li>

          <li className="space-y-1 text-center">
            <h4 className="font-black">Simulação de Entrevista:</h4>
            <p className="leading-relaxed">
              Pratique suas habilidades em entrevistas com profissionais
              experientes, tirando toda a pressão na hora da entrevista.
            </p>
          </li>

          <li className="space-y-1 text-center">
            <h4 className="font-black">Diagnóstico de Desenvolvimento:</h4>
            <p className="leading-relaxed">
              Saiba como identificar áreas de melhoria e oportunidades de
              desenvolvimento com um diagnóstico personalizado da sua carreira.
            </p>
          </li>
        </ul>

        <h2 className="subtitle text-center text-3xl my-10">
          O Programa é para você que:
        </h2>

        {whosTheProgramForCards.map((card) => (
          <Card key={card.title}>
            <CardTitle>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
          </Card>
        ))}

        <Button>Quero começar agora</Button>
      </div>
    </section>
  )
}
