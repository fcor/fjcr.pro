import React from 'react'
import Icon from './Icon'

const iconos = ['github', 'twitter', 'medium', 'speaker', 'mail']

const Icons = ({version}) =>
  <div className={`info-redes ${(version === 'desktop') ? '' : 'mobile' }`} >
    {iconos.map((item) =>
      <div key={item} className={`iconoRedes ${(version === 'desktop') ? '' : 'mobile' }`}>
        <Icon name={item}/>
      </div>
    )}
  </div>

export default Icons
