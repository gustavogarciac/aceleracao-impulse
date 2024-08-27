'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export const ProgramTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="text-3xl font-semibold text-theme-blue-default relative leading-tighter text-center"
    >
      Programa de <br />
      <strong className="relative pr-1">
        Aceleração Impulse
        <Image
          src={'/assets/project-title.svg'}
          width={30}
          height={30}
          alt="Programa de Aceleração Impulse"
          className="absolute -bottom-1 -right-7"
        />
      </strong>
    </motion.h1>
  )
}
