import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'

function UserSettingsGeneral (props) {
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [buttonClass, setButtonClass] = useState('')
  const [info, setInfo] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    if (props && props.userProfile) {
      setInfo(props.userProfile)
      if (props.userProfile.country) {
        setCountry(props.userProfile.country)
      }
      if (props.userProfile.city) {
        setRegion(props.userProfile.city)
      }
    }
  }, [props.userProfile])

  const updateUserGeneralInfo = () => {
    setButtonClass('loading')
    setInfo({
      ...info,
      country: country,
      city: region
    })
    userInfo.updateUserInfo(info).then((res) => {
      if (res === 'already_username_used') {
        setTimeout(() => {
          setButtonClass('error')
          setError('El nombre de usario ya existe, por favor elige otro')
        }, 2000)
      } else {
        setTimeout(() => {
          setButtonClass('success')
        }, 2000)
      }
    }
    )
  }

  const selectCountry = (val) => {
    setCountry(val)
  }

  const selectRegion = (val) => {
    setRegion(val)
  }

  const onValueChange = (field) => {
    setInfo({
      ...info,
      [field]: document.getElementById(field).value
    })
  }

  return (
    <div id='userSettingsGeneral'>
      <div className='rounded user-settings-general mb-3'>
        <div className='box-title border-bottom p-3'>
          <h6 className='m-0'>Información General</h6>
          <p className='mb-0 mt-0 small'>Recuerda proporcionar tus datos correctamente, esto te ayudará a generar confianza en la comunidad
          </p>
        </div>
        <div className='box-body p-3'>
          <p className='error-text'>{error}</p>
          <form className='js-validate' noValidate='noValidate' onSubmit={(event) => { event.preventDefault(); updateUserGeneralInfo() }}>
            <div className='row'>
              <div className='col-sm-6 mb-2'>
                <div className='js-form-message'>
                  <label id='nameLabel' className='form-label'>
                        Nombre
                  </label>
                  <div className='form-group'>
                    <input type='text' className='form-control' id='name' name='name' value={info.name != null ? info.name : 'Ingresa tu nombre'} onChange={() => onValueChange('name')} placeholder='Ingresa tu nombre' />
                    <small className='form-text '>Nombre que se mostrará en tu perfil, notificaciones y otros lugares.</small>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 mb-2'>
                <div className='js-form-message'>
                  <label id='aliasLabel' className='form-label'>
                        Alias
                  </label>
                  <div className='form-group'>
                    <input type='text' className='form-control' id='username' name='username' value={info.username != null ? info.username : ''} onChange={() => onValueChange('username')} placeholder='Ingresa tu nombre de usuario' />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 mb-2'>
                <div className='js-form-message'>
                  <label id='phoneNumberLabel' className='form-label'>
                        Pais
                  </label>
                  <CountryDropdown
                    value={country}
                    onChange={(val) => selectCountry(val)}
                    className='form-control select-country-form'
                    defaultOptionLabel='Seleccionar País...'
                    required
                    id='country'
                  />
                </div>
              </div>
              <div className='col-sm-6 mb-2'>
                <div className='js-form-message'>
                  <label id='phoneNumberLabel' className='form-label'>
                        Ciudad
                  </label>
                  <RegionDropdown country={country} value={region} onChange={(val) => selectRegion(val)} className='form-control' id='city' required />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 mb-2'>
                <div className='js-form-message'>
                  <label className='form-label'>
                    ¿Cómo mostarme hacia otros jugadores?
                  </label>
                  <div className='form-group'>
                    <select className='custom-select' id='showAlias' value={info.showAlias === true ? 'Por nombre' : 'Por nombre de usuario'} onChange={() => onValueChange('showAlias')} placeholder='Ingresa tu nombre de usuario'>
                      <option value=''>Seleccionar opción</option>
                      <option value={false} defaultValue=''>Por nombre</option>
                      <option value='alias'>Por alias</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 mb-2'>
                <div className='js-form-message'>
                  <label id='websiteLabel' className='form-label'>
                        Teléfono
                  </label>
                  <div className='form-group'>
                    <input type='text' className='form-control' id='phone' name='phone' value={info.phone != null ? info.phone : ''} onChange={() => onValueChange('phone')} placeholder='Ingresa tu teléfono' />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 mb-2'>
                <div className='js-form-message'>
                  <label id='phoneNumberLabel' className='form-label'>
                        Descripción
                  </label>
                  <div className='form-group'>
                    <textarea className='form-control' id='description' name='description' value={info.description != null ? info.description : ''} onChange={() => onValueChange('description')} rows='14' placeholder='Ingresa una descripción sobre ti' />
                  </div>
                </div>
              </div>
            </div>
            <button className={'new-animated btn btn-rounded-v2 blue small with-small-radius btn-with-loading ' + buttonClass} type='submit'>Guardar cambios</button>

          </form>
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
)(UserSettingsGeneral)
