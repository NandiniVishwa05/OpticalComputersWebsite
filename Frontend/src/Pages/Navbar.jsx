import React from 'react'
// import logo from '../assets/logo.png'
import '../Pages/Css/Navbar.css'
export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className='navbarpartone'>
                    <div className='navbarpartone'>
                        {/* <img src={logo} alt="" className="logo" /> */}
                        <p className='logo'>Optical Computers</p>
                        <input type="search" name="searchabr" className="searchbar" /></div>
                    <div>
                        <div>About Us</div>
                        <div>Contact Us</div>
                        <div>Login/Register</div>
                    </div>
                </div>
                <div className='navbarparttwo'>
                    <div>
                        <div className="navbarsubparttwooptions"><p>Categories</p></div>
                        <div className="navbarsubparttwooptions"><p>Gaming Gears</p></div>
                        <div className="navbarsubparttwooptions"><p>Built PC</p></div>
                    </div>
                    <div>
                        <div>Wishlist</div>
                        <div>Cart</div>
                    </div>
                </div>
            </div>
        </>
    )
}
