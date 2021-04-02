import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatShow extends Component{
  render(){
    return(
      <>
        <Col sm="6" className="show-body">
          <Card body >
            <CardTitle>
              Hi, my name is { this.props.cat.name }!
            </CardTitle>
            <CardText>
              I am { this.props.cat.age } years old. I enjoy { this.props.cat.enjoys }.
            </CardText>
            <NavLink to={ `/catedit/${this.props.cat.id}` }>
              <Button color="secondary">
                Edit Cat Profile
              </Button>
            </NavLink>
            <NavLink to={"/catindex"}>
              <Button color="secondary" onClick={ () => this.props.deleteCat(this.props.cat.id) }>
                Delete Cat Profile
              </Button>
            </NavLink>
          </Card>
        </Col>
      </>
    )
  }
}
export default CatShow
