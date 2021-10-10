import { Link } from 'react-router-dom'
import './navbar_style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import userVerification from '../../modules/authentication-1.0.0/auth'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'
import Notification from '../notification-1.0.0/notification'
import React, { useState, useEffect } from 'react'

function Navbar (props) {
  const [view, setView] = useState('profile')

  useEffect(() => {
    if (window && window.location) {
      const view = window.location.pathname
      setView(view.substring(1, view.length))
    }
  }, [])

  const setUserStatus = (event) => {
    if (event && event.target && event.target.value) {
      const status = event.target.value
      let data = {}
      switch (status) {
        case 'online': { data = { value: 'online', color: '#5dd446' }; break }
        case 'playing': { data = { value: 'playing', color: '#a58aff' }; break }
        case 'afk': { data = { value: 'afk', color: '#ff7f54' }; break }
        case 'offline': { data = { value: 'offline', color: '#8b908a' }; break }
      }
      userInfo.updateUserStatus(data)
    }
  }

  const changeView = (view) => {
    setView(view)
  }

  const logout = async () => {
    await userVerification.logOut()
  }

  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark navbar-style osahan-nav-top p-0' id='navbarDesktop'>
        <div className='container'>
          <Link className='navbar-brand mr-2' to='/'>
            <img src={require('./../../assets/brand_icon.png')} alt='' className='navbar-icon' />
          </Link>
          <form className='d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search'>
            <div className='input-group'>
              <input type='text' className='form-control shadow-none border-0' placeholder='buscar jugador,equipo...' aria-label='Search' aria-describedby='basic-addon2' />
              <div className='input-group-append'>
                <button className='btn' type='button'>
                  <FontAwesomeIcon icon={faSearch} className='icons' color='#6b54b6' />
                </button>
              </div>
            </div>
          </form>
          <ul className='navbar-nav ml-auto d-flex align-items-center'>
            <li className='nav-item dropdown no-arrow d-sm-none'>
              <a className='nav-link dropdown-toggle' href='#' id='searchDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <i className='feather-search mr-2' />
              </a>
              <div className='dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in' aria-labelledby='searchDropdown'>
                <form className='form-inline mr-auto w-100 navbar-search'>
                  <div className='input-group'>
                    <input type='text' className='form-control border-0 shadow-none' placeholder='buscar jugador,equipo...' aria-label='Search' aria-describedby='basic-addon2' />
                    <div className='input-group-append'>
                      <button className='btn' type='button'>
                        <i className='feather-search' />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li className={view === 'home' ? 'link-active' : '' + 'nav-item'} onClick={() => changeView('home')}>
              <Link className='nav-link' to='/home'><span className='d-none d-lg-inline'>Inicio</span></Link>
            </li>
            <li className={view === 'players' ? 'link-active' : '' + 'nav-item'} onClick={() => changeView('players')}>
              <Link className='nav-link' to='/players'><span className='d-none d-lg-inline'>Jugadores</span></Link>
            </li>
            <li className='nav-item dropdown no-arrow mx-1 osahan-list-dropdown' id='notificationBox'>
              <Notification />
            </li>
            <li />
            <li>
              {props.userProfile &&
                <div className='input-group mb-3 user-status' id='userStatus'>
                  <div className='blobs-container'>
                    {props.userProfile.status && props.userProfile.status.value === 'online' &&
                      <div className='blob online' />}
                    {props.userProfile.status && props.userProfile.status.value === 'playing' &&
                      <div className='blob playing' />}
                    {props.userProfile.status && props.userProfile.status.value === 'afk' &&
                      <div className='blob afk' />}
                  </div>
                  <select id='keyboardType' className='form-control' required style={{ color: props.userProfile.status ? props.userProfile.status.color : '#ffffff' }} value={props.userProfile.status.value} onChange={setUserStatus}>
                    {props.userProfile.status && props.userProfile.status.value === 'new' &&
                      <option value='online' defaultValue> Nuevo</option>}
                    <option value='online'>
                     Online
                    </option>
                    <option value='playing'>Jugando</option>
                    <option value='afk'>AFK</option>
                    <option value='offline'> Offline</option>
                  </select>
                </div>}
            </li>
            <li className='nav-item dropdown no-arrow ml-1 osahan-profile-dropdown drop-down-settings'>
              {props.userProfile &&
                <>
                  <a className='nav-link dropdown-toggle pr-0 drop-down-profile' href='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                    <div className='box-image-rounded-small'>
                      {props.userProfile.profileImgUrl != null && props.userProfile.profileImgUrl !== '' &&
                        <img src={props.userProfile.profileImgUrl} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                      {props.userProfile.profileImgUrl == null &&
                        <img src={require('./assets/userDefault.png')} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                    </div>
                  </a>
                  <div className='dropdown-menu dropdown-menu-right shadow-sm dropdown-navbar'>
                    <Link to='/profile' onClick={() => changeView('profile')}>
                      <div className='p-3 d-flex align-items-center'>
                        <div className='dropdown-list-image mr-3'>
                          <div className='box-image-rounded-small'>
                            {props.userProfile.profileImgUrl != null && props.userProfile.profileImgUrl !== '' &&
                              <img src={props.userProfile.profileImgUrl} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                            {props.userProfile.profileImgUrl == null &&
                              <img src={require('./assets/userDefault.png')} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                          </div>
                          <div className='status-indicator bg-success' />
                        </div>
                        <div className='font-weight-bold'>
                          {props && props.userProfile &&
                            <>
                              <div className='text-truncate'>{props.userProfile.username}</div>
                              <div className='small text-gray-500'>{props.userProfile.country}</div>
                            </>}
                        </div>
                      </div>
                    </Link>
                    <div className='dropdown-submenu'>
                      <Link className='dropdown-item' to='/settings'><FontAwesomeIcon icon={faCog} className='icons' /> Gestión</Link>
                      <a className='dropdown-item' onClick={() => logout()}><FontAwesomeIcon icon={faSignOutAlt} className='icons' /> Salir</a>
                    </div>
                  </div>
                </>}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  userToken: state.userToken,
  userStatus: state.userStatus
})

export default connect(mapStateToProps)(Navbar)
