import '../styles/nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faFaceSmile, faCartShopping ,faBars, faPhone } from '@fortawesome/free-solid-svg-icons'
import {   faXTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/links.css'
import { useState } from 'react';


const Nav = (props) => {
 
    return ( 
    
    <header>
        <div className="nav-bar">
            <div className="nav-btn" onClick={props.openSideNav}>
                <FontAwesomeIcon icon={faBars} />

            </div>
            <div className="logo">Home slice</div>
            <ul>
                {/* <li>Home</li> */}
                <li  className='menu-btn' onClick={
                    () => {props.scrollToSection(props.toMenu)}
                } >Menu</li>
                <li onClick={
                    () => {
                        props.scrollToSection(props.toAbout)
                    }
                }>About us</li>
            </ul>

        </div>
        <div className='links links-nav'>
            <a href="https:/facebook.com"><FontAwesomeIcon icon={faFacebook} className='facebook-icon'/></a>
            <a href="https:/x.com"><FontAwesomeIcon icon={faXTwitter} className='x-icon'/></a>
            <div className="phone">
                <FontAwesomeIcon icon={faPhone} className='phone-icon'/>
                <p>0123 456 7891</p>
            </div>
        </div>
        <div className="cart-button" onClick={props.openCart} >
            <FontAwesomeIcon icon={faCartShopping} />
                {
                    props.cartItems.length > 0 && 
                    <div className='items-count'>{props.cartItems.length}</div>
                }
        </div>


    </header> );
}
 
export default Nav;