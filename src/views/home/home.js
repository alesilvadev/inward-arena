import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socialModule from '../../modules/social-1.0.0/social'
import Loading from '../../components/loading-1.0.0/loading'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import streaming from '../../modules/streaming/streaming'

import './home_style.scss'

function Home (props) {
  const [suggestions, setSuggestions] = useState(null)
  const [userSearch, setUserSearch] = useState('')
  const [filteredPlayers, setFilteredPlayers] = useState(null)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    async function getSuggestions () {
      streaming.getTwitchByUsername()
      if (suggestions == null) {
        const response = await socialModule.getSuggestions()
        setSuggestions(response)
        setFilteredPlayers(response)
      }
    }
    getSuggestions()
  }, [update])

  const handleInput = (event) => {
    const search = event.target.value
    setUserSearch(search)
    const players = suggestions.filter(player => {
      if (player.username) {
        return player.username.toLowerCase().indexOf(search.toLowerCase()) !== -1 || player.username.toLowerCase().indexOf(search.toLowerCase()) !== -1
      } else {
        return player
      }
    })
    setFilteredPlayers(players)
  }

  const followUser = (action, index, id) => {
    const suggestionsChanged = suggestions
    if (action === 'follow') {
      socialModule.followUser(id)
      if (suggestionsChanged[index].hasPrivateProfile) {
        suggestionsChanged[index].relationStatus = 'Pendig'
        setSuggestions(suggestionsChanged)
      } else {
        suggestionsChanged[index].relationStatus = 'Following'
        setSuggestions(suggestionsChanged)
      }
    } else {
      suggestionsChanged[index].relationStatus = 'Unfollow'
      socialModule.unFollowUser(id)
    }
    setUpdate(!update)
  }

  if (!props.userProfile) {
    return <Loading />
  }
  return (
    <div className='py-4' id='homeSocial'>
      {filteredPlayers === null &&
        <Loading />}
      {filteredPlayers && filteredPlayers.length === 0 &&
        <div className='center-items-absolute'>
          <FontAwesomeIcon icon={faSearch} size='4x' />
          <p>Al parecer no hemos encontrado ningun jugador</p>
        </div>}
      {filteredPlayers && filteredPlayers.length > 0 &&
        <div className='container'>
          <div className='col col-xs-12'>
            <div className='input-holder clearfix search-social-input'>
              <input type='search' className='search-input' placeholder=' Buscar jugador...' value={userSearch} name='s' title='Buscar jugador:' onChange={handleInput} />
            </div>
          </div>
          <div className='row'>
            {filteredPlayers.map((item, index) => (
              <>
                <div className='col col-xl-3'>
                  <div className='box shadow-sm box-panel-border rounded box-panel mb-3 gradient-border'>
                    <div className='edgtf-team-inner'>
                      <div className='box-image-rounded'>
                        {item.profileImgUrl != null && item.profileImgUrl !== '' &&
                          <img src={item.profileImgUrl} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                        {item.profileImgUrl == null &&
                          <img src={require('./assets/userDefault.png')} className='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />}
                      </div>
                      <div className='edgtf-team-info'>
                        {item.username &&
                          <Link to={'/' + item.username}>
                            <h4 itemProp='name' className='edgtf-team-name entry-title'>{item.username}</h4>
                            <h6>{item.country}</h6>
                          </Link>}

                        {(item.username == null || item.username === '') &&
                          <h4 itemProp='name' className='edgtf-team-name entry-title'>Desconocido</h4>}
                        {item.relationStatus === 'Following' &&
                          <a className='font-weight-bold d-block follow-bottom-card button-following' onClick={() => followUser('unfollow', index, item.id)}>Siguiendo</a>}

                        {item.relationStatus === 'Pending' &&
                          <a className='font-weight-bold  d-block follow-bottom-card button-following' onClick={() => followUser('unfollow', index, item.id)}>Pendiente</a>}

                        {(item.relationStatus === 'Unknown' || item.relationStatus === 'Unfollow') &&
                          <a className='font-weight-bold d-block follow-bottom-card button-follow' onClick={() => followUser('follow', index, item.id)}>Seguir</a>}
                      </div>

                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>}
    </div>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile
})

export default connect(mapStateToProps)(Home)
