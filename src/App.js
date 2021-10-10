import React, { Component } from 'react'
import './App.scss'
import Navbar from './components/navbar-1.0.0/navbar'
import NavbarMobile from './components/navbarMobile-1.0.0/navbarMobile'
import Feedback from './components/sendFeedback-1.0.0/sendFeedback'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './routes'

// Redux

class App extends Component {
  render () {
    const { children } = this.props
    return (
      <Router basename='/'>
        <div className='App'>
          {this.props.userProfile && this.props.userStatus === 'LOGGED' &&
            <>
              <Feedback />
              <div className='d-none d-lg-block d-xl-none d-xl-block'>
                <Navbar />
              </div>
              <div className='d-block d-sm-none d-sm-block d-md-none d-md-block d-lg-none'>
                <NavbarMobile />
              </div>
            </>}
          {children}
          <Routes />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  userStatus: state.userStatus,
  userProfile: state.userProfile
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
