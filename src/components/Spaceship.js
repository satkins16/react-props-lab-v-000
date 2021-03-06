import React from 'react';

class Spaceship extends React.Component {
  render () {
    const { name, speed, hasRockets, colors } = this.props
    return (
      <div>
        <h1>Spaceship Name: {name}</h1>
        <h5>Speed: {speed}</h5>
        <h5>Rockets: {hasRockets ? "Yes" : "No"}</h5>
        <ul>
          {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
