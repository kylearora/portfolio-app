import React, {Component} from 'react'

class About extends Component {
  render() {
    return (
      <div className = "aboutDiv">
        <div className="test">
          <h2>This is a very basic React app with minimal styling that uses React Routes. </h2>
        </div>
        <div classname>
          <h2>Designed by Kyle Arora </h2>
        </div>
        <div className="headShotDiv">
          <img className="headShot" src="https://i.imgur.com/1m6kush.png" alt="kyle pic"></img>
        </div>
      </div>
    )
  }
}

export default About
