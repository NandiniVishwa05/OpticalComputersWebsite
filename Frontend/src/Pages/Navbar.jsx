import React from 'react'
import { FiSearch } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { TfiAlignJustify } from "react-icons/tfi";
import { SiElectronbuilder } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import '../Css/Navbar.css'
export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className='navbarpartone'>
                    <div className='navbarpartoneoptions'>
                        {/* <img src={logo} alt="" className="logo" /> */}
                        <div className='option1'> <p className='logo'>Optical Computers</p> </div>
                        <div className='option1'> <input type="text" name="searchabr" className="searchbar" placeholder='Search for products...' /> <button className='searchbtn'><FiSearch size={20} /></button></div>
                    </div>
                    <div className='navbarpartoneoptions'>
                        <div className='option1'><SiElectronbuilder size={22} />About Us</div>
                        <div className='option1'><IoCallOutline size={22} />Contact Us</div>
                        <div className='option1'><FaRegUser size={22} />Login</div>
                    </div>
                </div>
                <div className='navbarparttwo'>
                    <div className='navbarparttwooptions'>
                        <div className="navbarsubparttwooptions option1"><TfiAlignJustify size={25}/>Categories</div>
                        <div className="navbarsubparttwooptions option1">Gaming Gears</div>
                        <div className="navbarsubparttwooptions option1">Built PC</div>
                    </div>
                    <div className='navbarparttwooptions'>
                        <div className='wishlist option1'> < GoHeart size={28} /> Wishlist</div>
                        <div className='cart option1'> <CiShoppingCart size={30} /> Cart</div>
                    </div>
                </div>
            </div>
        </>
    )
}
