import React from 'react'
import github from '../images/github.svg'
import medium from '../images/medium.svg'
import twitter from '../images/twitter.svg'

const iconos = [ github, twitter, medium, github, twitter]

const Home = () =>
  <div className="contenido">
    <div className="info1">
      <div className="logo">
        <img src={github} alt="" width="190px"/>
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
          > My passions are reading, running and listening to Pantera
        </p>
      </div>
      <div className="info-redes">
        {iconos.map((item, index) =>
          <div key={index} className="iconoRedes">
            <img src={item} alt="red" width="35px" />
          </div>
        )}
      </div>
    </div>
  </div>

export default Home
