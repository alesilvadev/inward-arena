import React from 'react'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProfileCareer (props) {
  console.log('8')
  return (
    <div className='box shadow-sm box-panel-border rounded box-panel mb-3 gradient-border'>
      <div className='box-title box-panel-border-bottom p-3'>
        <h6 className='m-0'><FontAwesomeIcon icon={faTrophy} size='1x' color='#6b54b6' /> Carrera</h6>
      </div>
      <div className='box-body p-3 box-panel-border-bottom career-box'>
        <FontAwesomeIcon icon={faTrophy} className='default-icon' size='4x' color='#281933' />
        <p className='mb-0'>
          Actualmente no tienes ningun logro..., no te preocupes,
          puedes adquirirlos en eventos, torneos y participando de
          equipos.
        </p>
      </div>
    </div>
  )
}

export default ProfileCareer
