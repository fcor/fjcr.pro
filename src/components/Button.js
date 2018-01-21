import React from 'react'

const Button = ({text, link}) =>
  <a className="btn" href={link} target="_blank" rel="noopener noreferrer">
    {text}
  </a>

export default Button
