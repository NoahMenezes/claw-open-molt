import React from 'react'
import HeroSection from '@/components/hero-section-1'
import LogoCloud from '@/components/logo-cloud-2'
import Features from '@/components/features-1'
import Testimonials from '@/components/testimonials-1'
import FAQs from '@/components/faqs-2'
import './styles.css'

export default function HomePage() {
  return (
    <div className="home p-0 max-w-none">
       <HeroSection />
       <LogoCloud />
       <Features />
       <Testimonials />
       <FAQs />
    </div>
  )
}
