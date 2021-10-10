import React, { Component } from 'react'
import WizzardFunctional from './wizzard_functional'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Wizzard extends Component {
  render () {
    if (this.props.userStatus == null && this.props.register !== 'PENDING') {
      return <Redirect to='/' />
    }
    return (
      <div>
        <WizzardFunctional />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  userToken: state.userToken,
  userStatus: state.userStatus,
  register: state.register
})

export default connect(mapStateToProps)(Wizzard)
