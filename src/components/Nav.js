import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () =>
  <nav className="navbar">
    <ul className='nav'>
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

export default Nav
