import React from 'react'
import { connect } from 'react-redux'
import { StreamApp, NotificationDropdown } from 'react-activity-feed'
import 'react-activity-feed/dist/index.css'

function NotificationFeed ({ userProfile }) {
  const Placeholder = () => (
    <p>No tienes notifiaciones</p>
  )

  const Header = () => (
    <p>Notificaciones</p>
  )
  return (
    <StreamApp
      apiKey={process.env.REACT_APP_STREAM_API_KEY}
      appId={process.env.REACT_APP_STREAM_APP_ID}
      token={userProfile.feedToken}
    >
      <NotificationDropdown notify width={250} Placeholder={<Placeholder />} Header={<Header />} />
    </StreamApp>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile
})

export default connect(mapStateToProps)(NotificationFeed)
