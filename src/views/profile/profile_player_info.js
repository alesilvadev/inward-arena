import React, { useState, useEffect } from 'react'
import { ReactComponent as CheckIcon } from './assets/check.svg'
import { ReactComponent as CountryFlag } from './assets/flags/uy.svg'
import socialModule from '../../modules/social-1.0.0/social'

function ProfilePlayerInfo (props) {
  const [relation, setRelation] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    let relation = 'Seguir'

    if (props.player.social && props.player.social.followers && props.player.social.followers.length > 0) {
      const followers = props.player.social.followers

      if (props.user && props.user.username !== null && props.user.username !== '') {
        const username = props.user.username
        if (followers.includes(followers.find(foll => foll.username === username))) {
          relation = 'Siguiendo'
        }
      }
    }

    if (props.player.social && props.player.social.pending && props.player.social.pending.length > 0) {
      const pendings = props.player.social.pending

      if (props.user && props.user.username !== null && props.user.username !== '') {
        const username = props.user.username
        if (pendings.includes(pendings.find(foll => foll.username === username))) {
          relation = 'Pendiente'
        }
      }
    }
    setInfo(props.player)
    setRelation(relation)
  }, [])

  const followUser = () => {
    if (relation === 'Seguir') {
      socialModule.followUser(info.id)
      if (info.hasPrivateProfile) {
        setRelation('Pendiente')
      } else {
        setRelation('Siguiendo')
      }
    } else {
      socialModule.unFollowUser(info.id)
      setRelation('Seguir')
    }
  }

  return (
    <div className='box mb-3 shadow-sm box-panel-border rounded box-panel profile-box text-center  gradient-border' id='profilePlayer'>
      <div className='py-4 px-3 box-panel-border-bottom'>
        <div className='box-image-rounded'>
          {info.profileImgUrl != null && info.profileImgUrl !== '' &&
            <img src={info.profileImgUrl} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
          {info.profileImgUrl == null &&
            <img src={require('./assets/userDefault.png')} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
          <div className='blobs-container'>
            {info.status && info.status.value === 'online' &&
              <div className='blob online' />}
            {info.status && info.status.value === 'playing' &&
              <div className='blob playing' />}
            {info.status && info.status.value === 'afk' &&
              <div className='blob afk' />}
          </div>
        </div>
        {info.showAlias === false &&
          <h5 className='font-weight-bold text-highlighted mb-1 mt-4'>
            {info.name}
            {info.isVerified && <CheckIcon />}
          </h5>}

        {info.showAlias === true &&
          <h5 className='font-weight-bold text-highlighted mb-1 mt-4'>
            {info.username}
            {info.isVerified && <CheckIcon />}
          </h5>}

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
      <div className='overflow-hidden box-panel-border-top box-ranking'>
        <div className='item-hints'>
          <div className='hint' data-position='4'>
            <span className='font-weight-bold p-3 d-block text-gold text-ranking'> Ranking: N/A </span>
          </div>
        </div>
      </div>
      <a className='font-weight-bold p-3 d-block button-bottom-card' onClick={() => followUser()}>{relation} </a>
    </div>
  )
}

export default ProfilePlayerInfo
