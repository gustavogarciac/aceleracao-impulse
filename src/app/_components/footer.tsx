import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-12 pt-16 px-6 pb-10 bg-zinc-950 text-zinc-50">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between items-center selection:md:items-start w-full">
          <Image
            alt="Logo da Impulse Amarelo"
            src="/assets/yellow-impulse.svg"
            width={60}
            height={60}
          />

          <div className="flex flex-col gap-12 md:gap-2 md:text-end text-">
            <a
              href="https://beimpulse.com/politica-de-privacidade"
              target="_blank"
              className="underline"
            >
              Política de Privacidade
            </a>
            <a
              href="https://beimpulse.com/termos-de-uso"
              target="_blank"
              className="underline"
            >
              Termos de Uso
            </a>
          </div>
        </div>

        <small className="text-muted-foreground text-center text-xs">
          GRUPO IMPULSE LTDA - CNPJ n° 37.837.482/0001-49 | Av Carlos Gomes,
          Porto Alegre - RS - Brasil | © 2023 Copyright
        </small>
      </div>
    </footer>
  )
}
