import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { GaleriaInfraestrutura } from "@/components/galeria-infraestrutura"
import { PainPoints } from "@/components/pain-points"
import { TechStack } from "@/components/tech-stack"
import MarqueeLogos from "@/components/marquee-logos"
import { WhyUs } from "@/components/why-us"
import { PricingPlans } from "@/components/pricing-plans"
import { Sobre } from "@/components/sobre"
import { Seguranca } from "@/components/seguranca"
import { Terminal } from "@/components/terminal"
import { CTASection } from "@/components/cta-section"
import GoogleReviews from "@/components/google-reviews"
import ClientLogos from "@/components/client-logos"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <GaleriaInfraestrutura />
      <PainPoints />
      <TechStack />
      <MarqueeLogos />
      <WhyUs />
      <PricingPlans />
      <Sobre />
      <Seguranca />
      <Terminal />
      <CTASection />
      <ClientLogos />
      <GoogleReviews />
      <Footer />
    </main>
  )
}
