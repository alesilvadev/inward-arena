import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import './navbarMobile_style.scss'
import userVerification from '../../modules/authentication-1.0.0/auth'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'
import { connect } from 'react-redux'
import Notification from '../notification-1.0.0/notification'
import { Link } from 'react-router-dom'

function NavbarMobile (props) {
  const [isHide, setIsHide] = useState(false)

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop
    top !== 0 ? setIsHide(true)
      : setIsHide(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const logOut = () => {
    setIsHide()
    userVerification.logOut()
  }

  const setUserStatus = (event) => {
    if (event.target.value) {
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

  return (
    <>
      <div>
        <nav className={'navbar fixed-top navbar-light navbar-mobile-top ' + (isHide === true ? 'navbar-top-hide' : '')}>
          <nav className='navbar navbar-expand navbar-dark osahan-nav-top p-0'>
            <div className='container'>
              <Link className='navbar-brand mr-2' to='/'>
                <img src={require('./../../assets/brand_icon.png')} alt='' className='navbar-icon' />
              </Link>
              <ul className='navbar-nav ml-auto d-flex align-items-center'>

                <li>
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
                        <option value='' defaultValue> Nuevo</option>}
                      <option value='online'>
                     Online
                      </option>
                      <option value='playing'>Jugando</option>
                      <option value='afk'>AFK</option>
                      <option value='offline'> Offline</option>
                    </select>
                  </div>
                </li>
                <li className='nav-item dropdown no-arrow mx-1 osahan-list-dropdown notification-mobile'>
                  <Notification />
                </li>
                <li className='nav-item dropdown no-arrow ml-1 osahan-profile-dropdown drop-down-settings'>
                  <a className='nav-link dropdown-toggle pr-0 drop-down-profile' href='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                    <FontAwesomeIcon icon={faCog} className='icons fa-lg' />
                  </a>
                  <div className='dropdown-menu dropdown-menu-right shadow-sm dropdown-navbar'>
                    <Link className='dropdown-item' to='/settings'><FontAwesomeIcon icon={faCog} className='icons' /> Gestión</Link>
                    <a className='dropdown-item' onClick={() => logOut()}><FontAwesomeIcon icon={faSignOutAlt} className='icons' /> Salir</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </nav>
        <div className='navbar-mobile-bottom'>
          <nav className='navbar fixed-bottom navbar-light'>
            <ul className='nav-mobile-bottom'>
              <li className='nav-item'>
                <Link className='nav-link' to='/home'><FontAwesomeIcon icon={faHome} className='icons fa-lg' /><span className='d-none d-lg-inline' color='white'>Inicio</span></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/players'><FontAwesomeIcon icon={faUsers} className='icons fa-lg' /><span className='d-none d-lg-inline' disabled>Equipos</span></Link>
              </li>
              <li className='nav-item link-profile'>
                <Link className='box-image-rounded-small' to='/profile'>
                  {props.userProfile.profileImgUrl != null && props.userProfile.profileImgUrl !== '' &&
                    <img src={props.userProfile.profileImgUrl} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                  {props.userProfile.profileImgUrl == null &&
                    <img src={require('./assets/userDefault.png')} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  userToken: state.userToken,
  userStatus: state.userStatus
})

export default connect(mapStateToProps)(NavbarMobile)
