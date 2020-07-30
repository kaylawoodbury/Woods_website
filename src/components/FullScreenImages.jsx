import React from 'react'
import Image from '../images/smilebylake.jpeg'
import Image2 from '../images/tahoeview.jpeg'

const StartPage = () => {
  return (
    <div style={styles.background}>
      <div style={styles.slogan}>
      <h1>"Real life and love are wonderfully absurd. Why not write them that way?"</h1>
      </div>
    </div>
  )
}
const AboutImage = () => {
  return (
    <div style={styles.background2}>
      <div style={styles.slogan2}>
      <h1>"Paddle board sex.....would the mechanics work?"</h1>
      </div>
    </div>
  )
}

export {StartPage, AboutImage}



const styles = {
  background: {
    backgroundImage: `url(${Image})`,
    height: '95vh',
    top:0,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: 0,
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  },
  background2: {
    backgroundImage: `url(${Image2})`,
    height: '95vh',
    top:0,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: 0,
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  },
  slogan: {
    position: "static",
    marginLeft: "20%",
    marginRight: '20%',
    marginTop: '5%',
    marginBottom: '30%',
    color: '#31527B',
    // fontFamily: 'Comic Sans MS',
    fontSize: 20
  },
  slogan2: {
    position: "static",
    marginLeft: "50%",
    marginRight: '3%',
    marginTop: '4%',
    marginBottom: '30%',
    color: '#31527B',
    // fontFamily: 'Comic Sans MS',
    fontSize: 20
  }
}

