// import { useState, Fragment } from 'react'
// import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () =>  {
    return (
        <div className='NavContainer'>
        <div className="NavWrapper">
            <div className="NavLeft">
            {/* links for Home, Cart, Products, and About Pages may have to put in a checkout page as well  */}
            <ul className="NavLinkWrapper">
                <li className="NavLinks">Home</li>
                <li className="NavLinks">Products</li>
                <li className="NavLinks">About</li>
                <li className="NavLinks"><FiShoppingCart /></li>
            </ul>

            </div>
        <div className="NavRight">
            {/* cart icon, signout button,  */}
            {/* <button className="NavSignOutBtn" type='submit'>Sign Out</button> */}
        </div>
        </div>
            
        </div>
    )
}

export default Nav


