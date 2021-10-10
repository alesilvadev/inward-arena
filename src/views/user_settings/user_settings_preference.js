import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'

function UserSettingsPreference (props) {
  const [preferences, setPreferences] = useState([])
  const [buttonClass, setButtonClass] = useState([])
  const [tag, setTag] = useState('')

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    if (props && props.preferences && preferences.length > 0) {
      setPreferences(props.preferences)
    }
  }, [])

  const handleUserKeyPress = useCallback(event => {
    const { keyCode } = event
    if (keyCode === 13) {
      setTag()
    }
  }, [])

  const addPreference = () => {
    const preference = document.getElementById('preference').value
    if (preference !== '') {
      setTag('')
      setPreferences([...preferences, preference])
    }
  }

  const deletePreference = (pre) => {
    setPreferences(preferences.filter(item => item !== pre))
  }

  const HandleEnterPreference = (e) => {
    if (e.key && e.key === 'Enter') {
      const preference = document.getElementById('preference').value
      if (!preferences.find(item => item === preference)) {
        setTag('')
        setPreferences([...preferences, preference])
      }
    }
  }

  const handleChange = (e) => {
    const tagValue = e.target.value
    setTag(tagValue)
    console.log('asdasdasd' + e.target.value)
    // setTag(e.currentTarget.value)
  }

  const updateUserTags = (e) => {
    setButtonClass('loading')
    userInfo.updateUserTags(preferences).then(
      setTimeout(() => {
        setButtonClass('success')
      }, 2000)
    )
  }

  return (
    <div id='userSettingsPreference'>
      <div className='rounded user-settings-general mb-3'>
        <div className='box-title border-bottom p-3'>
          <h6 className='m-0'>Preferencias de jugador</h6>
          <p className='mb-0 mt-0 small'>Tus preferencias mejoran tus filtros a la hora de buscar contenido para ti
          </p>
        </div>
        <div className='box-body p-3'>
          <div>
            <div>
              <div className='wizzard-box col col-sm-12'>
                <form name='loginForm' className='loginForm'>
                  <div className='input-group mb-3 input-add-preference'>
                    <input type='text' id='preference' placeholder="escribe tu preferencias 'RPG'..." className='form-control' value={tag} onChange={handleChange} onKeyPress={(event) => { event.preventDefault(); HandleEnterPreference(event) }} />
                    <button className='btn btn-in-form' type='button' onClick={(event) => addPreference()}>
                    Agregar
                    </button>
                  </div>
                  {preferences.map(pre => (
                    <a className='badge preference-delete' key={pre} onClick={(event) => deletePreference(pre)}>
                      {pre} <FontAwesomeIcon icon={faTimes} size='1x' />
                    </a>
                  ))}
                </form>
              </div>
            </div>
          </div>
          <button className={'new-animated btn btn-rounded-v2 blue small with-small-radius btn-with-loading ' + buttonClass} onClick={(event) => { event.preventDefault(); updateUserTags() }}>Guardar cambios</button>
        </div>
      </div>
      <div className='mb-3 text-right gohst-box' />
    </div>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  userToken: state.userToken,
  userStatus: state.userStatus
})

export default connect(
  mapStateToProps
)(UserSettingsPreference)
