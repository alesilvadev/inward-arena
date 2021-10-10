import React, { useState } from 'react'
import { connect } from 'react-redux'
// import userInfo from '../../modules/userInfo-1.0.0/userInfo'
import { faSync, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import lol from '../../modules/games/lol'

function UserSettingsSync (props) {
  const [buttonClass, setButtonClass] = useState('none')
  const [error, setError] = useState('')

  const syncLol = async () => {
    setButtonClass('pending')
    const region = document.getElementById('lolRegion').value
    const username = document.getElementById('lolUsername').value
    await lol.syncLol(region, username).then((response) => {
      console.log(response)
      setTimeout(() => {
        if (response === undefined || response === 'error') {
          setButtonClass('error')
          setError('Ha ocurrido un error mientras buscabamos tu usuario, por favor intentalo mas tarde')
        } else {
          setButtonClass('success')
        }
      }, 2000)
    })
  }

  // const [buttonClass, setButttonClass] = useState('')
  // cosnt[info, setInfo] = useState({})

  // useEffect(() => {
  //   if (props && props.userProfile) {
  //     setInfo(props.userProfile)
  //   }
  // }, [props.userProfile])

  return (
    <div id='userSettingsSync'>

      {props.view === 'lol' &&
        <>
          <div className='rounded user-settings-general mb-3'>
            <div className='box-title border-bottom p-3'>
              <h6 className='m-0'>League of Legends</h6>
              <img src={require('./assets/lol.jpg')} className='img-fluid' />
              <p className='mb-0 mt-0 small'>Sincroniza tu nombre de usuario de League of Legends para poder empezar a generar tus estadisticas y compartir los resultados con tus seguidores.
              </p>
            </div>
            <p className='error-text'>{error}</p>
            <div className='wizzard-box col col-sm-12'>
              <div className='box-body p-3'>
                <form className='js-validate' noValidate='noValidate'>
                  <div className='input-group mb-3 input-add-preference'>
                    <select className='custom-select' id='lolRegion' placeholder='Ingresa tu región'>
                      <option value=''>Seleccionar región</option>
                      <option value='BR1' defaultValue=''>Brazil</option>
                      <option value='EUN1'>Europe Nordic & East</option>
                      <option value='EUW1'>Europe West</option>
                      <option value='LA1'>Latin America North</option>
                      <option value='LA2'>Latin America South</option>
                      <option value='NA1'>North America</option>
                      <option value='OC1'>Oceania</option>
                      <option value='RU'>Russia</option>
                      <option value='TR1'>Turkey</option>
                      <option value='JP1'>Japan</option>

                    </select>
                    <input type='text' id='lolUsername' placeholder='ingresa tu nombre de usuario público...' className='form-control' />
                    <button className={buttonClass === 'error' ? 'btn btn-in-form btn-error' : 'btn btn-in-form'} type='button' onClick={() => syncLol()}>
                      {buttonClass === 'none' &&
                        <FontAwesomeIcon icon={faSync} size='1x' />}
                      {buttonClass === 'pending' &&
                        <FontAwesomeIcon icon={faSync} size='1x' className='rotating' />}
                      {buttonClass === 'success' &&
                        <FontAwesomeIcon icon={faCheck} size='1x' className='' />}
                      {buttonClass === 'error' &&
                        <FontAwesomeIcon icon={faExclamation} size='1x' />}
                    </button>
                  </div>
                  <p>* Recuerda, en esta plataforma nunca se te pedirá ninguan contraseña relacionado con tus cuentas en otras plataformas</p>

                </form>
              </div>
            </div>
          </div>
          <div className='mb-3 text-right gohst-box' />
        </>}
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
)(UserSettingsSync)
