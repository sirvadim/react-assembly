import React from 'react'
import PropTypes from 'prop-types'
import { theme, styled } from '@ui/theme'
import { ButtonText } from '@ui/atoms/Typography'

// background: ${({ loading, theme }) =>
//   loading ? theme.pallete.nero : theme.pallete.white};
const ButtonContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height}px;
  max-width: ${({ width }) => width}px;
  border-radius: 30px;
  background: ${({ theme }) => theme.pallete.gradient_1};
`
export const GradientButton = ({
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

GradientButton.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
