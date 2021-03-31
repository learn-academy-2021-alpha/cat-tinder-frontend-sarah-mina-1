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
import cats from './mockCats.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: cats
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route 
            path="/catindex" 
            render = { () => <CatIndex cats={this.state.cats}/> } 
          />
          {/* <Route path="/catindex" component = { CatIndex } /> */}
          
          {/* <Route path="/catshow" component = { CatShow } /> */}
          <Route path="/catshow/:id" render = {(props) => {
            // get the id from the URL
            // const id = parseInt(props.match.params.id);
            const id = +props.match.params.id;
            // find the cat from mockData with the id
            const foundKitty = this.state.cats.find(cat => cat.id === id);
            // pass that cat into CatShow as propData
            return <CatShow cat={foundKitty}/>}
          } />
          <Route path="/catnew" component = { CatNew } />
          <Route path="/catedit" component = { CatEdit } />
          <Route component = { NotFound } />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App
