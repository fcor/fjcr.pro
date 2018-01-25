import React from 'react'
import Icon from './Icon'
// import logo from '../images/logo.svg'
const logo = 'https://killcloud.nyc3.digitaloceanspaces.com/Images-fjcr/logo.svg'

const iconos = ['github', 'twitter', 'medium', 'speaker', 'mail']

class Home extends React.Component{

  render(){
    return(
      <div className="caja">
        <div className="info1">
          <div className="logo">
            <img src={logo} alt="" width="190px"/>
          </div>
        </div>
        <div className="info2">
          <div className="info-texto">
            <h1>Fabio Cortés</h1>
            <h2>I build stuff</h2>
            <p className="p-info">
              > I'm a hardware engineer, teacher and speaker
              <br/>
              <br/>
              > Right now I'm mostly working with Node.js
            </p>
            <p className="p-info">
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
