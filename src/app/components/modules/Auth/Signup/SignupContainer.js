import React, { PureComponent } from 'react'

// import base from 'app/firebase/rebase'

import SignupForm from 'app/components/form/SignupForm/SignupForm'

class SignupContainer extends PureComponent {
  handleSubmit = (values) => new Promise((resolve, reject) => {

  })

  render () {
    return (
      <SignupForm
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SignupContainer
