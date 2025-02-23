import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo"/>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">about</a></li>
      <li className="p__opensans"><a href="#menu">menu</a></li>
      <li className="p__opensans"><a href="#award">awards</a></li>
      <li className="p__opensans"><a href="#contact">contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className="p__opensans">Log In / Register</a>
      <div/>
      <a href="/" className="p__opensans"> Book Tables</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{}}/>

      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>{}}/>
       </div>
        <ul className="app__navbar-smallscreen-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">about</a></li>
        <li className="p__opensans"><a href="#menu">menu</a></li>
        <li className="p__opensans"><a href="#award">awards</a></li>
        <li className="p__opensans"><a href="#contact">contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
