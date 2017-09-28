import React, {Component} from 'react'
import Helmet from 'react-helmet'

class References extends Component {
  render() {
    return (
      <div className = "referencesDiv">

        <Helmet>
          <title>References</title>
        </Helmet>

        <label htmlFor="">Reference 1</label>
        <h3 className="reference">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis in natus asperiores iure iusto neque rem eveniet consequatur repellat, consequuntur vel pariatur laudantium. Cum numquam soluta error. Aspernatur, explicabo est!</h3>
        <label htmlFor="">Reference 2</label>
        <h3 className="reference">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis in natus asperiores iure iusto neque rem eveniet consequatur repellat, consequuntur vel pariatur laudantium. Cum numquam soluta error. Aspernatur, explicabo est!</h3>
        <label htmlFor="">Reference 3</label>
        <h3 className="reference">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis in natus asperiores iure iusto neque rem eveniet consequatur repellat, consequuntur vel pariatur laudantium. Cum numquam soluta error. Aspernatur, explicabo est!</h3>
      </div>
    )
  }
}

export default References
