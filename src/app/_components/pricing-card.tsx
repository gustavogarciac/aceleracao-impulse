'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const PricingCard = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        ease: 'linear',
        stiffness: 340,
        dumping: 120,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
