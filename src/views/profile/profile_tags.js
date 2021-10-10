import React, { useState, useEffect } from 'react'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProfileTags (props) {
  const [preferences, setPreferences] = useState([])

  useEffect(() => {
    console.log('3')
    setPreferences(props.player.tags)
  }, [props.player.tags])

  return (
    <div className='box shadow-sm mb-3 box-panel-border rounded box-panel ads-box text-center overflow-hidden gradient-border'>
      <div className='box-with-edit box-panel-border-bottom'>
        <h6 className='font-weight-bold text-highlighted'>
          <FontAwesomeIcon icon={faTag} size='1x' color='#6b54b6' /> Intereses
        </h6>
        <p className='mb-0  text-align-center'>
        Podrás encontrar jugadores y/o equipos con los mismos
        gustos
        </p>
      </div>
      <div>
        {preferences.length >= 1 && preferences.map((tag, index) => (
          <span className='badge badge-primary' key={index}>{tag}</span>
        ))}
        {preferences.length < 1 &&
          <div className='box-body career-box'>
            <FontAwesomeIcon icon={faTag} className='icon-edit-box default-icon' size='3x' />
            <p className='mb-0'>
                 Agrega preferencias para poder obtener mejores contenidos
            </p>
          </div>}
      </div>
    </div>
  )
}

export default ProfileTags
