/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect, Fragment } from 'react'
import './profile_style.scss'
import Loading from '../../components/loading-1.0.0/loading'
import withUnmounted from '@ishawnwang/withunmounted'
import { connect } from 'react-redux'
import ProfileUserInfo from './profile_user_info'
import ProfileSetup from './profile_setup'
import ProfileUserTags from './profile_tags'
import ProfileDescription from './profile_description'
import ProfileCareer from './profile_career'
import ProfileSkills from './profile_skills'
import ProfileNews from './profile_news'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
import ProfileGames from './profileGames/profile_games'
import ProfileStreaming from './profileStreaming/profile_straming'
import 'rodal/lib/rodal.css'

function ProfileUser (props) {
  const hasUnmounted = false
  const [loadProfile, setLoadProfile] = useState('PENDING')
  const [redirect, setRedirect] = useState(false)
  const [view, setView] = useState('experience')

  useEffect(() => {
    if (props && (props.userStatus === 'LOGGED' || props.userStatus === 'PENDING')) {
      userInfo.getOwnUserInfo()
      setLoadProfile('OK')
    }
    if (props && (props.userStatus === 'LOGIN_PROCESS' || props.register === 'PENDING')) {
      userInfo.getUserInfo()
      setLoadProfile('OK')
    }
  }, [loadProfile])

  if (redirect) {
    return <Redirect to='/' />
  }

  if (loadProfile === 'OK' && props && props.userProfile && props.userProfile.isWizardFinished === false) {
    return <Redirect to='/inital-step' />
  }

  const changeView = (name) => {
    setView(name)
  }

  return (
    <div>
      {(loadProfile === 'PENDING' || !props || props.userProfile === undefined) && <Loading />}
      {loadProfile === 'OK' && props && props.userProfile !== undefined && (
        <>
          <div>
            <div className='py-4'>
              <Helmet>{props && props.userProfile && <title>{props.userProfile.username}</title>}</Helmet>
              <div className='fakeLoader' />
              <div className='container'>
                <ul className='sub-navigation-view'>
                  <li>
                    <a className={view === 'profile' ? 'active' : ''} onClick={() => changeView('profile')}>Perfil</a>
                  </li>
                  <li>
                    <a className={view === 'experience' ? 'active' : ''} onClick={() => changeView('experience')}>Experiencia</a>
                  </li>
                  <li>
                    <a className={view === 'streaming' ? 'active' : ''} onClick={() => changeView('streaming')}>Straming</a>
                  </li>
                </ul>
                {view === 'streaming' &&
                  <ProfileStreaming />}
                {view === 'experience' &&
                  <ProfileGames />}
                {view === 'profile' &&
                  <div className='row'>
                    <aside className='col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12 profile-view'>
                      <ProfileUserInfo player={props.userProfile} />
                      <ProfileSetup player={props.userProfile} />
                    </aside>
                    <main className='col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12 '>
                      <ProfileDescription player={props.userProfile} />
                      <ProfileCareer player={props.userProfile} />
                    </main>
                    <aside className='col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12'>
                      <ProfileSkills player={props.userProfile} />
                      <ProfileNews player={props.userProfile} />
                      <ProfileUserTags player={props.userProfile} />
                    </aside>
                  </div>}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
  userToken: state.userToken,
  userStatus: state.userStatus
})

export default connect(mapStateToProps)(withUnmounted(ProfileUser))
