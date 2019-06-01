import React from 'react'
import PropTypes from 'prop-types'
import { styled, withTheme } from '@ui/theme'
// import { IconCheckboxOn, IconCheckboxOff } from '@ui/atoms'
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  ${'' /* padding: ${({ theme }) => theme.paddings.main}px; */}
  box-shadow: 0 0 16px rgba(0,0,0,0.16);
`

export const Header = withTheme((
  {
    // value, disabled, error, onPress, theme
  },
) => (
  <Wrapper /* onClick={onPress && !disabled ? onPress : undefined}*/>
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

Header.propTypes = {
  // value: PropTypes.bool,
  // error: PropTypes.string,
  // disabled: PropTypes.bool,
  // onPress: PropTypes.func,
}
