import React from 'react'
import {AboutImage} from './FullScreenImages'
import Profile from '../images/blacknwhite.jpeg'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Text goes here</p>
      {Profile}
      <AboutImage/>
    </div>
  )
}

export default About
