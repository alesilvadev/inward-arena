import 'react-activity-feed/dist/index.css'
import './feed_style.scss'
import { connect } from 'react-redux'
import { StreamApp, FlatFeed, InfiniteScrollPaginator, Activity } from 'react-activity-feed'
import Loading from '../../components/loading-1.0.0/loading'
import { Redirect } from 'react-router-dom'
import React, { useState } from 'react'

function HomeFeed (props) {
  const [userSelected, setuserSelected] = useState({ name: '', goTo: false })

  if (userSelected.goTo === true) {
    return <Redirect to={'/' + userSelected.name} />
  }

  if (!props.userProfile) {
    return <Loading />
  }

  const LoadingComponent = () => (
    <Loading />
  )

  const setUser = (data) => {
    setuserSelected({
      name: data.name,
      goTo: true
    })
  }

  return (
    <div className='container' id='wallFeed'>
      <StreamApp
        apiKey={process.env.REACT_APP_STREAM_API_KEY}
        appId={process.env.REACT_APP_STREAM_APP_ID}
        token={props.userProfile.feedToken}
      >
        <FlatFeed
          notify
          Paginator={InfiniteScrollPaginator}
          LoadingIndicator={LoadingComponent}
          Activity={(props) => (
            <Activity
              {...props}
              onClickUser={(user) => setUser(user.data)}
            />
          )}

        />

      </StreamApp>
    </div>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile
})

export default connect(mapStateToProps)(HomeFeed)
