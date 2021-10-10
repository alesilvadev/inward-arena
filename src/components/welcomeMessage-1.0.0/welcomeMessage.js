import React, { useState } from 'react'
import Rodal from 'rodal'

import './welcomeMessage_style.scss'

export default function WelcomeMessage () {
  const [page, setPage] = useState(1)
  const [showWelcome, setShowWelcome] = useState(true)

  const changePage = (page) => {
    setPage(page)
  }

  const showHideWelcomePopUp = () => {
    setShowWelcome(!showWelcome)
  }

  return (
    <Rodal visible={showWelcome} onClose={() => showHideWelcomePopUp()} className='edit-rodal welcome-message'>
      <div className='container-fluid'>
        <div className='container' id='modalUpdate' />
        {page === 1 &&
          <>
            <h4>¡Bienvenido a Inward Arena!</h4>
            <p>Estás a punto de comenzar una experiencia única como jugador, te ayudaremos a centralizar tu información de lo que juegas para poder medirte con otros jugadores y realmente demostrar tu categoría.</p>
            <p>¡Como primer paso debes completar tu perfil!</p>
          </>}

        {page === 2 &&
          <>
            <h4>Sincroniza plataformas</h4>
            <p>Brinda unicamente tu nombre de usuario público (lol, twitch, steam) para autocompletar información de tu perfil como skills, experiencias y así dar comienzo a tu carrera como jugador.</p>
            <p>¡Ve ajustes y accede a sincronizacion!</p>
          </>}

        {page === 3 &&
          <>
            <h4>Consigue Logros</h4>
            <p>A medida que procesamos tus estadísticas recibirás logros según la plataformas que hayas sincronizado, esos logros se compartirán a otros jugadores y te ayudarán a obtener beneficios.</p>
            <p>¡Serás notificado cuando recibas un logro!</p>
          </>}

        {page === 4 &&
          <>
            <h4>¡Hora de comenzar!</h4>
            <p>Conectate con otros jugadores, mide tu crecimiento de manera profesional, alcanza el máximo de logros posibles y así poder demostrar tu nivel.</p>
            <button onClick={() => showHideWelcomePopUp()}>Comenzar</button>
          </>}

        <div className=''>
          <div className='blobs-container'>
            <div className={page === 1 ? 'blob online' : 'blob offline'} onClick={() => changePage(1)} />
            <div className={page === 2 ? 'blob online' : 'blob offline'} onClick={() => changePage(2)} />
            <div className={page === 3 ? 'blob online' : 'blob offline'} onClick={() => changePage(3)} />
            <div className={page === 4 ? 'blob online' : 'blob offline'} onClick={() => changePage(4)} />
          </div>
        </div>
      </div>
    </Rodal>
  )
}
