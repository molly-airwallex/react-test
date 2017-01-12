import React from 'react'
const Radium = require('radium');

function About() {
  return (
      <h1 style={styles.text} >this is about page</h1>
  );
}

const styles = {
  text: {
    color:'blue',
  }
};

export default Radium(About);