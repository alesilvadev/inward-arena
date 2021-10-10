import React, { useState } from 'react'
import { connect } from 'react-redux'
import UserSettingsGeneral from './user_settings_general'
import './user_settings_style.scss'
import UserSettingsSetup from './user_settings_setup'
import UserSettingsPreference from './user_settings_preference.js'
import UserSettingsRealtions from './user_settings_relations'
import { Helmet } from 'react-helmet'
import UserSettingsSync from './user_settings_sync'
import Loading from '../../components/loading-1.0.0/loading'

function UserSettings (props) {
  const [active, setActive] = useState('general')

  if (!props.userProfile) {
    return <Loading />
  }

  const changeSettingsView = (viewName) => {
    if (active !== viewName) setActive(viewName)
  }

  return (
    <div id='UserSettings'>
      <Helmet>
        <title>Ajustes</title>
      </Helmet>
      <div className='py-4 '>
        <div className='fakeLoader' />
        <div className='container'>
          <div className='row user-settings-sidebar'>
            <aside className='col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12 profile-view'>
              <div id='accordion'>
                <div className='card'>
                  <div className='card-header' id='headingOne'>
                    <h5 className='mb-0'>
                      <button className='btn btn-link' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
        Ajustes
                      </button>
                    </h5>
                  </div>

                  <div id='collapseOne' className='collapse show' aria-labelledby='headingOne' data-parent='#accordion'>
                    <div className='card-body'>
                      <ul className='nav flex-column'>
                        <li className='nav-item'>
                          <a className={active === 'general' ? 'nav-link sub-active' : 'nav-link'} onClick={() => changeSettingsView('general')}>Información General</a>
                        </li>
                        <li className='nav-item'>
                          <a className={active === 'setup' ? 'nav-link sub-active' : 'nav-link'} onClick={() => changeSettingsView('setup')}>Setup</a>
                        </li>
                        <li className='nav-item'>
                          <a className={active === 'preferences' ? 'nav-link sub-active' : 'nav-link'} onClick={() => changeSettingsView('preferences')}>Preferencias</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-header' id='headingTwo'>
                    <h5 className='mb-0'>
                      <button className='btn btn-link collapsed' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
        Social
                      </button>
                    </h5>
                  </div>
                  <div id='collapseTwo' className='collapse' aria-labelledby='headingTwo' data-parent='#accordion'>
                    <div className='card-body'>
                      <ul className='nav flex-column'>
                        <li className='nav-item'>
                          <a className={active === 'relations' ? 'nav-link sub-active' : 'nav-link'} onClick={() => changeSettingsView('relations')}>Solicitudes</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-header' id='headingTwo'>
                    <h5 className='mb-0'>
                      <button className='btn btn-link collapsed' data-toggle='collapse' data-target='#collapseThree' aria-expanded='false' aria-controls='collapseTwo'>
        Sincronización
                      </button>
                    </h5>
                  </div>
                  <div id='collapseThree' className='collapse' aria-labelledby='headingTwo' data-parent='#accordion'>
                    <div className='card-body'>
                      <ul className='nav flex-column'>
                        <li className='nav-item'>
                          <a className={active === 'lol' ? 'nav-link sub-active' : 'nav-link'} onClick={() => changeSettingsView('lol')}>League of Legends</a>
                        </li>
                        <li className='nav-item'>
                          <a className={active === 'twitch' ? 'nav-link sub-active' : 'nav-link'} onClick={() => changeSettingsView('twitch')}>Twitch</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <main className='col col-xl-8 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12 '>
              {active === 'general' &&
                <UserSettingsGeneral />}

              {active === 'setup' &&
                <UserSettingsSetup />}

              {active === 'preferences' &&
                <UserSettingsPreference />}

              {active === 'relations' &&
                <UserSettingsRealtions />}

              {active === 'lol' &&
                <UserSettingsSync view={active} />}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile
})

export default connect(mapStateToProps)(UserSettings)
