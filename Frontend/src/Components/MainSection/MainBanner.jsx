import React from 'react'
import demo2 from '../../assets/bannerpic.jpg';
import '../../Css/MainBanner.css'
export default function MainBanner() {
  return (
    <>
      <div className='section1'>
        <div className="section1image"><img src={demo2} alt="" className="demo" /></div>
        <div className="section1text">
          <p className='section1text1'>Discover our latest products in action!</p>
          <p className="section1text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis, esse velit assumenda, pariatur itaque aliquid dolorem ab laudantium eveniet consequatur? Cum molestias ratione assumenda quas provident doloribus? Fugit, ducimus!</p>
          <button className='bannershopnow'> Shop Now</button>
        </div>
      </div>
    </>
  )
}
