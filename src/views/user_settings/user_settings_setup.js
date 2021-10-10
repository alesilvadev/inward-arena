import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import userInfo from '../../modules/userInfo-1.0.0/userInfo'

function UserSettingsSetup (props) {
  const [buttonClass, setButtonClass] = useState('')
  const [info, setInfo] = useState('')

  useEffect(() => {
    if (props && props.userProfile) {
      setInfo(props.userProfile)
    }
  }, [props.userProfile])

  const updateUserSetup = () => {
    setButtonClass('loading')
    const keyboard = document.getElementById('wizKeyboardType').value + ' ' + document.getElementById('wizKeyboardModel').value
    const mouse = document.getElementById('wizMouseType').value + ' ' + document.getElementById('wizMouseModel').value
    const pc = document.getElementById('wizPc').value

    console.log(keyboard, mouse, pc)

    // userInfo.updateUserSetup(info.setup).then(
    //   setTimeout(() => {
    //     setButtonClass('success')
    //   }, 2000)
    // )
  }

  const onValueChange = (field) => {
    setInfo({
      ...info,
      [field]: document.getElementById(field).value

    })
  }

  return (
    <div id='userSettingsSetup'>
      <div className='rounded user-settings-general mb-3'>
        <div className='box-title border-bottom p-3'>
          <h6 className='m-0'>Setup Gamer</h6>
          <p className='mb-0 mt-0 small'>Los miembros deben saber cuales son tus elementos para lograr un juego perfecto
          </p>
        </div>
        <div className='box-body p-3'>
          <form className='js-validate' noValidate='noValidate' onSubmit={(event) => { event.preventDefault(); updateUserSetup() }}>
            <div className='input-group mb-3'>
              <select
                id='keyboardType' className='form-control'
              >
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
              <input className='form-control' aria-label='descripcion' id='keyboardModel' placeholder='Describete el modelo...' />
            </div>
            <div className='input-group mb-3'>
              <select id='mouseType' className='form-control'>
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
              <input className='form-control' aria-label='descripcion' id='mouseModel' placeholder='Describete el modelo...' />
            </div>
            <div className='input-group mb-3'>
              <textarea className='form-control' aria-label='descripcion' id='pc' placeholder='Describe tu pc...' value={info.setup && info.setup.pc != null ? info.setup.pc : ''} onChange={() => onValueChange('pc')} />
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
)(UserSettingsSetup)
