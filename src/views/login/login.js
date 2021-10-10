import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faEye, faEyeSlash, faRobot, faUserFriends, faShieldAlt, faTrophy } from '@fortawesome/free-solid-svg-icons'
import userVerification from '../../modules/authentication-1.0.0/auth'
import { Helmet } from 'react-helmet'
import './login_style.scss'

export default function Login () {
  const [error, setError] = useState('')
  const [view, setView] = useState('logIn')
  const [hidePassword, sethidePassword] = useState(true)

  const login = async (event) => {
    const email = document.getElementById('LogInEmail').value
    const password = document.getElementById('LogInPassword').value
    const loginResponse = await userVerification.signIn(email, password)
    if (loginResponse === 'access_denied') {
      setError('El nombre de usuario y/o la contraseña no coinciden con nuestros registros.')
    } else if (loginResponse === 'too_many_attempts') {
      setError('Su cuenta ha sido bloqueada por superar el número de intentos, contacte a un operador.')
    }
  }

  const register = async (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value
    const fullname = document.getElementById('fullname').value
    const username = document.getElementById('username').value
    const birth = document.getElementById('birth').value
    const password = document.getElementById('password').value
    const signUp = await userVerification.signUp(email, fullname, username, birth, password)
    if (signUp === 'useranme') {
      setError('¡El nombre de usuario ingresado ya existe!')
    }
  }

  const changeView = (view) => {
    setError('')
    setView(view)
  }

  const toggleShow = () => {
    sethidePassword(!hidePassword)
  }

  return (
    <div>
      <Helmet>
        <title>Inward Arena</title>
        <style>{'body { background-color: white !important; }'}</style>
      </Helmet>
      <div className='container-fluid'>
        <div className='row main-home'>
          <div className='col-xs-12 col-sm-12 col-md-5 col-lg-4 authfy-panel-left'>
            <div className='box-login'>

              <div className='brand-logo text-center'>
                <img src={require('../../assets/logo_inward_arena.png')} width='200' alt='brand-logo' />
              </div>
              <div className='authfy-login'>
                {view === 'logIn' &&
                  <div className='authfy-panel panel-login text-center active'>
                    <div className='authfy-heading'>
                      <h3 className='auth-title'>Iniciar sesión con tu cuenta</h3>
                      <p>¿No tienes una cuenta? <span className='lnk-toggler link-go-to' data-panel='.panel-signup' value='register' onClick={() => changeView('register')}>¡Registrate gratis!</span></p>
                    </div>
                    <div className='row social-buttons'>
                      <div className='col-xs-4 col-sm-4'>
                        <a href='#' className='btn btn-lg btn-block btn-facebook'>
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                      </div>
                      <div className='col-xs-4 col-sm-4'>
                        <a href='#' className='btn btn-lg btn-block btn-twitter'>
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </div>
                      <div className='col-xs-4 col-sm-4'>
                        <a href='#' className='btn btn-lg btn-block btn-google'>
                          <FontAwesomeIcon icon={faGooglePlusG} />
                        </a>
                      </div>
                    </div>
                    <div className='row loginOr'>
                      <div className='col-xs-12 col-sm-12'>
                        <span className='spanOr'>o</span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12 col-sm-12'>
                        <p className='error-text'>{error}</p>
                        <form name='loginForm' className='loginForm' onSubmit={(event) => { event.preventDefault(); login() }}>
                          <div className='form-group wrap-input'>
                            <input type='email' className='form-control email' name='LogInEmail' placeholder='Email' id='LogInEmail' required />
                            <span className='focus-input' />
                          </div>
                          <div className='form-group wrap-input'>
                            <div className='pwdMask'>
                              <input type={hidePassword ? 'password' : 'text'} className='form-control password' name='LogInPassword' placeholder='Contraseña' id='LogInPassword' required />
                              <span className='focus-input' />
                              {hidePassword &&
                                <a onClick={() => toggleShow()}><FontAwesomeIcon icon={faEyeSlash} className='fa pwd-toggle' size='1x' />                                                 </a>}
                              {!hidePassword &&
                                <a onClick={() => toggleShow()}><FontAwesomeIcon icon={faEye} className='fa pwd-toggle' size='1x' /></a>}

                            </div>
                          </div>
                          <div className='row remember-row'>
                            <div className='col-xs-6 col-sm-6'>
                              <div className='container-checkbox'>
                                <label><input type='checkbox' /> Recuerdame</label>
                              </div>
                            </div>
                            <div className='col-xs-6 col-sm-6'>
                              <p className='forgotPwd'>
                                <span className='lnk-toggler link-go-to' data-panel='.panel-forgot' value='forgotPassword' onClick={() => changeView('forgotPassword')}>¿Olvidaste tu contraseña?</span>
                              </p>
                            </div>
                          </div>
                          <button className='btn btn-lg btn-block btn-action' type='submit'>Iniciar Sesión</button>

                        </form>
                      </div>
                    </div>
                  </div>}
                {view === 'register' &&
                  <div className='authfy-panel panel-signup text-center active'>
                    <div className='row'>
                      <div className='col-xs-12 col-sm-12'>
                        <div className='authfy-heading'>
                          <h3 className='auth-title'>¡Registrate gratis!</h3>
                          <p className='error-text'>{error}</p>
                        </div>
                        <form name='signupForm' className='signupForm' onSubmit={(event) => { event.preventDefault(); register() }}>
                          <div className='form-group wrap-input'>
                            <input type='email' className='form-control' name='email' id='email' placeholder='Email' required />
                            <span className='focus-input' />
                          </div>
                          <div className='form-group wrap-input'>
                            <input type='text' className='form-control' name='fullname' id='fullname' placeholder='Nombre completo' required />
                            <span className='focus-input' />
                          </div>
                          <div className='form-group wrap-input'>
                            <input type='date' className='form-control' name='birth' id='birth' placeholder='11/11/1111' required />
                            <span className='focus-input' />
                          </div>
                          <div className='form-group wrap-input'>
                            <input type='text' className='form-control' name='username' id='username' placeholder='Nombre usuario' required />
                            <span className='focus-input' />
                          </div>
                          <div className='form-group wrap-input'>
                            <div className='pwdMask'>
                              <input type={hidePassword ? 'password' : 'text'} className='form-control' name='password' id='password' placeholder='Contraseña' required />
                              <span className='focus-input' />
                              {hidePassword &&
                                <a onClick={() => toggleShow()}><span className='fa pwd-toggle fa-eye-slash' /></a>}
                              {!hidePassword &&
                                <a onClick={() => toggleShow()}><span className='fa pwd-toggle fa-eye' /></a>}
                            </div>
                          </div>
                          <div className='form-group'>
                            <div className='container-checkbox'>
                              <label><input type='checkbox' required /> Estoy de acuerdo con los términos y condiciones.</label>
                            </div>
                          </div>
                          <div className='form-group'>
                            <button className='btn btn-lg btn-block btn-action' type='submit'>Registrarse</button>
                          </div>
                        </form>
                        <span className='lnk-toggler link-go-to' data-panel='.panel-login' value='logIn' onClick={() => changeView('logIn')}>¿Ya tienes una cuenta?</span>
                      </div>
                    </div>
                  </div>}
                {view === 'forgotPassword' &&
                  <div className='authfy-panel panel-forgot active slide'>
                    <div className='row'>
                      <div className='col-xs-12 col-sm-12'>
                        <div className='authfy-heading'>
                          <h3 className='auth-title'>Recuperar Contraseña</h3>
                          <p>Por favor, ingresa tu email para poder enviarte las instrucciones para obtener una nueva contraseña.</p>
                        </div>
                        <form name='forgetForm' className='forgetForm' action='#' method='POST'>
                          <div className='form-group wrap-input'>
                            <input type='email' className='form-control' name='username' placeholder='Email' required />
                            <span className='focus-input' />
                          </div>
                          <div className='form-group'>
                            <button className='btn btn-lg btn-primary btn-block' type='submit'>Recuperar contraseña</button>
                          </div>
                          <div className='form-group'>
                            <span className='lnk-toggler text-normal-size link-go-to' data-panel='.panel-login' value='logIn' onClick={() => changeView('logIn')}>Iniciar Sesión</span>
                          </div>
                          <div className='form-group'>
                            <span className='lnk-toggler text-normal-size link-go-to' data-panel='.panel-signup' value='register' onClick={() => changeView('register')}>Registrarse</span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
          <div className='col-md-7 col-lg-8 authfy-panel-right d-none d-md-block'>
            <div className='video-front'>
              <video poster='https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg' id='videoBG' playsInline autoPlay muted loop>
                <source src={require('./assets/background.mp4')} type='video/mp4' />
              </video>
            </div>
            <div className='hero-heading'>
              <div className='' />
              <div className='headline'>
                <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <FontAwesomeIcon icon={faRobot} size='3x' />
                      <h6>Inteligencia Artifical</h6>
                      <p>Nuestra IA buscará jugadores, partidas con posibilidad de ganar según tus skills</p>
                    </div>
                    <div className='carousel-item'>
                      <FontAwesomeIcon icon={faUserFriends} size='3x' />
                      <h6>Busca jugadores</h6>
                      <p>Conoce nuevos jugadores con skills similares</p>
                    </div>
                    <div className='carousel-item'>
                      <FontAwesomeIcon icon={faShieldAlt} size='3x' />
                      <h6>Crea tu equipo</h6>
                      <p>Encuentra jugadores para formar tu próximo equipo de esports</p>
                    </div>
                    <div className='carousel-item'>
                      <FontAwesomeIcon icon={faTrophy} size='3x' />
                      <h6>Participa en torneos</h6>
                      <p>Diviertete participando en torneos semanales, sorteos con increibles premios</p>
                    </div>
                  </div>
                </div>
                <h3>Bienvenido a Inward Arena</h3>
                <p>La plataforma para conectar jugadores, equipos y la comunidad gamer mas grande.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
