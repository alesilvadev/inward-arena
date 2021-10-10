import React, { Component } from 'react'
import { connect } from 'react-redux'
import userInfo from '../../modules/userInfo-1.0.0/userInfo'
import Loading from '../../components/loading-1.0.0/loading'

class UserSettingsRelations extends Component {
  constructor (props) {
    super(props)
    this.state = {
      relations: []
    }
  }

  async componentDidMount () {
    const relations = await userInfo.getRelations()
    this.setState({
      ...this.state,
      relations: relations
    })
  }

  render () {
    return (
      <div id='userSettingsRelations'>
        <div className='rounded user-settings-general mb-3'>
          <div className='box-title border-bottom p-3'>
            <h6 className='m-0'>Solicitudes</h6>
            <p className='mb-0 mt-0 small'>Centro de solicitudes de otros jugadores hacia ti
            </p>
          </div>
          <div className='box-body p-3'>
            <div>
              <div>
                <div className='col col-sm-12'>
                  <div>
                    {this.state.relations.length === 0 &&
                      <Loading />}
                    {this.state.relations.length > 0 && this.state.relations.map((item, index) => (
                      <div className='p-3 d-flex align-items-center osahan-post-header' key={index}>
                        <div className='box-image-rounded-small'>
                          <img src='https://inwardimages.blob.core.windows.net/profile-images/637184490754845938-5e53c883f449fe0d4b935163.jpg' className='img-fluid rounded-circle profile-image' id='profileImage' alt='Responsive image' />
                        </div>
                        <div className='font-weight-bold mr-3'>
                          <div className='text-truncate'>{item.name}
                          </div>
                          <div className='small'>{item.username}
                          </div>
                        </div>
                        <span className='ml-auto mb-auto'>
                          <div className='btn-group'>
                            <button className='btn'>Confirmar</button>
                            <button className='btn'>Eliminar</button>
                          </div>
                          <br />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-3 text-right gohst-box' />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  userToken: state.userToken,
  userStatus: state.userStatus
})

export default connect(
  mapStateToProps
)(UserSettingsRelations)
