import React, { Component } from 'react'
import toast from '../assets/toast-toes.jpeg'

class Home extends Component {
  render() {
    return (
      <div className="main-body">
        <h3>It's like Tinder but for cats.</h3>
        <p>Find your cat a friend today!</p>
        <img src={ toast } alt="cat laying on its back" className="home-pic"/>
      </div>
    )
  }
}
export default Home
