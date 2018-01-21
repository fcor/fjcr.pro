import React from 'react'
import Button from './Button'
import animation from '../images/animation.jpg'
import git from '../images/git.jpg'

const Teaching = () =>
  <div className="contenido">
    <div className="teaching-content">
      <Class img={animation}
        title={"Web animations, Bringing your UIs to life"}
        description={"In this class, you will learn how to make your users love your website using single web animations. It’s project-oriented with hands-on examples, and will help you with the most fundamental concepts of web animation."}
        link={"http://skl.sh/2vshygS"}
      />
      <Class img={git}
        title={"Github Essentials"}
        description={"In this class, I’ll teach you how to get started with git and github, create your own repositories, collaborate with your team and host your own website on github pages!"}
        link={"http://skl.sh/2zB0rLN"}
      />
    </div>
  </div>

const Class = ({ img, title, description, link }) =>
 <div className="clase">
   <div className="img-box">
     <img src={img} alt="class img" width="450px"/>
   </div>
   <h1>{title}</h1>
   <p>{description}</p>
   <Button text="Enroll now" link={link} />
 </div>

export default Teaching
