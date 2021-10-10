import React from 'react'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProfileNews () {
  console.log('11')
  return (
    <div className='box shadow-sm mb-3 box-panel-border rounded box-panel ads-box text-center overflow-hidden gradient-border'>
      <div className='box-with-edit box-panel-border-bottom'>
        <h6 className='font-weight-bold text-highlighted'>
          <FontAwesomeIcon icon={faNewspaper} size='1x' color='#6b54b6' /> Actividades
        </h6>
        <p className='mb-0 text-align-center'>
          Podrás encontrar jugadores y/o equipos con los mismos
          gustos
        </p>
      </div>
    </div>
  )
}

export default ProfileNews
