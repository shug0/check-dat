import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Formik } from 'formik'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha'


import Button from 'app/components/common/Button/Button'
import Input from 'app/components/common/Input/Input'
import SignupValidationSchema from './SignupValidationSchema'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default class SignupForm extends PureComponent {
  constructor (props) {
    super(props)
    this.captcha = React.createRef()
  }

  static defaultProps = {
    initialValues: {
      email: '',
      password: '',
      captcha: ''
    }
  }

  static propTypes = {
    initialValues: PropTypes.object,
    handleSubmit: PropTypes.func
  }

  componentDidMount () {
    // this.captcha.current.execute()
  }

  render () {
    const { initialValues, handleSubmit } = this.props

    return (
      <Formik
        initialValues={initialValues}
        validate={SignupValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values)
            .then(() => {
              alert('💃')
            })
        }}
        render={({isSubmitting}) => (
          <Form>
            <FormWrapper>
              <Field name="email" type="email" label="Email" component={Input}/>
              <Field name="password" type="password" label="Password" component={Input}/>
              <Field name="captcha" render={({ form }) => (
                <ReCAPTCHA
                  ref={this.captcha}
                  size="invisible"
                  sitekey="6LdcHmYUAAAAAHPXmJCKktgyJcvhRWJHl3QyhcOy"
                  onChange={value => form.setFieldValue('captcha', value)}
                />
              )}/>
            </FormWrapper>

            <Button color='primary' type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      />
    )
  }
}
