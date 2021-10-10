import React, { useState, useEffect } from 'react'
import streamingModule from '../../../modules/streaming/streaming'
import ReactPlayer from 'react-player'
import './profile_streaming_style.scss'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProfileStreaming (props) {
  const [twitchVideos, setTwitchVideos] = useState([])

  useEffect(() => {
    setTwitchVideos(streamingModule.getTwitchByUsername())
    console.log(twitchVideos)
  }, [])

  return (
    <div id='streaming'>
      <div className='full-screen-container'>
        <div id='multi-item-example' class='carousel slide carousel-multi-item' data-ride='carousel'>
          <div class='col-md-11 offset-xl-1' style={{ float: 'left' }}>
            <h3>¿Que hay de nuevo?</h3>
            <h5>twitch</h5>
          </div>
          <ol class='carousel-indicators'>
            <li data-target='#multi-item-example' data-slide-to='0' class='active' />
            <li data-target='#multi-item-example' data-slide-to='1' />

          </ol>

          <div class='carousel-inner' role='listbox'>

            <div class='carousel-item active'>

              <div class='col-md-2 offset-xl-1' style={{ float: 'left' }}>
                <div class='card mb-2'>
                  <ReactPlayer
                    url='https://www.twitch.tv/videos/610193735'
                    width='100%'
                    height='200px'
                    playing={false}
                    playIcon
                  />
                  <div class='card-body'>
                    <div class='box-image-rounded-small'>
                      <table>
                        <tr>
                          <td>
                            <img src='/static/media/userDefault.fad4b889.png' class='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />
                          </td>
                          <td>
                            <ul>
                              <li className='text-gold'>Karmaland y WoW - Experimentos con el Agujero Negro</li>
                              <li>rubius</li>
                              <li>
                                <span>50000 followers</span>
                                <span>        <FontAwesomeIcon icon={faEye} size='1x' color='#fff' /> 5K
                                </span>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-md-2' style={{ float: 'left' }}>
                <div class='card mb-2'>
                  <ReactPlayer
                    url='https://www.twitch.tv/videos/610193735'
                    width='100%'
                    height='200px'
                    playing={false}
                    controls
                  />
                  <div class='card-body'>
                    <div class='box-image-rounded-small'>
                      <table>
                        <tr>
                          <td>
                            <img src='/static/media/userDefault.fad4b889.png' class='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />
                          </td>
                          <td>
                            <ul>
                              <li className='text-gold'>Karmaland y WoW - Experimentos con el Agujero Negro</li>
                              <li>rubius</li>
                              <li>
                                <span>50000 followers</span>
                                <span>        <FontAwesomeIcon icon={faEye} size='1x' color='#fff' /> 5K
                                </span>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-md-2' style={{ float: 'left' }}>
                <div class='card mb-2'>
                  <ReactPlayer
                    url='https://www.twitch.tv/videos/610193735'
                    width='100%'
                    height='200px'
                    playing={false}
                    controls
                  />
                  <div class='card-body'>
                    <div class='box-image-rounded-small'>
                      <table>
                        <tr>
                          <td>
                            <img src='/static/media/userDefault.fad4b889.png' class='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />
                          </td>
                          <td>
                            <ul>
                              <li className='text-gold'>Karmaland y WoW - Experimentos con el Agujero Negro</li>
                              <li>rubius</li>
                              <li>
                                <span>50000 followers</span>
                                <span>        <FontAwesomeIcon icon={faEye} size='1x' color='#fff' /> 5K
                                </span>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-md-2' style={{ float: 'left' }}>
                <div class='card mb-2'>
                  <ReactPlayer
                    url='https://www.twitch.tv/videos/610193735'
                    width='100%'
                    height='200px'
                    playing={false}
                    controls
                  />
                  <div class='card-body'>
                    <div class='box-image-rounded-small'>
                      <table>
                        <tr>
                          <td>
                            <img src='/static/media/userDefault.fad4b889.png' class='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />
                          </td>
                          <td>
                            <ul>
                              <li className='text-gold'>Karmaland y WoW - Experimentos con el Agujero Negro</li>
                              <li>rubius</li>
                              <li>
                                <span>50000 followers</span>
                                <span>        <FontAwesomeIcon icon={faEye} size='1x' color='#fff' /> 5K
                                </span>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-md-2' style={{ float: 'left' }}>
                <div class='card mb-2'>
                  <ReactPlayer
                    url='https://www.twitch.tv/videos/610193735'
                    width='100%'
                    height='200px'
                    playing={false}
                    controls
                  />
                  <div class='card-body'>
                    <div class='box-image-rounded-small'>
                      <table>
                        <tr>
                          <td>
                            <img src='/static/media/userDefault.fad4b889.png' class='img-fluid mt-2 rounded-circle profile-image' id='profileImage' alt='Responsive image' />
                          </td>
                          <td>
                            <ul>
                              <li className='text-gold'>Karmaland y WoW - Experimentos con el Agujero Negro</li>
                              <li>rubius</li>
                              <li>
                                <span>50000 followers</span>
                                <span>        <FontAwesomeIcon icon={faEye} size='1x' color='#fff' /> 5K
                                </span>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* <div class='carousel-item'>

              <div class='col-md-3' style={{ float: 'left' }}>
                <div class='card mb-2'>
                  <img
                    class='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg' alt='Card image cap'
                  />
                  <div class='card-body'>
                    <h4 class='card-title'>Card title</h4>
                    <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the
              card's content.
                    </p>
                    <a class='btn btn-primary'>Button</a>
                  </div>
                </div>
              </div>

              <div class='col-md-3' style={{ float: 'left' }}>
                <div class='card mb-2'>
                  <img
                    class='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg' alt='Card image cap'
                  />
                  <div class='card-body'>
                    <h4 class='card-title'>Card title</h4>
                    <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the
              card's content.
                    </p>
                    <a class='btn btn-primary'>Button</a>
                  </div>
                </div>
              </div>

              <div class='col-md-3' style={{ float: 'left' }}>
                <div class='card mb-2'>
                  <img
                    class='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg' alt='Card image cap'
                  />
                  <div class='card-body'>
                    <h4 class='card-title'>Card title</h4>
                    <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the
              card's content.
                    </p>
                    <a class='btn btn-primary'>Button</a>
                  </div>
                </div>
              </div>

              <div class='col-md-3' style={{ float: 'left' }}>
                <div class='card mb-2'>
                  <img
                    class='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg' alt='Card image cap'
                  />
                  <div class='card-body'>
                    <h4 class='card-title'>Card title</h4>
                    <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the
              card's content.
                    </p>
                    <a class='btn btn-primary'>Button</a>
                  </div>
                </div>
              </div>

            </div> */}

          </div>
        </div>
      </div>

      {twitchVideos.length > 0 && twitchVideos.map((video, index) => (
        <>
          <span>asdasd</span>
          <img src={video.channel.logo} key={index} />
        </>
      ))}

    </div>

  )
}

export default ProfileStreaming
