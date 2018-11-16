import React from 'react'
import Icon from './Icon'
import Icons from './Icons'
import logo from '../images/logo.svg'
// const logo = 'https://killcloud.nyc3.digitaloceanspaces.com/Images-fjcr/logo.svg'

class Home extends React.Component{

  render(){
    const { version } = this.props
    return(
      <div className="caja">
        {(version === 'desktop') &&
          <div className="info1">
          <div className="logo">
            <img src={logo} alt="" width="190px"/>
          </div>
        </div>
        }
        <div className={`${(version === 'desktop') ? 'info2' : 'info2-mobile' }`}>
          <div className={`${(version === 'desktop') ? 'info-texto' : 'info-texto-mobile' }`}>
            <h1>Fabio Cortés</h1>
            <h2>I write things that make things</h2>
            <p className={`p-info ${(version === 'desktop') ? '' : 'mobile' }`}>
              > I'm a weird engineer, teacher and speaker
              <br/>
              <br/>
              > Right now I'm mostly working with VR and Creative Coding
              <br/>
              <br/>
              > I love reading, running, movies, music and beer
              <br/>
              <br/>
              > If you're unimpressed with my website it's because <br/> &nbsp; i'm to busy learning new things
            </p>
          </div>
          <Icons version={version} />
        </div>
      </div>
    )
  }
}

export default Home
