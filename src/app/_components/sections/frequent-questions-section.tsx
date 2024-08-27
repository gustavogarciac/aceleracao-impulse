import React from 'react'

import { Button } from '@/components/button'
import {
  CustomAccordion,
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from '@/components/custom-accordion'
import { frequentQuestionsAccordion } from '@/consts/accordions'

export const FrequentQuestionsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 pt-16 px-6 pb-10">
      <div className="flex flex-col gap-12 md:grid md:grid-cols-2 items-center">
        <h2 className="subtitle text-2xl font-bold text-center text-theme-blue-default shrink-0">
          Perguntas Frequentes
        </h2>
        <div className="flex flex-col gap-4 w-full">
          {frequentQuestionsAccordion.map((acc) => (
            <CustomAccordion key={acc.value}>
              <CustomAccordionItem value={acc.value}>
                <CustomAccordionTrigger>
                  <span>{acc.trigger}</span>
                </CustomAccordionTrigger>
                <CustomAccordionContent>
                  <p>{acc.content}</p>
                </CustomAccordionContent>
              </CustomAccordionItem>
            </CustomAccordion>
          ))}
          <Button className="mt-2">Quero começar agora</Button>
        </div>
      </div>
    </section>
  )
}
