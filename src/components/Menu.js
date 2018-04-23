import React from 'react'
import Nav from './Nav'
import Hamburger from './Hamburger'
import LogoBox from './LogoBox'

const Menu = ({version}) => {
     if (version === "desktop") {
       return(
        <Nav version="desktop"/>
       )
     } else {
       return(
         <div className="menu-responsive">
           <LogoBox width="30px" />
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

export default Menu
