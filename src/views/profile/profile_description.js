import React, { useState, useEffect } from 'react'
import MDReactComponent from 'markdown-react-js'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProfileDescription (props) {
  const [description, setDescription] = useState('')

  useEffect(() => {
    console.log('9')
    setDescription(props.player.description)
  }, [props.player.description])

  return (
    <div className='box shadow-sm box-panel-border rounded box-panel mb-3 gradient-border'>
      <div className='box-title box-panel-border-bottom p-3'>
        <h6 className='m-0'> <FontAwesomeIcon icon={faScroll} size='1x' color='#6b54b6' /> Descripción</h6>
      </div>
      <div className='box-body p-3 box-data box-description'>
        <MDReactComponent
          text={description}
        />
      </div>
    </div>
  )
}

export default ProfileDescription
