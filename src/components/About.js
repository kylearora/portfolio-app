import React, {Component} from 'react'
import Helmet from 'react-helmet'

class About extends Component {
  render() {
    return (
      <div className = "aboutDiv">

        <Helmet>
          <title>About</title>
        </Helmet>


        <div className="test">
          <h2>This is a very basic React app with minimal styling that uses React Routes. </h2>
        </div>
        <div className="">
          <h2>Designed by Kyle Arora </h2>
        </div>

        <div className="bio">
          <h4>Kyle Arora is an aspiring web developer and currently learning to program at The Iron Yard. He is also an alumnus from RICE University, earning his MBA in 2016.</h4>
        </div>
      </div>
    )
  }
}

export default About
