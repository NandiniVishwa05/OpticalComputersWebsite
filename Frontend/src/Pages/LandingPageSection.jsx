import React from 'react'
import MainBanner from '../Components/MainSection/MainBanner'
import BestSellingProduct from '../Components/MainSection/BestSellingProduct'
import About from '../Components/MainSection/About'
import OfferBanner from '../Components/MainSection/OfferBanner'

export default function LandingPageSection() {
  return (
    <>
      <MainBanner/>
      <BestSellingProduct/>
      <About/>
      <OfferBanner/>  
    </>
  )
}
