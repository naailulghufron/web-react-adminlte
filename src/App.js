import React, { Component } from 'react'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import Sidebar from './components/layouts/Sidebar'
import Widget from './components/Widget'
import Dashboard from './components/Dashboard'
import Shop from './components/Shop'
import ItemDetails from './components/ItemDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Navbar />
          <Sidebar />
          <Route path="/widget" component={Widget} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetails} />
          <Footer />
        </div>

      </Router>
    )
  }
}
