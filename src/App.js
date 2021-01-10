import React, { Component } from 'react'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import Sidebar from './components/layouts/Sidebar'
import Widget from './components/Widget'
import Dashboard from './components/Dashboard'
import Shop from './components/Shop'
import ItemDetails from './components/ItemDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'


export default class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Navbar />
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/widget" exact component={Widget} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" exact component={ItemDetails} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>

      </Router>
    )
  }
}
