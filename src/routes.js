import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './views/login/login'
import Profile from './views/profile/profile_user'
import PlayerProfile from './views/profile/profile_player'
import Wizzard from './views/wizzard_information/wizzard'
import UserSettings from './views/user_settings/user_settings'
import Game from './views/game/game'
import Feed from './views/feed/feed'
import Home from './views/home/home'
import App from './App'
import Navbar from './components/navbar-1.0.0/navbar'
import NavbarMobile from './components/navbarMobile-1.0.0/navbarMobile'

// Components

const AppRoutes = (state) =>
  <Switch>
    <Route exact path='/' component={state && state.userStatus === 'LOGGED' ? Profile : Login} />
    <Route path='/home' component={Feed} />
    <Route path='/players' component={Home} />
    <Route path='/game/:id' component={Game} />
    <Route path='/profile' component={Profile} />
    <Route path='/inital-step' component={Wizzard} />
    <Route path='/settings' component={UserSettings} />
    <Route path='/:id' component={PlayerProfile} />
    <App>
      <div className='d-none d-lg-block d-xl-none d-xl-block'>
        <Navbar />
      </div>
      <div className='d-block d-sm-none d-sm-block d-md-none d-md-block d-lg-none'>
        <NavbarMobile />
      </div>
    </App>
  </Switch>

const mapStateToProps = state => ({
  userStatus: state.userStatus,
  register: state.register
})

export default connect(mapStateToProps)(AppRoutes)
