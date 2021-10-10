import auth0 from '../../modules/authentication-1.0.0/auth'
import axios from 'axios'
import store from '../../utils/store'

class LolModule {
  // async getGames () {
  //   auth0.checkAndAuthenticate()
  //   const userStorageInfo = store.getState()
  //   const res = await axios({
  //     method: 'get',
  //     url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Games/',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Accept: 'application/json',
  //       Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
  //     }
  //   }
  //   )
  //   if (res == null) {
  //     return null
  //   }
  //   return res.data
  // }

  // async getGameById (gameId) {
  //   auth0.checkAndAuthenticate()
  //   const userStorageInfo = store.getState()
  //   const res = await axios({
  //     method: 'get',
  //     url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Games/' + gameId,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Accept: 'application/json',
  //       Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
  //     }
  //   }
  //   )
  //   if (res == null) {
  //     return null
  //   }
  //   return res.data
  // }

  // async getGameByName (gameId) {
  //   auth0.checkAndAuthenticate()
  //   const userStorageInfo = store.getState()
  //   const res = await axios({
  //     method: 'get',
  //     url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Games/getByName/' + gameId,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Accept: 'application/json',
  //       Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
  //     }
  //   }
  //   )
  //   if (res == null) {
  //     return null
  //   }
  //   return res.data
  // }

  async syncLol (region, username) {
    auth0.checkAndAuthenticate()
    const userStorageInfo = store.getState()
    const res = await axios({
      method: 'post',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Lol/register',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
      },
      data: {
        summonerName: username,
        region: region
      }
    }).catch(() => {
      return 'error'
    })
    if (res === null || res === undefined) {
      return null
    }
    return res.data
  }

  async getLolUserInfo () {
    auth0.checkAndAuthenticate()
    const userStorageInfo = store.getState()
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Lol/account/' + userStorageInfo.userProfile.lolAccount.id,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + userStorageInfo.userToken.accessToken
      }
    }).catch(() => {
      return 'error'
    })
    if (res === null || res === undefined) {
      return null
    }
    return res.data
  }
}

const lolModule = new LolModule()

export default lolModule
