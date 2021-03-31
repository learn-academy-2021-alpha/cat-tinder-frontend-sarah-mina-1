import React, { Component } from 'react'
import derpycat from '../assets/derpycat.jpeg'

class NotFound extends Component {
  render() {
    return (
      <div className="main-body">
        <h3>Looks like something went wrong.</h3>
        <img src={ derpycat } alt="derpy cat with toast around face"/>
      </div>
    )
  }
}
export default NotFound
