import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'


const LogoBox = (props) =>
  <Link to="/">
    <img src={logo} alt="logo" width={props.width}/>
  </Link>

export default LogoBox
