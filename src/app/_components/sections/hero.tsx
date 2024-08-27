import Image from 'next/image'
import React from 'react'

import { ProgramTitle } from '../program-title'

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 pt-32 px-6 pb-10">
      <ProgramTitle />

      <h2 className="subtitle font-bold text-center">
        Comece seu próximo trabalho!
      </h2>

      <p className="text-center text-body">
        Se posicione para conquistar uma carreira acima dos{' '}
        <span className="text-theme-blue-default">R$ 10.000</span> por mês
      </p>

      <ul className="flex flex-col gap-2">
        <li className="flex flex-row items-center gap-2">
          <Image
            width={30}
            height={30}
            alt="Icone Check"
            src="/assets/check-icon.svg"
          />
          <span className="font-medium">
            Liberdade para trabalhar em qualquer lugar
          </span>
        </li>
        <li className="flex flex-row items-center gap-2">
          <Image
            width={30}
            height={30}
            alt="Icone Check"
            src="/assets/check-icon.svg"
          />
          <span className="font-medium">
            Pode trabalhar apenas nas horas vagas
          </span>
        </li>
        <li className="flex flex-row items-center gap-2">
          <Image
            width={30}
            height={30}
            alt="Icone Check"
            src="/assets/check-icon.svg"
          />
          <span className="font-medium">
            Não é necessário trabalhar em empresas
          </span>
        </li>
      </ul>
    </section>
  )
}
