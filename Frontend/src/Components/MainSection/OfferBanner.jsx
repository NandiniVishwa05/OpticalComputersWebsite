import React from 'react'
import offerbanner from '../../assets/offerbannerimage.png'
import '../../Css/OfferBanner.css'
import { FiShoppingBag } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";


export default function OfferBanner() {
    const offercard = [
        { icon: <IoPricetagsOutline />, cardtitle: " Great Value Deals", carddesctitle: "Top brands, fair prices.", carddesc: "Get the best tech without breaking the bank with exclusive discounts and seasonal offers." },
        { icon: <BsPatchCheck />, cardtitle: "Secure Transaction", carddesctitle: "Shop confidently.", carddesc: "Encrypted checkout and multiple payment options for a stress-free buying experience." },
        { icon: <FiShoppingBag />, cardtitle: " Speedy Delivery", carddesctitle: "Tech at your doorstep, fast.", carddesc: "We ensure prompt and reliable delivery on all orders." },
        { icon: <RiCustomerServiceLine />, cardtitle: "Support Anytime", carddesctitle: "Support you can count on.", carddesc: "Our team is ready to assist with your queries before and after your purchase." },
    ]
    return (
        <div className='offerbanner'>
            <p className='sectiontitle'>POWER UP WITH SMART OFFERS !</p>
            <div className="offerbannerpic">
                <div className="offerbannerdiv">
                    <img src={offerbanner} alt="" className="offerbannerimage" />
                </div>
                <div className="offerbannertextdiv">
                    <h1 className='offerbannertitle'>"Smart Tech Deals"<br/>Limited Time Offers!</h1>
                    <p className='offerbannerdescription'>Sign up now and start saving on the tech you love!<br />* Get a 10% discount on your first purchase.*</p>
                    <button className='offerbutton'>Login</button>
                </div>
            </div>
                <div className="offercardparentdiv">
                    {offercard.map((data, index) => (
                        <>
                            <div className="offercardchilddiv" key={index}>
                                <span className='offericon'>{data.icon}</span>
                                <p className='offertitle'><b>{data.cardtitle}</b></p>
                                <p className='offerdesc'>{data.carddesctitle}</p>
                                <p className='offerdesc'>{data.carddesc}</p>
                            </div>
                        </>
                    ))}
                </div>
        </div>
    )
}