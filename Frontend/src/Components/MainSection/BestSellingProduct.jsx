import React, { } from 'react'
import '../../Css/BestSellingProduct.css'
import pdemo from '../../assets/pdemo.png'
import { GoHeart } from "react-icons/go";

export default function BestSellingProduct() {
  const section2Product = [
    { id: 1, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
    { id: 2, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
    { id: 3, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
    { id: 4, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
    { id: 5, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
    { id: 6, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
    { id: 7, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
    { id: 9, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
    { id: 9, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
    { id: 9, pimage: pdemo, pname: "Logitech G733 Lightspeed RGB Gaming Headset", pcostprice: "12000", psellingprice: "10000" },
  ];

  return (
    <div className='section2'>
      <p className='sectiontitle'>OUR BEST SELLING PRODUCTS</p>
      <div className="section2productcard">
        {section2Product.map((data, index) => (
          <>
            <div className="productcardcontainer" key={index}>
              {/* <div className='like'><p>< GoHeart size={28} /></p></div> */}
              <img src={data.pimage} alt="" className='pimage' />
              <div className='pname'>{data.pname}</div>
              <div className='pprice'>Rs.{data.psellingprice} <s className='pcostprice'>{data.pcostprice}</s></div>
              <div className='buybuttonwrapper'><button className='buybtn'>Buy</button></div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
