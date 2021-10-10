import React, { useState } from 'react'
import Rodal from 'rodal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import SendFeedbackModule from '../../modules/feedback-1.0.0/feedback'
import './sendFeeback_style.scss'

export default function SendFeedback () {
  const [showFeedback, setshowFeedback] = useState(false)
  const [buttonClass, setButtonClass] = useState('')

  const showshowFeedbackPopUp = () => {
    setshowFeedback(!showFeedback)
  }

  const sendMessage = (event) => {
    const message = document.getElementById('message').value
    SendFeedbackModule.sendFeedback(message)
    setTimeout(() => {
      setButtonClass('success')
    }, 2000)
    setButtonClass('loading')
  }

  return (
    <div>
      <div className='feedback-container'>
        <Rodal visible={showFeedback} onClose={() => showshowFeedbackPopUp()} className='edit-rodal '>
          <div className='container' id='modalUpdate'>
            <div className='row modal-edit-profile'>
              <form name='loginForm' className='loginForm' onSubmit={(event) => { event.preventDefault(); sendMessage() }}>
                <FontAwesomeIcon icon={faLightbulb} size='4x' className='icon-light-bulb' />
                <h2>Envianos tu sugerencia</h2>
                <p>Con el fin de mejorar nuestra plataforma te solicitamos enviarnos cualquier idea o sugerencia que tengas para contribuir al crecimiento de la misma y poder formar parte de la comunidad de Inward Arena</p>
                <div className='form-group mb-3'>
                  <textarea type='text' className='form-control' placeholder='Cuentanos tu idea o sugerencia para poder mejorar la plataforma :D ...' aria-label='nombre' aria-describedby='basic-addon1' id='message' rows='4' required />
                </div>
                <button className={'new-animated btn btn-rounded-v2 blue small with-small-radius ' + buttonClass} type='submit'>Enviar Sugerencia</button>
              </form>
            </div>
          </div>
        </Rodal>
        <button className='btn btn-open-feed' onClick={() => showshowFeedbackPopUp()}>
          <FontAwesomeIcon icon={faPaperPlane} className='icon-edit-box fa-lg' />
          <span>Feedback</span>
        </button>
      </div>
    </div>
  )
}
