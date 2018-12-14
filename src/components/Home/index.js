import React from 'react'
import './styles.css'

import Icon from '../Icon'
import logo from '../../images/logo.svg'

const iconos = ['github', 'twitter', 'medium', 'speaker', 'mail']

class Home extends React.Component{

  render(){
    return(
      <div className="home-content">
        <div className="info1">
          <img src={logo} alt="Logo"/>
        </div>
        <div className="info2">
          <div className="info-texto">
            <h1>Fabio Cortés</h1>
            <h2>I build stuff</h2>
            <p>
              > I'm a weird engineer, teacher and speaker
              <br/>
              <br/>
              > Right now I'm mostly working with UI Development 
              <br/>
              <br/>
              > I'm learning about WebVR and Creative Coding
              <br/>
              <br/>
              > I love reading, running, movies, music and beer
            </p>
          </div>
          <div className="info-redes" >
            {iconos.map((item) =>
              <div key={item} className="iconoRedes">
                <Icon name={item}/>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
