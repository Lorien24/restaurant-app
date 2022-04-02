import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
import {GrClose} from 'react-icons/gr'
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Navbar.css';

const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false);


  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.lorien} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'>
        <a href="#home">Home</a>
      </li>
      <li className='p__opensans'>
        <a href="#about">About</a>
      </li>
      <li className='p__opensans'>
        <a href="#menu">Menu</a>
      </li>
      <li className='p__opensans'>
        <a href="#awards">Awards</a>
      </li>
      <li className='p__opensans'>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Login In / Register</a>
      <div/>
      <a href="/" className='p__opensans'>Book Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{setToggleMenu(true)}}/>

      {toggleMenu && (

      <div className='app__navbar-smallscreen_overlay flex__center slide__bottom'>
        {/* <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={()=>{setToggleMenu(false)}}/> */}
        <FontAwesomeIcon icon={faCircleXmark} fontSize={27} className='overlay_close' onClick={()=>{setToggleMenu(false)}}/>

        <ul className='app__navbar-smallscreen-links'>
      <li className='p__opensans'>
        <a href="#home">Home</a>
      </li>
      <li className='p__opensans'>
        <a href="#about">About</a>
      </li>
      <li className='p__opensans'>
        <a href="#menu">Menu</a>
      </li>
      <li className='p__opensans'>
        <a href="#awards">Awards</a>
      </li>
      <li className='p__opensans'>
        <a href="#contact">Contact</a>
      </li>
    </ul>
      </div>
      )}


    </div>
  </nav>
)
}

export default Navbar;
