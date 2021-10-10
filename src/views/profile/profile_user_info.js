import React, { useState, useEffect } from 'react'
import { ReactComponent as CheckIcon } from './assets/check.svg'
import { ReactComponent as CountryFlag } from './assets/flags/uy.svg'
import { faCamera, faCircleNotch, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'
import Rodal from 'rodal'
import WelcomeMessage from '../../components/welcomeMessage-1.0.0/welcomeMessage'
import { Link } from 'react-router-dom'

function ProfileUserInfo (props) {
  const [seeFollowers, setSeeFollowers] = useState(false)
  const [seeFollowing, setSeeFollowing] = useState(false)
  const [uploadImage, setUploadImage] = useState(false)
  const [playerSearch, setPlayerSearch] = useState('')
  const [playerInfo, setPlayerInfo] = useState(props.player)
  const [playersFiltered, setPlayersFiltered] = useState([])

  useEffect(() => {
    console.log('2')
    setPlayerInfo(props.player)
    if (uploadImage === true) {
      setUploadImage(false)
    }
  }, [props.player.profileImgUrl, props.player.social.followersCount, props.player.social.followingCount])

  const uploadProfilePicture = (event) => {
    const fileToLoad = event.target.files[0]
    if (fileToLoad != null) {
      setUploadImage(true)
      // eslint-disable-next-line no-undef
      const fileReader = new FileReader()
      let file = null
      // Onload of file read the file content
      fileReader.onload = function (fileLoadedEvent) {
        file = fileLoadedEvent.target.result
        userInfo.updateUserProfileImage(file)
      }
      // Convert data to base64
      fileReader.readAsDataURL(fileToLoad)
    }
  }

  const showHidePlayersPopUp = (type) => {
    if (type === 'followers') {
      setSeeFollowers(!seeFollowers)
    } else if (type === 'following') {
      setSeeFollowing(!seeFollowing)
    } else {
      setSeeFollowers(false)
      setSeeFollowing(false)
    }
  }

  const onSearchChange = (e) => {
    setPlayerSearch(e.target.value)
  }

  if (seeFollowers && playerInfo && playerInfo.social.followers && playerInfo.social.followers.length > 0) {
    if (playerSearch !== '') {
      setPlayersFiltered(playerInfo.social.followers.filter(follower => {
        return follower.name.toLowerCase().indexOf(playerSearch.toLowerCase()) !== -1 || follower.username.toLowerCase().indexOf(playerSearch.toLowerCase()) !== -1
      }))
    } else {
      setPlayersFiltered(playerInfo.social.followers)
    }
  }

  if (seeFollowing && playerInfo && playerInfo.social.following && playerInfo.social.following.length > 0) {
    if (playerSearch !== '') {
      setPlayersFiltered(playerInfo.social.following.filter(follower => {
        return follower.name.toLowerCase().indexOf(playerSearch.toLowerCase()) !== -1 || follower.username.toLowerCase().indexOf(playerSearch.toLowerCase()) !== -1
      }))
    } else {
      if (playersFiltered.length === 0) {
        setPlayersFiltered(playerInfo.social.following)
      }
    }
  }

  return (
    <>
      <Rodal visible={seeFollowers || seeFollowing} onClose={() => showHidePlayersPopUp('all')} className='edit-rodal'>
        <div className='container' id='modalUpdate'>
          <div className='row modal-edit-profile'>
            {seeFollowers &&
              <h3>Seguidores</h3>}
            {seeFollowing &&
              <h3>Siguiendo</h3>}
            <div>
              <input
                className='input-group input-search'
                type='text' id='filter'
                onChange={() => onSearchChange()}
                placeholder='Buscar jugador...'
              />
            </div>
            <hr />
            {playersFiltered.length > 0 &&
              <div className='form-group mb-3'>
                {playersFiltered.map((follower, index) => (
                  <div className='p-3 d-flex align-items-center osahan-post-header' key={index + follower.username}>
                    <Link to={'/' + follower.username}>
                      <div className='box-image-rounded-small'>
                        {playerInfo.profileImgUrl != null && playerInfo.profileImgUrl !== '' &&
                          <img src={playerInfo.profileImgUrl} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                        {playerInfo.profileImgUrl == null &&
                          <img src={require('./assets/userDefault.png')} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                      </div>
                      <div className='font-weight-bold mr-3'>
                        <div className='text-truncate'>{follower.username}
                        </div>
                        <div className='small'>{follower.name}
                        </div>
                      </div>
                    </Link>
                    <span className='ml-auto mb-auto'>
                      <div className='btn-group'>
                        <button className='btn'>Siguiendo</button>
                      </div>
                      <br />
                    </span>
                  </div>
                ))}
              </div>}
            {playersFiltered.length <= 0 &&
              <div className='center-items-absolute'>
                <FontAwesomeIcon icon={faSearch} size='4x' />
                <p>Al parecer no hemos encontrado ningun jugador</p>
              </div>}
          </div>
        </div>
      </Rodal>
      <WelcomeMessage />
      <div className='box mb-3 shadow-sm box-panel-border rounded box-panel profile-box text-center  gradient-border' id='box'>
        <div className='py-4 px-3 box-panel-border-bottom'>
          <div className='box-image-rounded'>
            {playerInfo.profileImgUrl != null && playerInfo.profileImgUrl !== '' &&
              <img src={playerInfo.profileImgUrl} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
            {playerInfo.profileImgUrl == null &&
              <img src={require('./assets/userDefault.png')} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
            {uploadImage === false &&
              <div className='overlay'>
                <div className='input-file-text-box'>
                  <FontAwesomeIcon icon={faCamera} className='setup-icons' size='2x' />
                  <p>EDITAR</p>
                </div>
                <input type='file' name='fileProfile' accept='image/x-png,image/gif,image/jpeg' id='fileProfile' className='input-file-profile' onChange={(event) => uploadProfilePicture(event)} />
              </div>}
            {uploadImage === true &&
              <div className={uploadImage === true ? 'overlay-loading' : ' '}>
                <div className='input-file-text-box'>
                  <FontAwesomeIcon icon={faCircleNotch} className='loading-svg' size='2x' />
                </div>
              </div>}
          </div>
          <h5 className='font-weight-bold text-highlighted mb-1 mt-4'>
            {playerInfo.username}
            {playerInfo.isVerified && <CheckIcon />}
          </h5>

          <p className='mb-0 '>
            {' '}
            <CountryFlag className='icon-country-flags' /> {playerInfo.country}{' '}
          </p>
        </div>
        <div className='d-flex'>
          <div className='col-6 box-panel-border-right p-3 box-data social-button' onClick={() => showHidePlayersPopUp('followers')}>
            <h6 className='font-weight-bold text-highlighted mb-1'>{playerInfo.social != null ? playerInfo.social.followersCount : '0'}</h6>
            <p className='mb-0 box-text-subtitule small'>Seguidores</p>
          </div>
          <div className='col-6 p-3 box-data social-button' onClick={() => showHidePlayersPopUp('following')}>
            <h6 className='font-weight-bold text-highlighted mb-1'>{playerInfo.social != null ? playerInfo.social.followingCount : '0'}</h6>
            <p className='mb-0 box-text-subtitule small'>Seguidos</p>
          </div>
        </div>
        <div className='overflow-hidden box-panel-border-top'>
          <div className='item-hints'>
            <div className='hint' data-position='4'>
              <span className='font-weight-bold p-3 d-block text-gold'> Ranking: N/A </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileUserInfo
