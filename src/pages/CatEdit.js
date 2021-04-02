import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component{
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: this.props.cat.name,
        age: this.props.cat.age,
        enjoys: this.props.cat.enjoys
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.form, this.props.cat.id)
    this.setState({ submitted: true })
  }

  render(){
    return(
      <React.Fragment>
        <h2>Update Cat Information</h2>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ this.state.form.name }
            />
          </FormGroup>
          <FormGroup>
            <Label>Age</Label>
            <Input
              type="number"
              name="age"
              onChange={ this.handleChange }
              value={ this.state.form.age }
            />
          </FormGroup>
          <FormGroup>
            <Label>Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={ this.handleChange }
              value={ this.state.form.enjoys }
            />
          </FormGroup>
          <Button
            name="submit"
            color="secondary"
            onClick={ this.handleSubmit }
          >
            Edit Cat Profile
          </Button>
        </Form>
        { this.state.submitted &&
          <Redirect
            to={ `/catshow/${this.props.cat.id}` }
          />
        }
      </React.Fragment>
    )
  }
}
export default CatEdit
