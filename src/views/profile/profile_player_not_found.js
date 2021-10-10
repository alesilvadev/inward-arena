import React from 'react'
import { Link } from 'react-router-dom'

function ProfilePlayerNotFound (props) {
  return (
    <div id='playerNotFound'>
      <div className='container'>
        <div className='row'>
          <div className='center-items-absolute'>
            <div className='box'>
              <div className='box__ghost'>
                <div className='symbol' />
                <div className='symbol' />
                <div className='symbol' />
                <div className='symbol' />
                <div className='symbol' />
                <div className='symbol' />
                <div className='box__ghost-container'>
                  <div className='box__ghost-eyes'>
                    <div className='box__eye-left' />
                    <div className='box__eye-right' />
                  </div>
                  <div className='box__ghost-bottom'>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
                <div className='box__ghost-shadow' />
              </div>
            </div>            <h1>¡Oops!</h1>
            <h3>Lo sentimos, no encontramos {props.player}</h3>
            <Link to='/' className='back-button'>Volver</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePlayerNotFound
