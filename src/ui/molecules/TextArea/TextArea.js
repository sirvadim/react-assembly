import React from 'react'
import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'
import { FormLabel } from '@ui/molecules'
import { HBox, VBox } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'

const Container = styled.div`
  min-height: 125px;
  display: flex;
  flex-direction: column;
`
const FieldContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.pallete.main_color};
  border-radius: 30px;
  border: 1px
    ${({ error, valid, theme }) =>
      error
        ? theme.pallete.pink_2
        : valid
        ? theme.pallete.green
        : theme.pallete.black}
    solid;
`

const StyledTextarea = styled.textarea`
  border: none;
  resize: none;
  background-color: transparent;
  height: 101px;
  flex: 1;
  line-height: 24px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  padding: 10px 0;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.gray : theme.pallete.gray};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.gray};
  }
`

export const TextArea = props => {
  const [focused, setFocused] = React.useState(false)
  const handleFocus = e => {
    if (props.onFocus) {
      props.onFocus(e)
    }
    setFocused(true)
  }
  const handleBlur = e => {
    if (props.onBlur) {
      props.onBlur(e)
    }
    setFocused(false)
  }
  return (
    <Container>
      <FormLabel>{props.label}</FormLabel>
      <HBox height={theme.paddings.half} />
      <FieldContainer theme={theme} focused={focused} error={props.error}>
        <VBox width={theme.paddings.main} />
        <StyledTextarea
          theme={theme}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={e => props.onChange(e.currentTarget.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <VBox width={theme.paddings.main} />
      </FieldContainer>
      <HBox height={theme.paddings.half} />
      {props.error ? (
        <InputError>{props.error}</InputError>
      ) : (
        <InputTip>
          {props.tip}
          {props.value.length}/600
        </InputTip>
      )}
    </Container>
  )
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  tip: PropTypes.string,

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
