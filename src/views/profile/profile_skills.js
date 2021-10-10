import React, { useState, useEffect } from 'react'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProfileSkills (props) {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    console.log('4')
    setSkills(props.player.skills)
  }, [props.player.skills])

  return (
    <div className='box shadow-sm box-panel-border rounded box-panel mb-3 gradient-border'>
      <div className='box-title box-panel-border-bottom p-3'>
        <h6 className='m-0'> <FontAwesomeIcon icon={faBrain} size='1x' color='#6b54b6' /> Skills</h6>
      </div>

      {skills.map((item, index) => (
        <div className='box-body p-3' key={index}>
          <span className='progress-label col col-sm-4'>{item.name}</span>
          <div className='progress'>
            <div
              className='progress-bar'
              role='progressbar'
              style={{ width: item.value * 2 + '0%' }}
              aria-valuenow='25'
              aria-valuemin='0'
              aria-valuemax='50'
            >
              {item.value}
            </div>
          </div>
        </div>
      ))}
      {skills.length === 0 &&
        <div className='box-body p-3 box-panel-border-bottom career-box'>
          <FontAwesomeIcon icon={faBrain} className='default-icon' size='3x' color='#281933' />
          <p className='mb-0'>
                No tienes ninguna skill todavía
          </p>
        </div>}

    </div>
  )
}

export default ProfileSkills
