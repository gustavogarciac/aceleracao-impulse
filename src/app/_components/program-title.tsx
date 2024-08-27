import Image from 'next/image'
import React from 'react'

export const ProgramTitle = () => {
  return (
    <h1 className="text-3xl font-semibold text-theme-blue-default relative leading-tighter text-center">
      Programa de <br />
      <strong className="relative">
        Aceleração Impulse
        <Image
          src={'/assets/project-title.svg'}
          width={30}
          height={30}
          alt="Programa de Aceleração Impulse"
          className="absolute -bottom-1 -right-7"
        />
      </strong>
    </h1>
  )
}
