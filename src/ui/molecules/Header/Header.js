import React from 'react'
import PropTypes from 'prop-types'
import { styled, withTheme } from '@ui/theme'
// import { IconCheckboxOn, IconCheckboxOff } from '@ui/atoms'

export const Header = withTheme((
  {
    // value, disabled, error, onPress, theme
  },
) => (
  <div /* onClick={onPress && !disabled ? onPress : undefined}*/>
    {/* {value ? (
        <IconCheckboxOn
          color={disabled ? theme.pallete.lightGray : theme.pallete.mainBlue}
        />
      ) : (
        <IconCheckboxOff
          color={error ? theme.pallete.mainRed : theme.pallete.mainBlue}
        />
      )} */}
  </div>
))

export const Header2 = (
  {
    // value, disabled, error, onPress, theme
  },
) => (
  <div /* onClick={onPress && !disabled ? onPress : undefined}*/>
    {/* {value ? (
        <IconCheckboxOn
          color={disabled ? theme.pallete.lightGray : theme.pallete.mainBlue}
        />
      ) : (
        <IconCheckboxOff
          color={error ? theme.pallete.mainRed : theme.pallete.mainBlue}
        />
      )} */}
  </div>
)

class Header3 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
console.log(Header)
console.log(Header2)
console.log(Header3)
Header.propTypes = {
  // value: PropTypes.bool,
  // error: PropTypes.string,
  // disabled: PropTypes.bool,
  // onPress: PropTypes.func,
}
