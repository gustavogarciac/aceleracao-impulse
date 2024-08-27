import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { testimonials } from '@/consts/testimonials'

export const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 pt-16 px-6 pb-10 bg-theme-blue-default">
      <h2 className="text-zinc-50 subtitle font-bold text-2xl">
        Nossos alunos estão comentando...
      </h2>

      <div className="flex flex-col gap-14 w-full md:grid grid-cols-2 md:gap-10 max-w-2xl mx-auto">
        {testimonials.map((test) => (
          <div key={`${test.name}-testimonial`} className="space-y-3">
            <div className="flex flex-row items-center gap-3 w-full">
              <Image
                width={60}
                height={60}
                src={test.image}
                className="rounded-full object-cover aspect-square"
                alt={test.name}
              />
              <div className="flex flex-col gap-px">
                <span className="text-xl font-bold text-zinc-50">
                  {test.name}
                </span>
                <div className="flex flex-row gap-px">
                  {Array.from({ length: test.rating }).map((_, index) => (
                    <StarIcon
                      key={`testimonials-${test.name}-star-${index}`}
                      className="size-6 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-zinc-50 leading-relaxed text-start">
              {test.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
