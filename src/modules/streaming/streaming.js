
import axios from 'axios'

class Streaming {
  async getTwitchByUsername (username) {
    await axios({
      method: 'get',
      url: 'https://api.twitch.tv/kraken/channels/39276140/videos',
      headers: {
        'Client-ID': 'xigxwefe88j3eapafqiyuyici8bj50',
        Accept: 'application/vnd.twitchtv.v5+json'
      }
    }
    ).then(res => {
      return res.data.videos
    })
  }
}

const streaming = new Streaming()

export default streaming
