import React from 'react'

const Feed = () => {
  return (
    <div style={styles.background}>
      <h1>New blog post or twitter maybe?</h1>
    </div>
  )
}

export default Feed

const styles = {
  background: {
    backgroundColor: '#7696BD',
    height: '95vh',
    top:0,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: 0,
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  }
}