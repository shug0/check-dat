import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'

class RenderSessionUserProps extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  state = {
    user: {},
    loading: true
  }

  unsubscriber = null

  componentDidMount () {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user, loading: false })
    })
  }

  componentWillUnmount () {
    this.unsubscriber()
  }

  render () {
    const { user, loading } = this.state
    return this.props.children(user, loading)
  }
}

export default RenderSessionUserProps
