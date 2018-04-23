import React from 'react'
// import Navbar from './Navbar'

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
    Aca va ekl menu responsive
  </div>

export default Hamburger
