import React, { useState, useEffect } from 'react'
import { ReactComponent as CheckIcon } from './assets/check.svg'
import { ReactComponent as CountryFlag } from './assets/flags/uy.svg'
import { Link } from 'react-router-dom'

function ProfilePlayerPublic (props) {
  const [info, setInfo] = useState({})

  useEffect(() => {
    setInfo(props.player)
  }, [])

  return (
    <div id='publicProfile'>
      <div className='container'>
        <div className='row'>
          <div className='center-items-absolute' id='box'>
            <div className='py-4 px-3 box-panel-border-bottom'>
              <div className='box-image-rounded'>
                {info.profileImgUrl != null && info.profileImgUrl !== '' &&
                  <img src={info.profileImgUrl} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                {info.profileImgUrl == null &&
                  <img src={require('./assets/userDefault.png')} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
              </div>
              <h5 className='font-weight-bold text-highlighted mb-1 mt-4'>
                {info.username}
                {info.isVerified && <CheckIcon />}
              </h5>

              <p className='mb-0 '>
                {' '}
                <CountryFlag className='icon-country-flags' /> {info.country}{' '}
              </p>
            </div>
            <div className='d-flex'>
              <div className='col-6 box-panel-border-right p-3 box-data'>
                <h6 className='font-weight-bold text-highlighted mb-1'>{info.social != null ? info.social.followersCount : '0'}</h6>
                <p className='mb-0 box-text-subtitule small'>Seguidores</p>
              </div>
              <div className='col-6 p-3 box-data'>
                <h6 className='font-weight-bold text-highlighted mb-1'>{info.social != null ? info.social.followingCount : '0'}</h6>
                <p className='mb-0 box-text-subtitule small'>Seguidos</p>
              </div>
            </div>
            <p>
              {info.description}
            </p>
            <Link className='font-weight-bold p-3 d-block button-bottom-card' to='/'>Registrarse  </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePlayerPublic
