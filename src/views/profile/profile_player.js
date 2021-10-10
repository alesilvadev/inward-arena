import React, { useState, useEffect } from 'react'
import Loading from '../../components/loading-1.0.0/loading'
import './profile_style.scss'
import { connect } from 'react-redux'
import ProfilePlayerInfo from './profile_player_info'
import ProfileSetup from './profile_setup'
import ProfileTags from './profile_tags'
import ProfileDescription from './profile_description'
import ProfileCareer from './profile_career'
import ProfileSkills from './profile_skills'
import ProfilePlayerPublic from './profile_player_public'
import ProfilePlayerNotFound from './profile_player_not_found'
import ProfileNews from './profile_news'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
import 'rodal/lib/rodal.css'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'

function playerProfile (props) {
  const [loadProfile, setLoadProfile] = useState('PENDING')
  const [player, setPlayer] = useState({})
  const [id, setId] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [logged, setLogged] = useState('PENDING')

  useEffect(() => {
    getPlayData()
  }, [])

  const getPlayData = async () => {
    const game = props.match.params
    let id = null
    if (game.id) {
      id = game.id
    }
    if (props.userProfile !== undefined && id === props.userProfile.username) {
      setRedirect(true)
    } else {
      const info = await userInfo.getUserInfoByName(id)
      console.log(JSON.stringify(info))
      setId(id)
      setPlayer(info.data)
      setLoadProfile('OK')
      setLogged(info.logged)
    }
  }

  if (redirect) {
    return <Redirect to='/' />
  }
  return (
    <div>
      {loadProfile === 'PENDING' && <Loading />}
      {loadProfile === 'OK' && player && logged && (
        <div>
          <div className='py-4'>
            <Helmet>
              <title>{player.username}</title>
            </Helmet>
            <div className='fakeLoader' />
            <div className='container'>
              <div className='row'>
                <aside className='col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12 profile-view'>
                  <ProfilePlayerInfo player={player} user={props.userProfile} />
                  <ProfileSetup player={player} />
                </aside>
                <main className='col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12 '>
                  <ProfileDescription player={player} />
                  <ProfileCareer player={player} />
                </main>
                <aside className='col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12'>
                  <ProfileSkills player={player} />
                  <ProfileNews />
                  <ProfileTags player={player} />

                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
      {loadProfile === 'OK' && player && logged === false &&
        <ProfilePlayerPublic player={player} />}

      {loadProfile === 'OK' && player == null &&
        <>
          <ProfilePlayerNotFound player={id} />
        </>}
    </div>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile
})

export default connect(mapStateToProps)(playerProfile)
