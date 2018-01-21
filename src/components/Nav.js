import React from 'react'
import { NavLink } from 'react-router-dom'
const colors = ["#C699F7", "#7EBAFF", "#9CEF9D", "#E34B30"]

class Nav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: 'white',
      navbar: 'Home'
      //position: 'out'
    }
    this.handleHover = this.handleHover.bind(this)
    this.handleOut = this.handleOut.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleHover(e){
    const { navbar } = this.state
    const nav = e.target.text
    if (!(navbar === nav)) {
      const col =  colors[Math.floor(Math.random()*colors.length)]
      e.target.style.color = col
    }
  }

  handleOut(e){
    const { navbar } = this.state
    const nav = e.target.text
    if (!(navbar === nav)) {
      e.target.style.color = "white";
    }
  }

  handleClick(e){
    const nav = e.target.text
    const { navbar } = this.state

    if (!(navbar === nav)) {
      const col =  colors[Math.floor(Math.random()*colors.length)]
      // e.target.style.color = col
      this.setState({
        navbar: nav,
        color: col
      })
    }
  }

  render() {
    const { color } = this.state
    const menu = ["Home", "Projects", "Articles", "Teaching"]

    return(
      <nav className="navbar">
        <ul className='nav'>
          {menu.map( (item) =>
            <li key={item}
              onClick={(e) => this.handleClick(e)}
              onMouseOver={(e) => this.handleHover(e)}
              onMouseOut={(e) => this.handleOut(e)}
              >
              {item === 'Home'
                ? <NavLink exact to='/' activeStyle={{color: color}} >
                    {item}
                  </NavLink>
                : <NavLink to={`/${item.toLowerCase()}`} activeStyle={{color: color}}>
                    {item}
                  </NavLink>
              }

          </li>
           )}
        </ul>
      </nav>
    )
  }
}


export default Nav
