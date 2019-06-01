import React from 'react'
import PropTypes from 'prop-types'
import { theme, styled } from '@ui/theme'
import { ButtonText } from '@ui/atoms/Typography'

// background: ${({ loading, theme }) =>
//   loading ? theme.pallete.nero : theme.pallete.white};
const ButtonContainer = styled('div')`
  border: 1px solid
    ${({ disabled, theme, loading }) =>
      loading
        ? theme.pallete.nero
        : disabled
        ? theme.pallete.silver
        : theme.pallete.radicalRed};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height}px;
  max-width: ${({ width }) => width}px;
  border-radius: 30px;
  background: ${({ theme }) => theme.pallete.btn_color};
`
// linear-gradient(to right, #e66465, #9198e5);
export const Button = ({
  loading,
  disabled,
  children,
  onPress,
  width,
  height,
}) => (
  <ButtonContainer
    disabled={disabled}
    loading={loading}
    height={height}
    width={width}
    onClick={loading || disabled ? () => undefined : onPress}
  >
    <ButtonText color={disabled ? theme.pallete.lightGray : theme.pallete.nero}>
      {children}
    </ButtonText>
  </ButtonContainer>
)

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
