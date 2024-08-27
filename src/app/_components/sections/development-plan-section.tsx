import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/button'

export const DevelopmentPlanSection = () => {
  return (
    <section className="flex flex-col items-center bg-theme-blue-default justify-center pt-32 px-6 text-zinc-50 pb-20 relative md:pt-80 sm:pt-52 lg:pt-96">
      <div className="w-full min-h-40 sm:min-h-60 md:min-h-96 lg:min-h-[420px] xl:min-h-[470px] absolute top-0 inset-x-0 z-10">
        <div className="w-full min-h-40 sm:min-h-60 md:min-h-96 lg:min-h-[420px] xl:min-h-[470px] relative">
          <Image
            src="/assets/background-2.png"
            quality={100}
            fill
            className="z-10 relative bg-bottom object-cover"
            alt="Imagem de fundo"
          />
          <div className="bg-theme-blue-default bg-opacity-35 min-h-40 sm:min-h-60 md:min-h-96 lg:min-h-[420px] xl:min-h-[470px] w-full z-50 relative" />
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center justify-center relative z-20 lg:max-w-5xl mx-auto">
        <h2 className="subtitle text-center text-3xl lg:text-[2.75rem] lg:leading-[3rem]">
          Plano de Desenvolvimento
        </h2>

        <p className="text-center">
          O Programa foi criado após o Grupo Impulse identificar a necessidade
          de seus alunos em terem um direcionamento personalizado em suas
          carreiras…
        </p>
        <p className="text-center">
          Com o foco exclusivo em{' '}
          <strong>
            acelerar seu objetivo, seja a transição de carreira ou novo
            trabalho.
          </strong>
        </p>

        <Image
          src="/assets/white-rocket.svg"
          width={50}
          height={50}
          alt="Foguete Branco"
        />

        <div className="space-y-4">
          <span>Ajudando cada aluno de forma específica, como:</span>

          <ul className="list-disc list-inside space-y-1">
            <li>Falta de direção na carreira;</li>
            <li>Se destacar da concorrência de mercado;</li>
            <li>Medo de entrevistas de contratação;</li>
            <li>Estagnação no mercado de trabalho;</li>
            <li>Falta de recursos educacionais;</li>
            <li>Falta de tempo para se preparar.</li>
          </ul>
        </div>

        <p className="text-center leading-relaxed">
          Mapeando essas necessidades em mais de{' '}
          <strong>
            150 mil alunos pelo mundo, o Grupo Impulse, desenvolveu o &quot;O
            Programa de Aceleração Impulse&quot;...
          </strong>
        </p>
        <p className="text-center leading-relaxed">
          Uma plataforma que te conecta com o mentor certo para a sua carreira.
        </p>

        <Button className="max-w-[60%]">
          Começar agora <ArrowUpRight className="size-4 ml-2" />
        </Button>
      </div>
    </section>
  )
}
