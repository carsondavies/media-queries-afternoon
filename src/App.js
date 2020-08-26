import React, { Component } from 'react'
import './App.css'
import './reset.css'
import Navbar from './components/Navbar'

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }


  render() {
    return (
      <div className='homepage' img={'https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/bg-masthead.jpg'}>
        <Navbar />
        <div className='title-text'>GRAYSCALE</div>
        <div className='description'>A free, responsive, one page Bootstrap theme created by Start Bootsrap</div>
        <button className='get-started'>GET STARTED</button>
      </div>
    )
  }
}