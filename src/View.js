import React from 'react'
import Navbar from './Pages/Navigation/Nav'
import HeroSection from './Pages/HeroSection/Hero'
import ArticleSection from './Pages/ArticleSection/Articles'
import Service from './Pages/Services/Service'
import ProviderSection from './Pages/ProviderSection/Providers'
import Footer from './Pages/FooterSection/Footer'
import Testimonial from './Pages/TestimonialSection/Testimonial'

function View() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <ProviderSection />
      <Testimonial />
      <ArticleSection />
      <Footer />
    </div>
  )
}

export default View
