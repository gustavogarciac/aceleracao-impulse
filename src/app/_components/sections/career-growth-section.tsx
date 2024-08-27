import Image from 'next/image'
import React from 'react'

export const CareerGrowthSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 pt-20 md:pt-32 px-6 pb-20 md:pb-32 bg-zinc-100">
      <h2 className="font-bold subtitle text-2xl text-center">
        O Crescimento da sua Carreira
      </h2>

      <div className="flex flex-col gap-5 items-center md:flex-row md:max-w-2xl md:justify-between w-full">
        <div className="flex flex-col gap-px w-full">
          <span className="text-theme-blue-default font-semibold">Hoje:</span>
          <ul className="space-y-0.5">
            <li>1 Contrato Exclusivo</li>
            <li>Trabalho Presencial</li>
            <li>Apenas uma fonte de Renda</li>
          </ul>
        </div>

        <Image
          src="/assets/x-icon.svg"
          width={100}
          height={100}
          alt="X"
          className="max-w-10 md:max-w-32 lg:max-w-40"
        />

        <div className="flex flex-col gap-px w-full md:text-end">
          <span className="text-theme-blue-default font-semibold">
            4 meses de Programa:
          </span>
          <ul className="space-y-0.5">
            <li>2 a 4 contratos</li>
            <li>Sem exclusividade</li>
            <li className="text-green-600 font-semibold">
              Renda: 4 a 7 vezes maior
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
