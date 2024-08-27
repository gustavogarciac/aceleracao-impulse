import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/button'
import { Card, CardContent, CardTitle } from '@/components/card'
import { whosTheProgramForCards } from '@/consts/cards'

export const AccessAndCardsSection = () => {
  return (
    <section className="flex flex-col items-center bg-theme-blue-default justify-center pt-32 px-6 text-zinc-50 pb-20 relative md:pt-80 sm:pt-52 lg:pt-96">
      <div className="w-full min-h-40 sm:min-h-60 md:min-h-96 lg:min-h-[420px] xl:min-h-[470px] absolute top-0 inset-x-0 z-10">
        <div className="w-full min-h-40 sm:min-h-60 md:min-h-96 lg:min-h-[420px] xl:min-h-[470px] relative">
          <Image
            src="/assets/background-sm.png"
            quality={100}
            fill
            className="z-10 relative bg-bottom object-cover md:hidden"
            alt="Imagem de fundo"
          />
          <Image
            src="/assets/background.png"
            quality={100}
            fill
            className="z-10 relative bg-bottom object-cover hidden md:block "
            alt="Imagem de fundo"
          />
          <div className="bg-theme-blue-default bg-opacity-35 min-h-40 sm:min-h-60 md:min-h-96 lg:min-h-[420px] xl:min-h-[470px] w-full z-50 relative" />
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center justify-center relative z-20 lg:max-w-5xl mx-auto">
        <h2 className="subtitle text-center text-3xl lg:text-[2.75rem] lg:leading-[3rem]">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 relative">
          {whosTheProgramForCards.map((card) => (
            <Card key={card.title}>
              <CardTitle>{card.title}</CardTitle>
              <CardContent>{card.content}</CardContent>
            </Card>
          ))}

          <div className="-top-5 -right-5 bg-zinc-50 rounded-full size-16 p-3 hidden absolute md:block">
            <Image
              src="/assets/blue-rocket.svg"
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>

        <Button>Quero começar agora</Button>
      </div>
    </section>
  )
}
