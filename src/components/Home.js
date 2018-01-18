import React from 'react'
import github from '../images/github.svg'
import medium from '../images/medium.svg'
import twitter from '../images/twitter.svg'
import speaker from '../images/speaker.svg'
import logo from '../images/logo.svg'
import mail from '../images/mail.svg'

const colors = ["#C699F7", "#7EBAFF", "#9CEF9D", "#E34B30"]
const iconos = [github, twitter, medium, speaker, mail]

class Home extends React.Component{

  handleHover(e){
    const col =  colors[Math.floor(Math.random()*colors.length)]
    //e.target.style.color = col
    console.log("in");
  }
  handleOut(e){
    //e.target.style.color = "white";
    console.log("out");
  }

  render(){
    return(
      <div className="contenido">
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
          <div className="info-redes">
            {iconos.map((item, index) =>
              <div key={index} className="iconoRedes">
                <img src={item} alt="red" width="35px"
                     onMouseOver={(e) => this.handleHover(e)}
                     onMouseOut={(e) => this.handleOut(e)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
