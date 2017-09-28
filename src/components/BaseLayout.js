import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'


class BaseLayout extends Component {

  render() {
    return (
      <div>
          <nav>
            <NavLink className="navLink" exact to="/">Home</NavLink>

            <NavLink className="navLink" to="/about">About</NavLink>

            <NavLink className="navLink" to="/portfolio">Portfolio</NavLink>

            <NavLink className="navLink" to="/contact">Contact</NavLink>

            <NavLink className="navLink" to="/references">References</NavLink>
          </nav>

      {this.props.children}
    </div>
    )
  }
}

export default BaseLayout
