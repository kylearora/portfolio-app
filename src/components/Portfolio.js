import React, {Component} from 'react'
import Helmet from 'react-helmet'

class Portfolio extends Component {
  render () {
    return (
      <div className="portfolioDiv">

        <Helmet>
          <title>Portfolio</title>
        </Helmet>

        <div>
          <h2>This is the portfolio page</h2>
        </div>
        <div>
          <h2>Please take a look at my <a href="http://www.github.com/kylearora">gitHub</a> to see my portfolio</h2>
        </div>

      </div>
    )
  }
}

export default Portfolio
