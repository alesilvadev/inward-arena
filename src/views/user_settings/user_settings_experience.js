import React, { Component } from 'react'
import { connect } from 'react-redux'
import { faGamepad, faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gamesModule from '../../modules/games/lol'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'

class UserSettingsExperience extends Component {
  constructor (props) {
    super(props)
    this.state = {
      add: false,
      games: [],
      experiences: [],
      buttonClass: ''
    }
  }

  async componentDidMount () {
    if (this.props.userProfile.games) {
      this.setState({
        ...this.state,
        experiences: this.props.userProfile.games
      })
    }
    if (this.state.games.length < 1) {
      const games = await gamesModule.getGames()
      this.setState({
        ...this.state,
        games: games
      })
    }
  }

  addGame (e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      add: true
    })
  }

  addExperience (e) {
    e.preventDefault()
    const game = document.getElementById('game').value
    const playedHours = document.getElementById('playedHours').value
    const gameSplit = game.split(',')
    if (!this.state.experiences.find(item => item.id === gameSplit[0])) {
      const experiences = this.state.experiences
      experiences.push({
        id: gameSplit[0],
        name: gameSplit[1],
        hoursPlayed: parseInt(playedHours)
      })
      this.setState({
        ...this.state,
        experiences: experiences
      })
    }
  }

  saveExperiences (e) {
    e.preventDefault()
    this.setState({
      buttonClass: 'loading'
    })
    const experiences = this.state.experiences
    userInfo.updateUserGames(experiences).then(
      setTimeout(() => {
        this.setState({
          buttonClass: 'success'
        })
      }, 2000)
    )
  }

  deleteExperience (experienceId, e) {
    e.preventDefault()
    if (this.state.experiences.find(item => item.id === experienceId)) {
      const experiences = this.state.experiences.filter(item => item.id !== experienceId)
      this.setState({
        ...this.state,
        experiences: experiences
      })
    }
  }

  render () {
    return (
      <div id='userSettingsExperience'>
        <div className='rounded user-settings-general mb-3'>
          <div className='box-title border-bottom p-3'>
            <h6 className='m-0'>Experencia de jugador</h6>
            <p className='mb-0 mt-0 small'>Muestra tus areas de conocimiento
            </p>
          </div>
          <div className='box-body p-3'>
            <div className='box shadow-sm box-panel-border rounded box-panel mb-3 gradient-border'>
              {this.state.experiences.map((item, index) => (
                <div className='box-body p-3 box-panel-border-bottom experience-box' style={{ backgroundImage: 'url(' + item.profileImgUrl + ')' }} key={index}>
                  <span className='mb-0 experience-label'>
                    {item.name} |  <FontAwesomeIcon icon={faGamepad} className='fa-sm' /> {item.hoursPlayed}
                  </span>
                  <div className='experience-delete'>
                    <a onClick={(this.deleteExperience.bind(this, item.id))}><FontAwesomeIcon icon={faTimes} className='fa-lg' /></a>
                  </div>
                </div>
              ))}
              <div className='box-body box-add-experience'>
                {this.state.add === false &&
                  <div onClick={this.addGame.bind(this)}>
                    <FontAwesomeIcon icon={faPlusCircle} className='fa-lg' /> <span>Agregar Experiencia</span>
                  </div>}
                {this.state.add === true &&
                  <form onSubmit={this.addExperience.bind(this)}>
                    <div className='input-group'>
                      <select id='game' className='form-control'>
                        <option selected>Seleccionar juego...</option>
                        {this.state.games.map((item, index) => (
                          <option key={index} value={item.id + ',' + item.name}>{item.name}</option>
                        ))}
                      </select>
                      <select id='playedHours' className='form-control'>
                        <option selected>cantidad de horas jugadas...</option>
                        <option value='99'>menos de 99</option>
                        <option value='100'>mas de 100</option>
                        <option value='500'>mas de 500</option>
                        <option value='1000'>mas de 1000</option>
                        <option value='5000'>mas de 5000</option>
                        <option value='10000'>mas de 10000</option>
                      </select>
                    </div>
                    <button type='submit' className='btn btn-add-experience'>Agregar</button>
                  </form>}
              </div>
            </div>
          </div>
          <button className={'new-animated btn btn-rounded-v2 blue small with-small-radius btn-with-loading ' + this.state.buttonClass} onClick={this.saveExperiences.bind(this)}>Guardar cambios</button>

        </div>
        <div className='mb-3 text-right gohst-box' />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile
})

export default connect(
  mapStateToProps
)(UserSettingsExperience)
