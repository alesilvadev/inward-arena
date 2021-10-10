import React, { useState } from 'react'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Membership from '../../components/membership-1.0.0/membership'
import Rodal from 'rodal'

function ProfileUserBenefits (props) {
  const [membership, setMembership] = useState(false)
  console.log('7')

  const setModal = () => {
    setMembership(!membership)
  }

  return (
    <div>
      <Rodal visible={membership} onClose={() => setModal()} className='membership-rodal'>
        <Membership />
      </Rodal>
      <div className='box shadow-sm mb-3 box-panel-border rounded box-panel ads-box text-center overflow-hidden gradient-border membership-box'>
        <FontAwesomeIcon icon={faCrown} className='icon-edit-box fa-lg' size='2x' />
        <div className='p-3 box-panel-border-bottom'>
          <h6 className='font-weight-bold text-gold'>
          Activar Premium
          </h6>
          <p className='mb-0 text-align-center'>
          Escala al siguiente nivel con mas beneficios
          </p>
        </div>
        <div className='p-3'>
          <button type='button' className='btn box-btn-outline-orange pl-4 pr-4' onClick={() => setModal()}>
          VER BENEFICIOS
          </button>
        </div>
      </div>
    </div>

  )
}

export default ProfileUserBenefits
