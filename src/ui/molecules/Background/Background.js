import React from 'react'
import PropTypes from 'prop-types'

import { styled, withTheme } from '@ui/theme'
import { HLevel5 } from '@ui/atoms/Typography'

import abstractionImg from '@ui/assets/Path 13.png'

const Abstraction = styled.img`
  position: fixed;
  top: 30%;
  /* top: 0; */
  /* @media (min-width: 320px) {
  }
  @media (min-height: 100px) {
    right: 44px;
    top: 862px;
  } */
`

const Wrapper = styled.div`
  position: absolute;
  /* top: 0; */
  @media (min-width: 320px) {
  }
  @media (min-height: 100px) {
    right: 44px;
    bottom: 862px;
  }
  height: 100%;
  /* width: 100%; */
`

export const Background = withTheme(({ theme }) => (
  // <Wrapper>
  <Abstraction src={abstractionImg} alt="" />
  // </Wrapper>
))

Background.propTypes = {}
