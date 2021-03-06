import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Formik } from 'formik'
import styled from 'styled-components'

import { Button, FormInput } from 'app/components/common'

import loginValidationSchema from './loginValidationSchema'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-right: 1rem;
  }
`

const ErrorWrapper = styled.p`
  margin-bottom: 1rem;
  color: ${({theme}) => theme.colors.warning};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-left: 0.7rem;
  }
`

export default class LoginForm extends Component {
  static defaultProps = {
    initialValues: {
      email: '',
      password: ''
    }
  }

  static propTypes = {
    error: PropTypes.any,
    initialValues: PropTypes.object,
    handleSubmit: PropTypes.func
  }

  render () {
    const { initialValues, handleSubmit, error } = this.props

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting)
        }}
        render={({isSubmitting}) => (
          <Form>
            {error && (
              <ErrorWrapper>
                {error.message}
              </ErrorWrapper>
            )}
            <FormWrapper>
              <Field name="email" type="email" label="Email" component={FormInput}/>
              <Field name="password" type="password" label="Password" component={FormInput}/>
            </FormWrapper>

            <ButtonWrapper>
              <Button to='/signup'>
                Signup
              </Button>

              <Button color='primary' type='submit' disabled={isSubmitting}>
                Login
              </Button>
            </ButtonWrapper>
          </Form>
        )}
      />
    )
  }
}
