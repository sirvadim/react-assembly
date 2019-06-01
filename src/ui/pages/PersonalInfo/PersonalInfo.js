import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
  TextArea,
  Background,
  Button,
  GradientButton,
} from '@ui/molecules'
import { Header, Footer, PersonalInfo1, PersonalInfo2 } from '@ui/organisms'
import { styled, theme } from '@ui/theme'
import Slider from 'react-slick'

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
const Wrapper = styled.div`
  height: 1045px;
  width: max-content;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`
// width: max-content;
// text-align: center;

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const PersonalInfo = ({}) => (
  <div>
    <Background />
    <Header />
    <Wrapper>
      <PersonalInfo1 />
    </Wrapper>
    <Footer />
  </div>
)

PersonalInfo.propTypes = {}
