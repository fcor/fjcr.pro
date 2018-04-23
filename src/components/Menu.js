import React from 'react'
import Nav from './Nav'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

const Menu = ({version}) => {
     if (version === "desktop") {
       return(
        <Nav version="desktop"/>
       )
     } else {
       return(
         <div className="menu-responsive">
           <LogoBox />
           <Hamburger />
         </div>
         // <Nav version="mobile"/>
         // {/* <div className="menu-responsive">
         //   <Hamburger lang={lang} changeLang={changeLang} handleOverlay={handleOverlay} />
         //   <LogoBox logo={logo} width="140px" className="logo-mobile" />
         // </div> */}
       )
     }
}

const LogoBox = () =>
  <div>
    <Link to="/">
      <img src={logo} alt="logo" width="30px"/>
    </Link>
  </div>

export default Menu
