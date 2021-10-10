import Auth from '../authentication-1.0.0/auth'
import store from '../../utils/store'

import axios from 'axios'

class FeedbackModule {
  sendFeedback (message) {
    Auth.checkAndAuthenticate()
    const storeInfo = store.getState()
    axios({
      method: 'post',
      url: process.env.REACT_APP_INWARD_DOMAIN + '/api/Feedbacks',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + storeInfo.userToken.accessToken
      },
      data: JSON.stringify({
        message: message
      })
    })
    return 'OK'
  }
}

const feedback = new FeedbackModule()

export default feedback
