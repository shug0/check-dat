import { Component } from 'react'
import PropTypes from 'prop-types'

import base from 'app/firebase/rebase'

class RenderDBUserProps extends Component {
  state = {
    user: {},
    loading: true
  }

  componentDidMount () {
    const { uid } = this.props

    base.listenToDoc(`users/${uid}`, {
      context: this,
      then (data) {
        this.setState({
          user: data,
          loading: false
        })
      }
    })
  }

  render () {
    const { user, loading } = this.state

    return (
      this.props.children(user, loading)
    )
  }
}

RenderDBUserProps.propTypes = {
  uid: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default RenderDBUserProps
