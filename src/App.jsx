

import './App.css'

import SaleBanner from './components/SaleBanner'
import NavBarTop from './components/Navbar-Plaque'
import HeaderBlock from './components/Header-Block'
import PartnersBlock from './components/Partners-Block'
import VideoBlock from './components/Video-Block'
import BenefitsBlock from './components/Benefits-Block'
import OurCourses from './components/Our-Courses'
import Testimonials from './components/Testimonials-Block'
import PricingBlock from './components/Pricing-block'
import Faq from './components/faq-block'
import FooterBlock from './components/footer-block' 

function App() {
  

  return (
    <>
   <body id="app">
    <SaleBanner></SaleBanner>
    

    <main className="mb-10">
      <NavBarTop></NavBarTop>
      <HeaderBlock></HeaderBlock>
      <PartnersBlock></PartnersBlock>
      <VideoBlock></VideoBlock>
      <BenefitsBlock></BenefitsBlock>
      <OurCourses></OurCourses>
      <Testimonials></Testimonials>
      <PricingBlock></PricingBlock>
      <Faq></Faq>
    </main>

    <footer >
      <FooterBlock></FooterBlock>
    </footer>
  </body>

    
    </>
  )
}

export default App
