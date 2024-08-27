import { Hero } from './_components/hero'
import { AccessAndCardsSection } from './_components/sections/access-and-cards-section'
import { NextStepsSection } from './_components/sections/next-steps-section'
import { PricingSection } from './_components/sections/pricing-section'
import { TestimonialsSection } from './_components/sections/testimonials-section'

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Hero />

      <AccessAndCardsSection />

      <NextStepsSection />

      <PricingSection />

      <TestimonialsSection />
    </main>
  )
}
