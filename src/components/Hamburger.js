import React from 'react'
import LogoBox from './LogoBox'
import Nav from './Nav'
import Icons from './Icons'
import Footer from './Footer'

class Hamburger extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: null,
      // on: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(
      ({active}) => ({active: !active}),
    )
  }

  render() {
    const { active } = this.state
    let animation
    if (active === null) {
      animation = ''
    } else if (active === true) {
      animation = 'active'
    } else if (active === false) {
      animation = 'inactive'
    }
    return(
      <div>
        <div className={`hamburger-menu ${active ? 'active' : ''}`} onTouchStart={this.handleClick}>
          <div className={`bar-menu b1 ${animation}`}></div>
          <div className={`bar-menu b2 ${animation}`}></div>
          <div className={`bar-menu b3 ${animation}`}></div>
        </div>
        <SideMenu active={active} onClickMobile={this.handleClick} />
      </div>
    )
  }
}

const SideMenu = ({ active, onClickMobile }) =>
  <div className={`menu-responsive-box ${active ? 'active' : ''}`}>
    <div className="side-content">
      <LogoBox width="80px" />
      <h2>I write things that make things</h2>
      <Nav version="mobile" />
      <Icons />
    </div>
    <Footer />
  </div>


export default Hamburger
