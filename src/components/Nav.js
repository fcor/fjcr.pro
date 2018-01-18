import React from 'react'
import { NavLink } from 'react-router-dom'
const colors = ["#C699F7", "#7EBAFF", "#9CEF9D", "#E34B30"]

class Nav extends React.Component {

  handleHover(e){
    const col =  colors[Math.floor(Math.random()*colors.length)]
    e.target.style.color = col
    // console.log("in");
  }
  handleOut(e){
    e.target.style.color = "white";
    // console.log("out");
  }

  render() {
    return(
      <nav className="navbar">
        <ul className='nav'  onMouseOver={(e) => this.handleHover(e)}
         onMouseOut={(e) => this.handleOut(e)}>
          <li>
            <NavLink exact activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/projects'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/articles'>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/teaching'>
              Teaching
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}


export default Nav
