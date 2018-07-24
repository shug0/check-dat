import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Formik } from 'formik'
import styled from 'styled-components'

import Button from 'app/components/common/Button/Button'
import Input from 'app/components/common/Input/Input'
import SignupValidationSchema from './SignupValidationSchema'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SignupForm = (props) => (
  <Formik
    initialValues={props.initialValues}
    validate={SignupValidationSchema}
    onSubmit={(values, { setSubmitting }) => {
      props.handleSubmit(values)
        .then(() => {
          console.log("C'est une réussite")
        })
    }}
    render={({ isSubmitting }) => (
      <Form>
        <FormWrapper>
          <Field name="email" label="Email" component={Input} />
          <Field name="displayName" label="Display Name" component={Input} />
        </FormWrapper>

        <Button color='primary' type='submit' disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
    )}
  />
)

SignupForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func
}

export default SignupForm
