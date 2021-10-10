import auth0 from 'auth0-js'
import store from '../../utils/store'
import userInfo from '../userInfo-1.0.0/userInfo'

class Auth {
  constructor () {
    this.webAuth = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: process.env.REACT_APP_OAUTH_DOMAIN,
      audience: process.env.REACT_APP_OAUTH_AUDIENCE,
      clientID: process.env.REACT_APP_OAUTH_CLIENTID,
      redirectUri: process.env.REACT_APP_OAUTH_REDIRECTURI,
      responseType: process.env.REACT_APP_OAUTH_RESPONSETYPE,
      scope: process.env.REACT_APP_OAUTH_SCOPE
    })
    // this.webAuth.crossOriginVerification()
    this.signIn = this.signIn.bind(this)
    this.signUp = this.signUp.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  // SIGN UP AUTH0
  async signUp (email, name, username, birth, password) {
    const usernameChecked = userInfo.checkUsername(username)

    if (usernameChecked.exists) {
      return 'useranme'
    }

    let register = true
    const signup = await this.webAuth.signup({
      connection: process.env.REACT_APP_OAUTH_CONNECTIONTYPE,
      email: email,
      name: name,
      password: password,
      user_metadata: {
        birth: birth,
        username: username
      }
    }, (err, authResult) => {
      if (err !== null && err !== undefined) {
        register = false
      }
      if (register) {
        this.signIn(email, password)
      }
    })
    if (register) {
      store.dispatch({
        type: 'REGISTER_PENDING',
        data: {
          register: 'PENDING',
          temporal: {
            name: name,
            username: username,
            birth: birth
          }
        }
      })
    }
    return signup
  }

  // LOGIN AUTH0
  async signIn (email, password) {
    store.dispatch({
      type: 'LOGIN_PROCESS'
    })
    return new Promise((resolve, reject) => {
      this.webAuth.login({
        connection: 'Username-Password-Authentication',
        username: email,
        password: password,
        grant_type: 'password'
      }, (err) => {
        store.dispatch({
          type: 'LOGIN_FAIL'
        })
        if (err) {
          resolve(err.code)
        } else {
          resolve(reject)
        }
      })
    })
  }

  // Check and Authenticate user
  async checkAndAuthenticate () {
    const authenticated = false
    const userStore = store.getState()
    if (userStore.userToken && userStore.userToken.sessionStarted && userStore.userToken.sessionStarted !== '') {
      if (this.calculateBetweenDatesInMinutes(userStore.userToken.sessionStarted) > (userStore.userToken.expiresIn / 60)) {
        await this.setUserToken()
      } else {
        return true
      }
    } else {
      if ((userStore.userProfile == null || userStore.userProfile === undefined) && userStore.userStatus !== 'LOGGED') {
        await this.handlingLogIn()
      } else {
        await this.setUserToken()
      }
    }
    return authenticated
  }

  // Set userToken
  async handlingLogIn () {
    const userStore = store.getState()
    // Get Token
    return new Promise((resolve, reject) => {
      this.webAuth.checkSession({
        audience: process.env.REACT_APP_OAUTH_AUDIENCE,
        scope: 'read:order write:order'
      }, (err, authInfo) => {
        if (err) {
          resolve(err.code)
        } else {
          authInfo.sessionStarted = new Date()
          store.dispatch({
            type: 'UPDATE_TOKEN',
            data: {
              token: authInfo
            }
          })
          if (userStore.register === 'PENDING') {
            // SIGN UP INWARD
            userInfo.registerUser(authInfo.accessToken, userStore.temporal).then(rest => {
              store.dispatch({
                type: 'REGISTER_UPDATE',
                data: {
                  register: 'ACTIVE'
                }
              })
              this.setUserInformation(authInfo.accessToken)
            })
          } else {
            this.setUserInformation(authInfo.accessToken)
          }
        }
      })
    })
  }

  // Set userToken
  async setUserToken () {
    const token = await this.webAuth.checkSession({
      audience: process.env.REACT_APP_OAUTH_AUDIENCE,
      scope: 'read:order write:order'
    }, (err, authResult) => {
      if (err) {
      } else {
        const authInfo = authResult
        authInfo.sessionStarted = new Date()
        store.dispatch({
          type: 'UPDATE_TOKEN',
          data: {
            token: authInfo
          }
        })
      }
    })
    return token
  }

  // Set user Information
  async setUserInformation () {
    await this.checkAndAuthenticate().then(result => {
      const userStore = store.getState()
      userInfo.getUserInfo(userStore.userToken.accessToken).then((userData) => {
        store.dispatch({
          type: 'LOGIN',
          data: {
            userProfile: userData
          }
        })
      })
    })
  }

  // Logout
  async logOut () {
    store.dispatch({
      type: 'LOGOUT'
    })
    await this.webAuth.logout({
      returnTo: process.env.REACT_APP_OAUTH_LOGOUT
    })
  }

  calculateBetweenDatesInMinutes (date) {
    var startTime = new Date(date)
    var endTime = new Date()
    var difference = endTime.getTime() - startTime.getTime()
    var resultInMinutes = Math.round(difference / 60000)
    return resultInMinutes
  }
}

const auth0Client = new Auth()

export default auth0Client
