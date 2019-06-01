import React from 'react'
import PropTypes from 'prop-types'
import { styled, withTheme } from '@ui/theme'
import twitter from '@ui/assets/twitter.png'
import instagram from '@ui/assets/instagram-good.png'
import facebook from '@ui/assets/facebook.png'
import youtube from '@ui/assets/youtube (1).png'
// import { IconCheckboxOn, IconCheckboxOff } from '@ui/atoms'
const Wrapper = styled.div`
  width: 100%;
  height: 319px;
  background-color: #282828;
  ${'' /* padding: ${({ theme }) => theme.paddings.main}px; */}
  box-shadow: 0 0 16px rgba(0,0,0,0.16);
`
const Text = styled.div`
  font-size: 18px;
  font-family: 'Roboto';
  color: #ffffff;
`
const Img = styled.img`
  padding-right: 20px;
  padding-top: 15px;
`
const MediaBlock = styled.div`
  padding-top: 158px;
  padding-left: 255px;
`
export const Footer = withTheme((
  {
    // value, disabled, error, onPress, theme
  },
) => (
  <Wrapper /*onClick={onPress && !disabled ? onPress : undefined}*/>
    <MediaBlock>
      <Text>© 2019-2020 All Rights Reserved.</Text>
      <Img src={facebook} alt="" />
      <Img src={twitter} alt="" />
      <Img src={youtube} alt="" />
      <Img src={instagram} alt="" />
    </MediaBlock>
    {/* {value ? (
        <IconCheckboxOn
          color={disabled ? theme.pallete.lightGray : theme.pallete.mainBlue}
        />
      ) : (
        <IconCheckboxOff
          color={error ? theme.pallete.mainRed : theme.pallete.mainBlue}
        />
      )} */}
  </Wrapper>
))

Footer.propTypes = {
  // value: PropTypes.bool,
  // error: PropTypes.string,
  // disabled: PropTypes.bool,
  // onPress: PropTypes.func,
}
