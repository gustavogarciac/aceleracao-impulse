import { Footer } from './_components/footer'
import { AccessAndCardsSection } from './_components/sections/access-and-cards-section'
import { CareerGrowthSection } from './_components/sections/career-growth-section'
import { DevelopmentPlanSection } from './_components/sections/development-plan-section'
import { FrequentQuestionsSection } from './_components/sections/frequent-questions-section'
import { Hero } from './_components/sections/hero'
import { NextStepsSection } from './_components/sections/next-steps-section'
import { PricingSection } from './_components/sections/pricing-section'
import { TestimonialsSection } from './_components/sections/testimonials-section'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <AccessAndCardsSection />

      <DevelopmentPlanSection />

      <NextStepsSection />

      <CareerGrowthSection />

      <PricingSection />

      <TestimonialsSection />

      <FrequentQuestionsSection />

      <Footer />
    </main>
  )
}
