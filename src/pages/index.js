import React from 'react'
import HeroSections from './components/HeroSections'
import Section1 from './components/Section1'
import Section4 from './components/Section4'
import Section3 from './components/Section3'
import FooterSection from './components/FooterSection'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Homecard from './components/Card/homecard'
import FaqSection from './components/FaqSection'
import SectionSecurity from './components/SectionSecurity'


const index = () => {
  return (
    <div>
      <HeroSections/>
      <Section1/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Homecard/>
      <SectionSecurity/>
      <FaqSection/>
      <FooterSection/>

    </div>
  )
}

export default index
