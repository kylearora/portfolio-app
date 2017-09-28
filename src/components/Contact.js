import React, {Component} from 'react'
import Helmet from 'react-helmet'

class Contact extends Component {
constructor(props) {
  super(props)
  this.state = {
    contactData : {}
  }
}

componentDidMount() {
  console.log("componentdidMount")
  fetch("https://api.github.com/users/kylearora")
  .then(r => r.json())
  .then(json => {
    this.setState({
      contactData : json
    })
  })
}


  render() {
    return (
    <div className="contactPage">

      <Helmet>
        <title>Contact</title>
      </Helmet>

      <div className="headShotDiv">
        <img className="headShot" src="https://i.imgur.com/1m6kush.png" alt="kyle pic"></img>
      </div>

      <div className="contactInfo">
        <span className="infoLabels">Name:</span>  {this.state.contactData.name} <br/>
        <span className="infoLabels">GitHub URL:</span> <a href={this.state.contactData.html_url}>{this.state.contactData.login}</a><br/>
        <span className="infoLabels">Email:</span> <a href="mailto:kylearora@gmail.com">kylearora@gmail.com</a><br/>
        <span className="infoLabels">Company:</span>  {this.state.contactData.company} <br/>
        <span className="infoLabels">Website:</span> <a href={this.state.contactData.blog}>kylearora.com</a>
      </div>

    </div>
    )
  }
}

export default Contact
