import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
// import cats from './mockCats.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    this.catIndex()
  }

  catIndex = () => {
    fetch("http://localhost:3000/cats")
    .then(response => {
      return response.json()
    })
    .then(catsArray => {
      console.log(catsArray)
      this.setState({ cats: catsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  updateCat = (editedCat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(editedCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>

          {/* HOME */}
          <Route exact path="/" component={ Home } />

          {/* INDEX */}
          {/* Static route --> <Route path="/catindex" component={ CatIndex } /> */}
          <Route
            path="/catindex"
            render={ (props) => <CatIndex cats={ this.state.cats } /> }
          />

          {/* SHOW */}
          {/* Static route --> <Route path="/catshow" component={ CatShow } /> */}
          <Route path="/catshow/:id" render={(props) => {
            // get the id from the URL
            // const id = parseInt(props.match.params.id)
            const id = +props.match.params.id
            // find the cat from mockData with the id
            const foundKitty = this.state.cats.find(cat => cat.id === id)
            // pass that cat into CatShow as propData
            return <CatShow cat={ foundKitty } /> }
          } />

          {/* NEW */}
          <Route
            path="/catnew"
            render={ (props) => <CatNew createNewCat={ this.createNewCat } /> }
          />

          {/* EDIT */}
          <Route
            exact path={"/catedit/:id"}
            render={ (props) => {
              const id = +props.match.params.id
              const cat = this.state.cats.find(cat => cat.id === id)
              return(
                <CatEdit
                  updateCat={ this.updateCat }
                  cat={ cat }
                />
              )
            }}
          />
          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App
