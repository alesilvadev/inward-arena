import React, { useEffect, useState } from 'react'
import { faMouse, faKeyboard, faLaptop, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProfileSetup (props) {
  const [setup, setSetup] = useState([])

  useEffect(() => {
    console.log('6')
    setSetup(props.player.setup)
  }, [props.player.setup])

  return (
    <div className='box shadow-sm box-panel-border rounded box-panel mb-3 box-skills gradient-border'>
      <div className='box-with-edit box-title box-panel-border-bottom'>
        <h6 className='m-0'> <FontAwesomeIcon icon={faHeadset} size='1x' color='#6b54b6' /> Setup
        </h6>
      </div>
      <div className='box-body'>
        <div className='d-flex align-items-center osahan-post-header p-3 box-panel-border-bottom people-list box-data'>
          <div className='dropdown-list-image mr-3'>
            <FontAwesomeIcon
              icon={faLaptop}
              className='setup-icons'
              size='2x'
            />
          </div>
          <div className='font-weight-bold'>
            <div className='text-truncate text-gold'>Computadora</div>
            {setup != null &&
              <div className='small '>
                {setup.pc}
              </div>}
          </div>
        </div>
        <div className='d-flex align-items-center osahan-post-header p-3 box-panel-border-bottom people-list box-data'>
          <div className='dropdown-list-image mr-3'>
            <FontAwesomeIcon
              icon={faKeyboard}
              className='setup-icons'
              size='2x'
            />
          </div>
          <div className='font-weight-bold'>
            <div className='text-truncate text-gold'>Teclado</div>
            {setup != null &&
              <div className='small '>
                {setup.keyBoard}
              </div>}
          </div>
        </div>
        <div className='d-flex align-items-center osahan-post-header p-3 people-list box-data'>
          <div className='dropdown-list-image mr-3'>
            <FontAwesomeIcon
              icon={faMouse}
              className='setup-icons'
              size='2x'
            />
          </div>
          <div className='font-weight-bold'>
            <div className='text-truncate text-gold'>Mouse</div>
            {setup != null &&
              <div className='small '>
                {setup.mouse}
              </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSetup
