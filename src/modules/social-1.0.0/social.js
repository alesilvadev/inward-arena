import auth0 from '../../modules/authentication-1.0.0/auth'
import axios from 'axios'
import store from '../../utils/store'

class Social {
  async getSuggestions () {
    auth0.checkAndAuthenticate()
    const userStorageInfo = store.getState()
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Relations/suggestions',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
      }
    }
    )
    if (res == null) {
      return null
    }
    return res.data
  }

  async followUser (id, entityType) {
    const data = {
      id: id,
      entityType: entityType
    }
    auth0.checkAndAuthenticate()
    const userStorageInfo = store.getState()
    await axios({
      method: 'post',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Relations/follow',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
      },
      data: data
    }
    )
  }

  async unFollowUser (id, entityType) {
    const data = {
      id: id,
      entityType: entityType
    }
    auth0.checkAndAuthenticate()
    const userStorageInfo = store.getState()
    await axios({
      method: 'post',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Relations/unfollow',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
      },
      data: data
    }
    )
  }
}

const social = new Social()

export default social
