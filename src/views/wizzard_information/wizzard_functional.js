import React, { useState } from 'react'
import './wizzard_style.scss'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect } from 'react-router'

function WizzardFunctional () {
  const [stepOne, setStepOne] = useState({ completed: false, className: '' })
  const [stepTwo, setStepTwo] = useState({ completed: false, className: '' })
  const [stepThree, setStepThree] = useState({ completed: false, className: '' })
  const [stepFour, setStepFour] = useState({ completed: false, className: '' })
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [preferences, setPreferences] = useState([])
  const [tag, setTag] = useState('')
  const [redirect, setRedirect] = useState(false)

  const selectCountry = (val) => {
    setCountry(val)
  }

  const selectRegion = (val) => {
    setRegion(val)
  }

  const fillStepOne = (event) => {
    event.preventDefault()
    const country = document.getElementById('wizCountry').value
    const city = document.getElementById('wizCity').value
    const description = document.getElementById('wizDescription').value
    const gender = document.getElementById('wizGender').value

    const userChange = {}
    if (country != null && country !== '') userChange.country = country
    if (city != null && city !== '' && city !== '') userChange.city = city
    if (description != null && description !== '') userChange.description = description
    if (gender != null && gender !== '') userChange.gender = gender
    if (Object.entries(userChange).length >= 1) {
      userChange.isWizardFinished = true
      userInfo.updateUserInfo(userChange)
    }
    setStepOne({ completed: true, className: 'active' })
    setStepTwo({ completed: false, className: 'active' })
  }

  const fillStepTwo = async (event) => {
    const keyboard = document.getElementById('wizKeyboardType').value + ' ' + document.getElementById('wizKeyboardModel').value
    const mouse = document.getElementById('wizMouseType').value + ' ' + document.getElementById('wizMouseModel').value
    const pc = document.getElementById('wizPc').value
    const userChange = {}
    if (keyboard != null && keyboard !== '') userChange.keyboard = keyboard
    if (mouse != null && mouse !== '' && mouse !== '') userChange.mouse = mouse
    if (pc != null && pc !== '') userChange.pc = pc
    if (Object.entries(userChange).length >= 1) {
      userInfo.updateUserSetup(userChange)
    }
    setStepTwo({ className: 'active', completed: true })
    setStepThree({ className: 'active', completed: false })
  }

  const fillStepThree = (event) => {
    event.preventDefault()
    userInfo.updateUserTags(preferences)
    setRedirect(true)
    setStepThree({ completed: true, className: 'active' })
    setStepFour({ completed: false, className: 'active' })
  }

  const resetStep = () => {
    if (stepFour.className === 'active') {
      setStepThree({ completed: false, className: 'active' })
      setStepFour({ completed: false, className: '' })
    } else if (stepThree.className === 'active') {
      setStepTwo({ completed: false, className: 'active' })
      setStepThree({ completed: false, className: '' })
    } else if (stepTwo.className === 'active') {
      setStepOne({ completed: false, className: '' })
      setStepTwo({ completed: false, className: '' })
    }
  }

  const addPreference = () => {
    const preference = document.getElementById('preference').value
    if (preferences.find(item => item === preference)) {
      setPreferences(...preferences, preference)
    }
  }

  const deletePreference = (pre) => {
    setPreferences(preferences.filter(item => item !== pre))
  }

  const skipWizzard = () => {
    setRedirect(true)
  }

  const handleChange = (event) => {
    setTag(event.target.value)
  }

  const HandleEnterPreference = (e) => {
    if (e.key && e.key === 'Enter') {
      e.preventDefault()
      const preference = document.getElementById('preference').value
      if (!preferences.find(item => item === preference)) {
        setPreferences(...preference, {
          preference
        })
        setTag('')
      }
    }
  }

  if (redirect === true) {
    return <Redirect to='/profile' />
  }

  return (
    <>
      <div className='wizzard'>
        <div className='container'>
          <ul className='progressbar'>
            <li className={stepOne.className}>Perfil</li>
            <li className={stepTwo.className}>Setup</li>
            <li className={stepThree.className}>Preferencias</li>
          </ul>
          {!stepOne.completed && (
            <div className='wizzard-box col col-sm-8 offset-sm-2'>
              <div className='col col-sm-12 box-panel-border-bottom'>
                <h5 className='font-weight-bold text-highlighted mb-1 mt-4'>Información General</h5>
                <p className='mb-0 '>Recuerda completar la mayor cantidad de datos para poder generar mejores busquedas para ti.</p>
              </div>
              <form name='loginForm' className='loginForm' onSubmit={fillStepOne.bind(this)}>
                <div className='form-group'>
                  <CountryDropdown
                    value={country}
                    onChange={val => selectCountry(val)}
                    className='form-control select-country-form'
                    defaultOptionLabel='Seleccionar País...'
                    required
                    id='wizCountry'
                  />
                  <RegionDropdown country={country} value={region} onChange={val => selectRegion(val)} className='form-control' id='wizCity' required />
                </div>
                <div className='input-group mb-3'>
                  <textarea className='form-control' aria-label='descripcion' id='wizDescription' placeholder='Describete a ti mismo como jugador...' required />
                </div>
                <select id='wizGender' className='form-control' required>
                  <option selected>Seleccionar sexo...</option>
                  <option value='Male'>Masculino</option>
                  <option value='Female'>Femenino</option>
                  <option value='Other'>Other</option>
                </select>
                <button className='btn btn-container-md btn-block' type='submit'>
                  Siguiente
                </button>
              </form>
            </div>
          )}

          {stepOne.completed && !stepTwo.completed && (
            <div className='wizzard-box col col-sm-8 offset-sm-2'>
              <div className='col col-sm-12 box-panel-border-bottom'>
                <h5 className='font-weight-bold text-highlighted mb-1 mt-4'><a className='link-skip' onClick={skipWizzard.bind(this)}>Omitir</a> Setup</h5>
                <p className='mb-0 '>Recuerda completar la mayor cantidad de datos para poder generar mejores busquedas para ti.</p>
              </div>
              <form name='loginForm' className='loginForm' onSubmit={fillStepTwo.bind(this)}>
                <div className='input-group mb-3'>
                  <select id='wizKeyboardType' className='form-control' required>
                    <option selected>Elegir marca de teclado...</option>
                    <option value='Razer'>Razer</option>
                    <option value='Logitech'>Logitech</option>
                    <option value='Corsair'>Corsair</option>
                    <option value='Cooler Master'>Cooler Master</option>
                    <option value='Cougar'>Cougar</option>
                    <option value='Kolke'>Kolke</option>
                    <option value='Kingston'>Kingston</option>
                    <option value='Asus'>Asus</option>
                    <option value='Steel Series'>Steel Series</option>
                    <option>Ozone</option>
                    <option>Otro</option>
                  </select>
                  <input className='form-control' aria-label='descripcion' id='wizKeyboardModel' placeholder='Describete el modelo...' required />
                </div>
                <div className='input-group mb-3'>
                  <select id='wizMouseType' className='form-control' required>
                    <option selected>Elegir marca de mouse...</option>
                    <option>Razer</option>
                    <option>Logitech</option>
                    <option>Corsair</option>
                    <option>Cooler Master</option>
                    <option>Cougar</option>
                    <option>Kolke</option>
                    <option>Kingston</option>
                    <option>Asus</option>
                    <option>Steel Series</option>
                    <option>Ozone</option>
                    <option>Otro</option>
                  </select>
                  <input className='form-control' aria-label='descripcion' id='wizMouseModel' placeholder='Describete el modelo...' required />
                </div>
                <div className='input-group mb-3'>
                  <textarea className='form-control' aria-label='descripcion' id='wizPc' placeholder='Describe tu pc...' required />
                </div>
                <div className='col col-sm-12'>
                  <button className='btn col col-sm-3' onClick={() => resetStep()} type='button'>
                    Anterior
                  </button>
                  <button className='btn col col-sm-3 offset-sm-4' type='submit'>
                    Siguiente
                  </button>
                </div>
              </form>
            </div>
          )}

          {stepOne.completed && stepTwo.completed && !stepThree.completed && (
            <div>
              <div className='wizzard-box col col-sm-8 offset-sm-2'>
                <div className='col col-sm-12 box-panel-border-bottom'>
                  <h5 className='font-weight-bold text-highlighted mb-1 mt-4'><a className='link-skip' onClick={skipWizzard.bind(this)}>Omitir</a> Preferencias</h5>
                  <p className='mb-0 '>Selecciona tus preferencias para poder encontrar contenido exclusivo para ti</p>
                </div>
                <form name='loginForm' className='loginForm'>
                  <div className='input-group mb-3'>
                    <input type='text' id='preference' placeholder="escribe tu preferencias 'RPG'..." className='form-control' value={tag} onChange={handleChange.bind(this)} onKeyPress={HandleEnterPreference.bind(this)} />
                    <button className='btn btn-in-form' type='button' onClick={addPreference.bind(this)}>
                      Agregar
                    </button>
                  </div>
                  {preferences.map(pre => (
                    <a className='badge preference-delete' key={pre} onClick={() => deletePreference(pre)}>
                      {pre} <FontAwesomeIcon icon={faTimes} size='1x' />
                    </a>
                  ))}
                  <div className='col col-sm-12'>
                    <button className='btn col col-sm-3' onClick={() => resetStep()} type='button'>
                      Anterior
                    </button>
                    <button className='btn col col-sm-3 offset-sm-4' type='button' onClick={fillStepThree.bind(this)}>
                      Finalizar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default WizzardFunctional
