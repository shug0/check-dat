import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'app/components/common/index'

import {
  Wrapper,
  Label,
  Result,
  ValidateWrapper,
  ValidateButton
} from './StyledComponent'

class AddFriendModalScreen extends PureComponent {
  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    addFriend: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    userFound: PropTypes.object,
    currentUserMail: PropTypes.string.isRequired
  }

  static defaultProps = {
    loading: false
  }

  state = {
    searchValue: '',
    hasSearched: false
  }

  handlesearch = (e) => {
    e.preventDefault()
    this.props.searchUser(this.state.searchValue)
    this.setState({ hasSearched: true })
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  render () {
    const { userFound, loading, addFriend } = this.props
    const { hasSearched, searchValue } = this.state

    const userNotFound = !loading && hasSearched && !userFound
    const isFound = !loading && userFound

    return (
      <Wrapper>
        <section>
          <form onSubmit={this.handlesearch}>
            <Label>Mail of your friend</Label>
            <Input type='text' value={searchValue} onChange={this.handleChange} />
          </form>
          <Result>
            {loading && <div>Loading...</div>}
            {userNotFound && (
              `Aucun utilisateur avec ce mail 😳`
            )}
            {isFound && (
              <ValidateWrapper>
                Voulez vous ajoutez {userFound.pseudo} à vos amis ?
                <ValidateButton onClick={() => addFriend(userFound)}>
                  Validez
                </ValidateButton>
              </ValidateWrapper>
            )}
          </Result>
        </section>
      </Wrapper>
    )
  }
}

export default AddFriendModalScreen
