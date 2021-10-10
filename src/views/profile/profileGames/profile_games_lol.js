import React, { useState, useEffect } from 'react'
import lolModule from '../../../modules/games/lol'

function ProfileGamesLol (props) {
  const [view, setView] = useState('summary')

  useEffect(() => {
    lolModule.getLolUserInfo()
  }, [])

  const changeView = (view) => {
    setView(view)
  }

  return (
    <div id='gameLol'>
      <div className='col col-xs-12 main-data general-info-box'>
        <img src={require('./assets/test.jpg')} className='profile-game-image' />
        <span className='general-info'>
          <h4>Hakom (LAS)</h4>
          <h5>Level 24</h5>
        </span>
      </div>
      <div className='box shadow-sm rounded mb-3'>
        <ul class='nav osahan-line-tab' id='myTab' role='tablist'>
          <li class='nav-item'>
            <a class='nav-link active' id='home-tab' data-toggle='tab' role='tab' aria-controls='home' aria-selected='true' onClick={() => changeView('summary')}>
              Resumen
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' id='contact-tab' data-toggle='tab' href='#contact' role='tab' aria-controls='contact' aria-selected='false' onClick={() => changeView('matches')}>
              Historial de partidas
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' id='profile-tab' data-toggle='tab' href='#profile' role='tab' aria-controls='profile' aria-selected='false' onClick={() => changeView('summoners')}>
              Campeones
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' id='contact-tab' data-toggle='tab' href='#contact' role='tab' aria-controls='contact' aria-selected='false'>
              Ligas
            </a>
          </li>
        </ul>
      </div>
      <div className='fakeLoader' />
      <div className='container'>
        <div className='row user-settings-sidebar'>
          {view === 'summary' && (
            <>
              <aside className='col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12 profile-view'>
                <div className='box shadow-sm box-panel-border rounded box-panel mb-3 gradient-border text-align-center'>
                  <div className='box-title box-panel-border-bottom'>
                    <h6 className='title-gold'>Roles</h6>
                  </div>
                  <table class='table'>
                    <thead>
                      <tr>
                        <th scope='col'>Rol</th>
                        <th scope='col'>Partidas</th>
                        <th scope='col'>Winrate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>Top</th>
                        <td>43</td>
                        <td>23.00%</td>
                      </tr>
                      <tr>
                        <th scope='row'>Mid</th>
                        <td>103</td>
                        <td>45.00%</td>
                      </tr>
                      <tr>
                        <th scope='row'>Jg</th>
                        <td>3</td>
                        <td>00.00%</td>
                      </tr>
                      <tr>
                        <th scope='row'>ADC</th>
                        <td>13</td>
                        <td>34.00%</td>
                      </tr>
                      <tr>
                        <th scope='row'>SUP</th>
                        <td>21</td>
                        <td>64.00%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='box shadow-sm box-panel-border rounded box-panel mb-3 box-skills gradient-border'>
                  <div class='panel panel-default'>
                    <div className='box-title box-panel-border-bottom p-3'>
                      <h6 className='title-gold'>Top Campeones</h6>
                    </div>
                    <div class='panel-body'>
                      <div class='rad-activity-body'>
                        <div class='rad-list-group group'>
                          <div class='rad-list-group-item'>
                            <div class='rad-list-icon icon-shadow rad-bg-danger pull-left'>
                              <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Diana.png' className='champions-icon' />
                            </div>
                            <div class='rad-list-content'>
                              <strong>Diana</strong>
                              <div class='md-text'>Win rate 56.00%</div>
                            </div>
                          </div>
                          <div class='rad-list-group-item'>
                            <div class='rad-list-icon icon-shadow rad-bg-primary pull-left'>
                              <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Veigar.png' className='champions-icon' />
                            </div>
                            <div class='rad-list-content'>
                              <strong>Veigar</strong>
                              <div class='md-text'>Win rate 67.00%</div>
                            </div>
                          </div>
                          <div class='rad-list-group-item'>
                            <div class='rad-list-icon icon-shadow rad-bg-success pull-left'>
                              <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Senna.png' className='champions-icon' />
                            </div>
                            <div class='rad-list-content'>
                              <strong>Senna</strong>
                              <div class='md-text'>Win rate 24.00%</div>
                            </div>
                          </div>
                          <div class='rad-list-group-item'>
                            <div class='rad-list-icon icon-shadow rad-bg-violet pull-left'>
                              <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Jax.png' className='champions-icon' />
                            </div>
                            <div class='rad-list-content'>
                              <strong>Jax</strong>
                              <div class='md-text'>Win rate 78.00%</div>
                            </div>
                          </div>
                          <div class='rad-list-group-item'>
                            <div class='rad-list-icon icon-shadow rad-bg-success pull-left'>
                              <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Darius.png' className='champions-icon' />
                            </div>
                            <div class='rad-list-content'>
                              <strong>Darius</strong>
                              <div class='md-text'>Win rate 00.00%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='box shadow-sm mb-3 box-panel-border rounded box-panel ads-box text-center overflow-hidden gradient-border'>
                  <div className='box-with-edit box-panel-border-bottom'>
                    <h6 className='title-gold'>Etiquetas</h6>
                  </div>
                  <div>
                    <span className='badge badge-primary'>Veigar Fan</span>
                    <span className='badge badge-primary'>OTP Diana</span>
                    <span className='badge badge-primary'>S8 Gold</span>
                  </div>
                </div>
              </aside>
              <main className='col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12 '>
                <div className='box shadow-sm box-panel-border rounded box-panel mb-3 gradient-border'>
                  <div className='box-title box-panel-border-bottom p-3'>
                    <h6 className='title-gold'>KDA Promedio</h6>
                  </div>
                  <div class='flex-wrapper'>
                    <div class='single-chart'>
                      <svg viewBox='0 0 36 36' class='circular-chart green'>
                        <path
                          class='circle-bg'
                          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
                        />
                        <path
                          class='circle'
                          stroke-dasharray='26, 100'
                          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
                        />
                        <text x='18' y='20.35' class='percentage'>
                          2.6%
                        </text>
                      </svg>

                      <span>KILLS</span>
                    </div>

                    <div class='single-chart'>
                      <svg viewBox='0 0 36 36' class='circular-chart red'>
                        <path
                          class='circle-bg'
                          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
                        />
                        <path
                          class='circle'
                          stroke-dasharray='47, 100'
                          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
                        />
                        <text x='18' y='20.35' class='percentage'>
                          4.7%
                        </text>
                      </svg>
                      <span>MUERTES</span>
                    </div>

                    <div class='single-chart'>
                      <svg viewBox='0 0 36 36' class='circular-chart blue'>
                        <path
                          class='circle-bg'
                          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
                        />
                        <path
                          class='circle'
                          stroke-dasharray='85, 100'
                          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
                        />
                        <text x='18' y='20.35' class='percentage'>
                          8.5%
                        </text>
                      </svg>
                      <span>ASISTENCIAS</span>
                    </div>
                  </div>
                  <div className='box-title box-panel-border-bottom p-3'>
                    <h6 className='m-0'>
                      Puntaje de jugador <span className='title-gold'>10.6</span>
                    </h6>
                  </div>
                  <p>El KDA es el promedio total de kills, Muertes y Asistencias según el historial de partidas</p>
                </div>
                <div className='box-title box-panel-border-bottom'>
                  <h6 className='title-gold'>Historial de Partidas</h6>
                </div>
                <table className='lol-match-info'>
                  <tbody>
                    <tr>
                      <th>Normal 5vs5</th>
                      <th>1 día atrás</th>
                      <th>26 mins</th>
                      <th />
                      <th />
                      <th>Derrota</th>
                    </tr>
                    <tr>
                      <td>
                        <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Diana.png' className='user-img-summoner' />
                      </td>
                      <td className='user-power-summoner'>
                        <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/SummonerFlash.png' />
                        <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/SummonerDot.png' />
                      </td>
                      <td>
                        <ul>
                          <li>
                            <span className='match-stats'>8 / 3 / 5</span>
                          </li>
                          <li>
                            <span className='match-kda'>4.33% KDA</span>
                          </li>
                          <li>
                            <span className='match-kills'>Double Kill</span>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className='lol-match-info'>
                  <tbody>
                    <tr>
                      <th>Normal 5vs5</th>
                      <th>1 día atrás</th>
                      <th>26 mins</th>
                      <th />
                      <th />
                      <th>Derrota</th>
                    </tr>
                    <tr>
                      <td>
                        <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Diana.png' className='user-img-summoner' />
                      </td>
                      <td className='user-power-summoner'>
                        <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/SummonerFlash.png' />
                        <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/SummonerDot.png' />
                      </td>
                      <td>
                        <ul>
                          <li>
                            <span className='match-stats'>8 / 3 / 5</span>
                          </li>
                          <li>
                            <span className='match-kda'>4.33% KDA</span>
                          </li>
                          <li>
                            <span className='match-kills'>Double Kill</span>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className='lol-match-info'>
                  <tbody>
                    <tr>
                      <th>Normal 5vs5</th>
                      <th>1 día atrás</th>
                      <th>26 mins</th>
                      <th />
                      <th />
                      <th>Derrota</th>
                    </tr>
                    <tr>
                      <td>
                        <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Diana.png' className='user-img-summoner' />
                      </td>
                      <td className='user-power-summoner'>
                        <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/SummonerFlash.png' />
                        <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/SummonerDot.png' />
                      </td>
                      <td>
                        <ul>
                          <li>
                            <span className='match-stats'>8 / 3 / 5</span>
                          </li>
                          <li>
                            <span className='match-kda'>4.33% KDA</span>
                          </li>
                          <li>
                            <span className='match-kills'>Double Kill</span>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                          <li>
                            <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                            <span> Tekka</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='button-see-more'>
                  <a>Ver mas</a>
                </div>
              </main>
              <aside className='col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12'>
                <div className='box-live shadow-sm box-panel-border rounded box-panel mb-3 gradient-border text-align-center'>
                  <div className='box-title box-panel-border-bottom'>
                    <h6>Hakom está en partida</h6>
                  </div>
                </div>
                <div className='box shadow-sm box-panel-border rounded box-panel mb-3 gradient-border text-align-center'>
                  <div className='box-title box-panel-border-bottom'>
                    <h6 className='title-gold'>General</h6>
                  </div>
                  <table className='lol-general-info'>
                    <tr>
                      <td>Partidas Jugadas</td>
                      <td>344</td>
                    </tr>
                    <tr>
                      <td>Posición</td>
                      <td>344</td>
                    </tr>
                    <tr>
                      <td>Kills</td>
                      <td>344</td>
                    </tr>
                    <tr>
                      <td>Asistencias</td>
                      <td>344</td>
                    </tr>
                    <tr>
                      <td>Farmeo</td>
                      <td>344</td>
                    </tr>
                    <tr>
                      <td>Campeones</td>
                      <td>344</td>
                    </tr>
                  </table>
                </div>
                <div className='box shadow-sm box-panel-border rounded box-panel mb-3 gradient-border text-align-center'>
                  <div className='box-title box-panel-border-bottom'>
                    <h6 className='title-gold'>Top equipo</h6>
                  </div>
                  <table class='table friends-played'>
                    <thead>
                      <tr>
                        <th scope='col'>Jugador</th>
                        <th scope='col'>Winrate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src='https://cdn2.leagueofgraphs.com/img/summonerIcons/10.8/36/7.png' /> <span>WachoPower</span>
                        </td>
                        <td>48.00%</td>
                      </tr>
                      <tr>
                        <td>
                          <img src='https://cdn2.leagueofgraphs.com/img/summonerIcons/10.8/36/7.png' /> <span>Kojilas</span>
                        </td>
                        <td>45.00%</td>
                      </tr>
                      <tr>
                        <td>
                          <img src='https://cdn2.leagueofgraphs.com/img/summonerIcons/10.8/36/7.png' /> <span>Shibon</span>
                        </td>
                        <td>32.00%</td>
                      </tr>
                      <tr>
                        <td>
                          <img src='https://cdn2.leagueofgraphs.com/img/summonerIcons/10.8/36/7.png' /> <span>Nordan</span>
                        </td>
                        <td>34.00%</td>
                      </tr>
                      <tr>
                        <td>
                          <img src='https://cdn2.leagueofgraphs.com/img/summonerIcons/10.8/36/7.png' /> <span>Frederick</span>
                        </td>
                        <td>67.00%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </aside>
            </>
          )}
          {view === 'matches' && (
            <>
              <table className='lol-match-info'>
                <tbody>
                  <tr>
                    <th>Normal 5vs5</th>
                    <th>1 día atrás</th>
                    <th>26 mins</th>
                    <th />
                    <th />
                    <th>Derrota</th>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Diana.png' className='user-img-summoner' />
                    </td>
                    <td className='user-power-summoner'>
                      <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/SummonerFlash.png' />
                      <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/SummonerDot.png' />
                    </td>
                    <td>
                      <ul>
                        <li>
                          <span className='match-stats'>8 / 3 / 5</span>
                        </li>
                        <li>
                          <span className='match-kda'>4.33% KDA</span>
                        </li>
                        <li>
                          <span className='match-kills'>Double Kill</span>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                        </li>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/1056.png' className='match-items' />
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                        <li>
                          <img src='https://ddragon.leagueoflegends.com/cdn/10.8.1/img/champion/Morgana.png' className='match-player-img' />
                          <span> Tekka</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileGamesLol
