import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-12 pt-16 px-6 pb-10 bg-zinc-950 text-zinc-50">
      <Image
        alt="Logo da Impulse Amarelo"
        src="/assets/yellow-impulse.svg"
        width={60}
        height={60}
      />

      <a href="#" target="_blank" className="underline">
        Política de Privacidade
      </a>
      <a href="#" target="_blank" className="underline">
        Termos de Uso
      </a>

      <small className="text-muted-foreground text-center text-xs">
        GRUPO IMPULSE LTDA - CNPJ n° 37.837.482/0001-49 | Av Carlos Gomes, Porto
        Alegre - RS - Brasil | © 2023 Copyright
      </small>
    </footer>
  )
}
