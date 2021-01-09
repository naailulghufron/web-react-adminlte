import React, { Component } from 'react'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import Sidebar from './components/layouts/Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
    )
  }
}
