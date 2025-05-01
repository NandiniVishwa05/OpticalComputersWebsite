import React from 'react'
import '../../Css/About.css'
import aboutpic from '../../assets/demo2.png'
export default function About() {
  return (
    <>
      <p className="sectiontitle">ABOUT US</p>
      <div className="about">
        <div className='aboutimage'><img src={aboutpic} alt="" className="aboutpic" /></div>
        <div className='aboutdesc'>
            <p className='desc'>At Optical Computers, we don’t just sell computers — we empower possibilities. Whether you're building your dreams, leveling up your gaming, or powering your business, we’re here to provide the tools that make it happen.    </p>
            <p className='quotes'>"Technology is best when it brings people together." – Matt Mullenweg </p>
            <p className='desc'>We aim to make your tech-buying journey smooth, affordable,trustworthy and a commitment to customer satisfaction, our team works tirelessly to help you find the right tech solutions. Whether you're tech-savvy or just getting started, we’re here to guide you with honest advice and responsive support.</p>
            <p className='quotes'>"The best way to predict the future is to create it." – Alan Kay</p>
            <p className='quotes'> Shop with us and power up your future.</p>
        </div>
      </div>
    </>
  )
}
