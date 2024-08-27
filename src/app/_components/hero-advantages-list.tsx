'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export const HeroAdvantageList = () => {
  return (
    <ul className="flex flex-col gap-2">
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          ease: 'linear',
          stiffness: 340,
          dumping: 120,
          delay: 0.4,
        }}
        className="flex flex-row items-center gap-2"
      >
        <Image
          width={30}
          height={30}
          alt="Icone Check"
          src="/assets/check-icon.svg"
        />
        <span className="font-medium">
          Liberdade para trabalhar em qualquer lugar
        </span>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          ease: 'linear',
          stiffness: 340,
          dumping: 120,
          delay: 0.6,
        }}
        className="flex flex-row items-center gap-2"
      >
        <Image
          width={30}
          height={30}
          alt="Icone Check"
          src="/assets/check-icon.svg"
        />
        <span className="font-medium">
          Pode trabalhar apenas nas horas vagas
        </span>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          ease: 'linear',
          stiffness: 340,
          dumping: 120,
          delay: 0.8,
        }}
        className="flex flex-row items-center gap-2"
      >
        <Image
          width={30}
          height={30}
          alt="Icone Check"
          src="/assets/check-icon.svg"
        />
        <span className="font-medium">
          Não é necessário trabalhar em empresas
        </span>
      </motion.li>
    </ul>
  )
}
