import React from 'react'
import Button from '../Button'
import animation from '../../images/animation.jpg'
import git from '../../images/git.jpg'
import vr from '../../images/vr.jpg'
import twitter from '../../images/twitter.jpg'
import './styles.css'

const Teaching = () =>
  // <div className="caja">
    <div className="teaching-content">
      <Class img={animation}
        title={"Web animations, Bringing your UIs to life"}
        description={"In this class, you will learn the most fundamental concepts of web animation."}
        link={"http://skl.sh/2vshygS"}
      />
      <Class img={git}
        title={"GitHub Essentials"}
        description={"In this class, I’ll teach you how to get started with git and github."}
        link={"http://skl.sh/2zB0rLN"}
      />
      <Class img={vr}
        title={"Get Started With Virtual Reality For The Web"}
        description={"In this class, you will learn the basics of Virtual Reality for modern web using A-Frame"}
        link={"http://skl.sh/2vshygS"}
      />
      <Class img={twitter}
        title={"CSS Sprite Sheet Animations"}
        description={"In this class, you will learn how to combine spritesheets with CSS animation."}
        link={"http://skl.sh/2zB0rLN"}
      />
    </div>
   // </div>

const Class = ({ img, title, description, link }) =>
 <div className="clase">
   <img src={img} alt="class img"/>
   <h1>{title}</h1>
   <p>{description}</p>
   <Button text="Enroll now" link={link} />
 </div>

export default Teaching
