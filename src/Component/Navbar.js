import React from 'react'
import { useRef } from 'react'
import {FaBars,FaTimes,FaShoppingCart} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar =() =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header className='bg-dark text-white '>
    <Link to="/"><h3 className='logo text-white '><span style={{color:"#6244C5"}}>He</span><span style={{color:"#FFC448"}}>zra</span></h3></Link>
    <nav ref={navRef} className='NAV'>
    <Link to="/" > <a className='nava text-white ' >Home</a></Link>
    <Link to="/AboutUs"> <a className='nava text-white' >AboutUs</a></Link>
    <Link to="/Enterprise"> <a className='nava text-white'  >Skills</a></Link>
    <Link to="/Services"> <a className='nava text-white' >Services</a></Link>
    <Link to="/Project"> <a className='nava text-white' >Projects</a></Link>
    <Link to="/Contact"> <a className='nava text-white' >Contact</a></Link>





   
    <a></a>
    <a> </a>
    <a > </a>
    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
    <FaTimes/>

    </button>
    </nav>
    <button className='nav-btn' onClick={showNavbar}>
    <FaBars className='bars'/>
    </button>
    </header>

  )
}

export default Navbar