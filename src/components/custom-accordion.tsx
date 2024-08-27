import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type CustomAccordionProps = {
  children: React.ReactNode
}

type CustomAccordionItemProps = CustomAccordionProps & {
  value: string
}

export const CustomAccordion = ({
  children,
  ...props
}: CustomAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full" {...props}>
      {children}
    </Accordion>
  )
}

export const CustomAccordionItem = ({
  children,
  value,
}: CustomAccordionItemProps) => {
  return (
    <AccordionItem className="border-none space-y-3" value={value}>
      {children}
    </AccordionItem>
  )
}

export const CustomAccordionTrigger = ({ children }: CustomAccordionProps) => {
  return (
    <AccordionTrigger className="text-start bg-theme-blue-default p-0 rounded-full px-5 py-3 text-zinc-50">
      {children}
    </AccordionTrigger>
  )
}

export const CustomAccordionContent = ({ children }: CustomAccordionProps) => {
  return (
    <AccordionContent className="bg-zinc-100 rounded-xl p-3">
      {children}
    </AccordionContent>
  )
}
