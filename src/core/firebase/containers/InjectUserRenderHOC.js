import React, { PureComponent } from 'react'
import firebase from 'firebase'

class InjectUserRenderHOC extends PureComponent {
  state = {
    user: {},
    loading: true
  }

  unsubscriber = null

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user, loading: false })
    })
  }

  componentWillUnmount() {
    this.unsubscriber()
  }

  render() {
    const { user, loading } = this.state
    return this.props.children(user, loading)
  }
}

export default InjectUserRenderHOC
