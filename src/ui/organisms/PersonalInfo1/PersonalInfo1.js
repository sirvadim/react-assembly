import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
  TextArea,
  Background,
  Button,
  GradientButton,
  Container,
} from '@ui/molecules'
import { styled, theme } from '@ui/theme'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
// import { styled } from '@ui/theme'
// import {
//   Header,
//   ButtonAccent,
//   SelectField,
//   CheckboxWithText,
//   TextField,
// } from '@ui/molecules'
// import { DeliveryTime } from '@ui/organisms'
// import { routes } from '../../../routes'
const initialValues = {
  first_name: '',
  last_name: '',
  description: '',
}

const schema = Yup.object().shape({
  first_name: Yup.string()
    .matches(/^[a-zA-Z]/, {
      excludeEmptyString: true,
      message: 'incorrect',
    })
    .required('Please enter your full name'),
  last_name: Yup.string().matches(/^[a-zA-Z]/, {
    excludeEmptyString: true,
    message: 'incorrect',
  }),
  description: Yup.string()
    .matches(/^[a-zA-Z]/, {
      excludeEmptyString: true,
      message: 'incorrect',
    })
    .required('Please enter your description'),
})
const Wrapper = styled.div`
  /* height: 1045px; */
  margin: auto;
`
const NameWrapper = styled.div`
  display: flex;
`
// const Wrapper2 = styled.div``
export const PersonalInfo1 = ({}) => (
  <Formik
    validationSchema={schema}
    initialValues={initialValues}
    onSubmit={values => {
      console.log('values', values)
      // trigger({ login: values.username })
    }}
    render={props => (
      <Wrapper>
        <Container text="Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.">
          <form>
            <NameWrapper>
              <TextField
                width={300}
                height={40}
                label="First Name *"
                name="first_name"
                placeholder="Номер телефона или Email"
                // onChange={() => console.log('changing')}
                value={props.values.first_name}
                onChange={value => props.setFieldValue('first_name', value)}
                onBlur={props.handleBlur}
                error={props.touched.first_name && props.errors.first_name}
                // disabled={status === null ? false : true}
              />
              <TextField
                width={300}
                height={40}
                label="Last Name"
                name="last_name"
                placeholder="Номер телефона или Email"
                // onChange={() => console.log('changing')}
                value={props.values.last_name}
                onChange={value => props.setFieldValue('last_name', value)}
                onBlur={props.handleBlur}
                error={props.touched.last_name && props.errors.last_name}
                // disabled={status === null ? false : true}
              />
            </NameWrapper>
            <TextArea
              name="description"
              disabled={false}
              label="Description *"
              tip="min. 150 characters"
              placeholder="Share a bit about your work experience, cool projects you’ve completed, and your area of expertise."
              value={props.values.description}
              // value={store.state.value}
              onChange={value => {
                props.setFieldValue('description', value)
                // store.set({ value })
              }}
              error={props.touched.description && props.errors.description}
            />

            <Button
              children="Continue"
              onPress={() => {
                console.log(props.isValid)
                // if (!props.isValid) {
                //   console.log('invalid')
                //   // Snack_flag = true
                //   props.setFieldTouched('username', true, true)
                //   console.log(props)
                //   // if (!Object.keys(props.errors).length) {
                //   // console.log(Object.is({}, props.errors))
                //   if (props.errors.username) {
                //     // console.log('YES', props.errors !== {})
                //     console.log(props.errors)
                //
                //     snack(true)
                //   }
                // } else {
                //   console.log('valid')
                //   props.handleSubmit()
                //   //
                // }
                // console.log('press')
                // trigger({ login: 'sir.vadim2013@yandex.ru' })
              }}
              width={125}
              height={40}
              // disabled={status === null ? false : true}
            />
            <GradientButton
              children="Continue"
              onPress={() => {
                console.log(props.isValid)
                props.handleSubmit()
                // if (!props.isValid) {
                //   console.log('invalid')
                //   // Snack_flag = true
                //   props.setFieldTouched('username', true, true)
                //   console.log(props)
                //   // if (!Object.keys(props.errors).length) {
                //   // console.log(Object.is({}, props.errors))
                //   if (props.errors.username) {
                //     // console.log('YES', props.errors !== {})
                //     console.log(props.errors)
                //
                //     snack(true)
                //   }
                // } else {
                //   console.log('valid')
                //   props.handleSubmit()
                //   //
                // }
                // console.log('press')
                // trigger({ login: 'sir.vadim2013@yandex.ru' })
              }}
              width={125}
              height={40}
              // disabled={status === null ? false : true}
            />
          </form>
        </Container>
      </Wrapper>
    )}
  />
)

PersonalInfo1.propTypes = {}
