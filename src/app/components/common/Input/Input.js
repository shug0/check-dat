import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transparentize } from 'polished'

const LabelWrapper = styled.label`
  display: block;
  font-weight: 500;
  padding-bottom: 0.5rem;
  color: ${({ theme, error }) => error ? theme.colors.warning : theme.colors.fontLight};
`

const InputWrapper = styled.input`
  border-radius: 4px;
  background: white;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  display: inline-block;
  outline: 0;
  box-shadow: 
    0 4px 6px rgba(50,50,93,.11), 
    0 1px 3px rgba(0,0,0,.08);
  ;
  border: 2px solid ${({ theme, error }) => error ? (
    transparentize(0.5, theme.colors.warning)
  ) : (
    'transparent'
  )};
  transition: ease all 0.1s;
  font-weight: 300;
  width: 100%;
  margin-bottom: 1rem;
  &:active, &:focus {
    box-shadow: 
      0 7px 14px rgba(50,50,93,.1), 
      0 3px 6px rgba(0,0,0,.08);
    ;
    border: 2px solid ${({ theme }) => transparentize(0.5, theme.colors.secondary)};
  }
`

class Input extends PureComponent {
  static propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  static defaultProps = {
    type: 'text'
  }

  render () {
    const { field, label, form, type } = this.props
    const { touched, errors } = form
    const { name } = field

    return (
      <React.Fragment>
        {touched[name] && errors[name] ? (
          <LabelWrapper for={name} error>{label} : {errors[name]}</LabelWrapper>
        ) : (
          <LabelWrapper for={name}>{label}</LabelWrapper>
        )}
        <InputWrapper {...field} type={type} error={errors[name]} />
      </React.Fragment>
    )
  }
}

export default Input
