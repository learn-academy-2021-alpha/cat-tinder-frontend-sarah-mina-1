import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    return (
      <>
        <h2>Index</h2>
        <ul>
          {this.props.cats.map(cat => {
            return (
              <li key={cat.id}>
                <NavLink to={`/catshow/${cat.id}`}>{cat.name}</NavLink>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default CatIndex
