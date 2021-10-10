import auth0 from '../../modules/authentication-1.0.0/auth'
import axios from 'axios'
import store from '../../utils/store'

class UserInfo {
  async registerUser (token, data) {
    const register = true
    await axios({
      method: 'post',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/register',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
      data: data
    }).catch(function () {
      return false
    })
    return register
  }

  async getUserInfo () {
    await auth0.checkAndAuthenticate()
    const userStorageInfo = await store.getState()
    const userInfo = userStorageInfo
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/logged',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + userInfo.userToken.accessToken
      }
    }
    )
    if (res == null) {
      return null
    }
    return res.data
  }

  async getOwnUserInfo () {
    await auth0.checkAndAuthenticate()
    const userStorageInfo = store.getState()
    const userInfo = userStorageInfo
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/getByUsername/' + userInfo.userProfile.username,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + userInfo.userToken.accessToken
      }
    }
    )
    if (res == null) {
      return null
    }
    if (res.data.id && res.data.id !== '') {
      store.dispatch({
        type: 'UPDATE_USER_INFO',
        data: res.data
      })
    }
  }

  async updateUserInfo (data) {
    auth0.checkAndAuthenticate()
    const updated = false
    const userStorageInfo = store.getState()
    const userInfo = userStorageInfo.userProfile
    if (data.username !== userInfo.username) {
      const checkUsername = await this.checkUsername(data.username)
      if (checkUsername != null && checkUsername.exists) {
        return 'already_username_used'
      }
    }

    await axios({
      method: 'put',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/' + userInfo.id,
      querys: {
        id: userInfo.id
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
      },
      data: data
    }).then((resp) => {
      store.dispatch({
        type: 'UPDATE_USER_INFO',
        data: resp.data
      })
    })
    return updated
  }

  async updateUserTags (data) {
    auth0.checkAndAuthenticate()
    const updated = false
    const userStorageInfo = store.getState()
    const userInfo = userStorageInfo.userProfile
    if (data != null) {
      await axios({
        method: 'put',
        url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/' + userInfo.id + '/tags',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
        },
        data: data
      }).then((resp) => {
        store.dispatch({
          type: 'UPDATE_USER_TAGS',
          data: data
        })
      })
    }
    return updated
  }

  async updateUserGames (games) {
    auth0.checkAndAuthenticate()
    const updated = false
    const userStorageInfo = store.getState()
    const userInfo = userStorageInfo.userProfile
    if (games != null) {
      await axios({
        method: 'put',
        url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/' + userInfo.id + '/games',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
        },
        data: games
      }).then((resp) => {
        store.dispatch({
          type: 'UPDATE_USER_GAMES',
          data: resp.data
        })
      })
    }
    return updated
  }

  async updateUserSetup (setup) {
    auth0.checkAndAuthenticate()
    const updated = false
    const userStorageInfo = store.getState()
    const userInfo = userStorageInfo.userProfile
    if (setup != null) {
      await axios({
        method: 'put',
        url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/' + userInfo.id + '/setup',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
        },
        data: setup
      }).then((resp) => {
        store.dispatch({
          type: 'UPDATE_USER_SETUP',
          data: resp.data
        })
      })
    }
    return updated
  }

  async updateUserProfileImage (image) {
    auth0.checkAndAuthenticate()
    const updated = false
    const userStorageInfo = store.getState()
    const userInfo = userStorageInfo.userProfile
    if (image != null) {
      await axios({
        method: 'put',
        url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/' + userInfo.id + '/image',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
        },
        data: '"' + image + '"'
      }).then((resp) => {
        store.dispatch({
          type: 'UPDATE_USER_PROFILE_IMAGE',
          data: '' + resp.data
        })
      })
    }
    return updated
  }

  async updateUserStatus (status) {
    auth0.checkAndAuthenticate()
    const updated = false
    const userStorageInfo = store.getState()
    const userInfo = userStorageInfo.userProfile
    if (status != null) {
      await axios({
        method: 'put',
        url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/' + userInfo.id + '/status',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
        },
        data: status
      }).then((resp) => {
        store.dispatch({
          type: 'UPDATE_USER_STATUS',
          data: resp.data
        })
      })
    }
    return updated
  }

  async getRelations () {
    auth0.checkAndAuthenticate()
    const userStorageInfo = store.getState()
    const userInfo = userStorageInfo.userProfile
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/relations',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
      },
      data: {
        id: userInfo.id
      }
    })
    if (res == null) {
      return null
    }
    return res.data
  }

  async getUserInfoById (id) {
    console.log('empezo')
    await auth0.checkAndAuthenticate()
    const userStorageInfo = store.getState()
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/' + id,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
      },
      data: {
        id: id
      }
    }
    )
    if (res == null) {
      return null
    }
    return res.data
  }

  async getUserInfoByName (name) {
    await auth0.checkAndAuthenticate()
    const userStorageInfo = store.getState()
    let accessToken = ''
    if (userStorageInfo.userToken) {
      accessToken = 'Bearer ' + userStorageInfo.userToken.accessToken
    }
    let playerProfile = {
      logged: accessToken !== '',
      data: null
    }
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/getByUsername/' + name,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: accessToken
      },
      data: {
        id: name
      }
    }
    ).catch(() => {
      return playerProfile
    })
    if (res == null) {
      return playerProfile
    }
    playerProfile = {
      logged: accessToken !== '',
      data: res.data
    }
    return playerProfile
  }

  async checkUsername (username) {
    if (username !== null && username !== undefined) {
      const res = await axios({
        method: 'get',
        url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Users/CheckUsername/' + username,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        }
      }
      )
      return res.data
    } else {
      return false
    }
  }
}

const userInfo = new UserInfo()

export default userInfo
