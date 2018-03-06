import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`

`

class SearchInput extends PureComponent {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.state.value && this.props.handleSearch(this.state.value)
    }
  }

  render () {
    const { value } = this.state

    return (
      <StyledInput
        value={value}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
      />
    )
  }
}

export default SearchInput
