import React from 'react'
import './loading_style.scss'

export default function Loading () {
  return (
    <div className='center-items-absolute'>
      <div className='loader'>
        <div className='inner one' />
        <div className='inner two' />
        <div className='inner three' />
      </div>
    </div>
  )
}
