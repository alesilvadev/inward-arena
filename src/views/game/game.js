import React, { useState, useEffect } from 'react'
import gameModule from '../../modules/games/lol'
import './game_style.scss'
import { Link } from 'react-router-dom'

export default function Game (props) {
  const [game, setGame] = useState({})

  useEffect(() => {
    async function getGame (id) {
      return gameModule.getGameByName(id)
    }
    const game = props.match.params
    let id = null
    if (game.id) {
      id = game.id
    }
    const gameResponse = getGame(id)
    setGame(gameResponse)
  }, [])

  return (
    <>
      <div id='game'>
        <div
          className='edgtf-title-holder edgtf-standard-with-breadcrumbs-type edgtf-title-va-header-bottom edgtf-title-with-separator edgtf-h2-title'
          style={{ height: '240px', backgroundColor: '#120b18', dataHeight: '240' }}
        >
          <div className='edgtf-title-wrapper' style={{ height: '240px' }}>
            <div className='edgtf-title-inner'>
              <div className='edgtf-grid'>
                <div className='edgtf-title-info'>
                  <div className='edgtf-breadcrumbs-info'>
                    <div itemProp='breadcrumb' className='edgtf-breadcrumbs '>
                      <Link itemProp='url' to='https://overworld.qodeinteractive.com/'>
                        Game
                      </Link>
                      <span className='edgtf-delimiter'>&nbsp; / &nbsp;</span>
                      <span className='edgtf-current'>{game.name}</span>
                    </div>
                  </div>
                  <h2 className='edgtf-page-title entry-title'>{game.name}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container' id='postGame'>
          <div className='row'>
            <div className='col-xl-8'>
              <img
                src={game.profileImgUrl}
                className='attachment-full size-full'
                alt='g'
                srcSet={game.profileImgUrl}
              />
              <div className='game-description'>
                <h5>{game.slogan}</h5>
                <h3>{game.name}</h3>
                <p>{game.description}</p>
                <div className='game-genre'>
                  <h4>
                    Género: <span>{game.genre}</span>
                  </h4>
                </div>
                <div className='game-social-sync'>
                  <div className='d-flex align-items-center p-3 job-item-body'>
                    <div className='overlap-rounded-circle'>
                      <img
                        className='rounded-circle shadow-sm'
                        data-toggle='tooltip'
                        data-placement='top'
                        title=''
                        src='https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg'
                        alt=''
                        data-original-title='Sophia Lee'
                      />
                      <img
                        className='rounded-circle shadow-sm'
                        data-toggle='tooltip'
                        data-placement='top'
                        title=''
                        src='https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg'
                        alt=''
                        data-original-title='John Doe'
                      />
                      <img
                        className='rounded-circle shadow-sm'
                        data-toggle='tooltip'
                        data-placement='top'
                        title=''
                        src='https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg'
                        alt=''
                        data-original-title='Julia Cox'
                      />
                      <img
                        className='rounded-circle shadow-sm'
                        data-toggle='tooltip'
                        data-placement='top'
                        title=''
                        src='https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg'
                        alt=''
                        data-original-title='Robert Cook'
                      />
                    </div>
                    <span className='font-weight-bold text-muted'> +18 gamers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4'>
              <div className='widget edgtf-author-info-widget '>
                <div className='edgtf-aiw-inner'>
                  <Link itemProp='url' className='edgtf-aiw-image' to='https://overworld.qodeinteractive.com/author/matriomanex/'>
                    <img
                      src='https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/author-blog-2.jpg'
                      width='368'
                      height='247'
                      alt='matriomanex _youn'
                      className='avatar avatar-368 wp-user-avatar wp-user-avatar-368 alignnone photo'
                    />
                  </Link>
                  <div className='edgtf-author-info-additional'>
                    <h3 className='edgtf-aiw-title'>Sobre el Desarrollador</h3>
                    <p itemProp='description' className='edgtf-aiw-text'>
                      {game.aboutTheAuthor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {game.related && game.related.length > 0 &&
            <div className='games-suggested'>
              <h3 className='edgtf-aiw-title'>Juegos relacionados</h3>
              <div className='row'>
                {game.related.map((item, index) => (
                  <div className='col-xl-3' key={index}>
                    <img
                      src={item.profileImgUrl}
                      className='attachment-full size-full'
                      alt='g'
                      srcSet='https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/blog-img-1.jpg 1300w, https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/blog-img-1-768x432.jpg 768w, https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/blog-img-1-800x450.jpg 800w'
                    />
                    <h4><Link to={'/game/' + item.id}>{item.name}</Link></h4>
                  </div>
                ))}
              </div>
            </div>}
        </div>
      </div>
    </>
  )
}
