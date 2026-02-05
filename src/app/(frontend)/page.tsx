import React from 'react'
import HeroSection from '@/components/hero-section-1'
import Features from '@/components/features-1'
import Testimonials from '@/components/testimonials-1'
import FAQs from '@/components/faqs-2'
import ProofAndTrust from '@/components/proof-and-trust'
import WhyChooseUs from '@/components/why-choose-us'
import FooterCTA from '@/components/footer-cta'
import './styles.css';
import {Header} from '@/components/header'

export default function HomePage() {
  return (
    <div className="home p-0 max-w-none">
      <Header/>
       <HeroSection />
       <Testimonials />
       <ProofAndTrust />
       <WhyChooseUs />
       <Features />
       <FAQs />
       <FooterCTA />
    </div>
  )
}
