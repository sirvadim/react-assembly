import React, { useState } from 'react'
import PropTypes from 'prop-types'

// import { HBox, VBox, IconLoader, IconSuccess, FieldContainer } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel } from '@ui/molecules'
import { styled, withTheme } from '@ui/theme'

const TextFieldContainer = styled.div`
  box-sizing: border-box;
  flex-direction: row;
  border-radius: 30px;
  background-color: ${({ theme }) => console.log(theme)};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border: 1px
    ${({ error, valid, theme }) =>
      error
        ? theme.pallete.pink_2
        : valid
        ? theme.pallete.green
        : theme.pallete.black}
    solid;
`

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  height: ${({ height }) => height - 4}px;
  width: ${({ width }) => width - 40}px;
  padding-left: 20px;
  padding-right: 20px;
`
// color: ${({ theme, disabled }) =>
// disabled ? theme.pallete.lightGray : theme.pallete.nero};
// ::placeholder {
//   color: ${({ theme }) => theme.pallete.lightGray};
//   line-height: 44px;
// }

export const TextField = withTheme(
  ({
    theme,
    error,
    onFocus,
    value,
    valid,
    onChange,
    width,
    height,
    label,
    tip,
  }) => {
    // label, // placeholder, // disabled, // status, // endAdornment, // startAdornment,
    // onBlur, // onChange, // valid, // tip,
    // name,
    const [focused, setFocused] = useState(false)
    // const handleFocus = e => {
    //   if (onFocus) {
    //     onFocus(e)
    //   }
    //   setFocused(true)
    // }
    // const handleBlur = e => {
    //   if (onBlur) {
    //     onBlur(e)
    //   }
    //   setFocused(false)
    // }
    return (
      // <div>TextField</div>
      // <FieldContainer>
      //   <FormLabel valid={valid}>{label}</FormLabel>
      //   <HBox height={theme.paddings.half} />

      //     {startAdornment ? (
      //       <FormAdornment>{startAdornment}</FormAdornment>
      //     ) : (
      //       <VBox />
      //     )}
      //     <StyledInput
      //       name={name}
      //       placeholder={placeholder ? placeholder : ''}
      //       disabled={disabled}
      //       value={value}
      //       onChange={e => onChange(e.currentTarget.value)}
      //       onFocus={handleFocus}
      //       onBlur={handleBlur}
      //     />
      //     <FormAdornment>
      //       {status === 'loading' ? (
      //         <IconLoader />
      //       ) : status === 'success' ? (
      //         <IconSuccess />
      //       ) : endAdornment ? (
      //         endAdornment
      //       ) : null}
      //     </FormAdornment>
      <div>
        <FormLabel valid={valid}>{label}</FormLabel>
        <TextFieldContainer
          focused={focused}
          error={error}
          valid={valid}
          width={width}
          height={height}
        >
          <StyledInput
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
            width={width}
            height={height}
          />
        </TextFieldContainer>
        {error ? <InputError>{error}</InputError> : null}
      </div>
      //   <HBox height={theme.paddings.half} />
      // </FieldContainer>
    )
  },
)

TextField.propTypes = {
  // name: PropTypes.string,
  // status: PropTypes.oneOf(['loading', 'success']),
  // disabled: PropTypes.bool,
  // placeholder: PropTypes.string,
  // label: PropTypes.string,
  // error: PropTypes.string,
  // value: PropTypes.string.isRequired,
  // tip: PropTypes.string,
  // valid: PropTypes.bool,
  // startAdornment: PropTypes.node,
  // endAdornment: PropTypes.node,
  //
  // onChange: PropTypes.func.isRequired,
  // onBlur: PropTypes.func,
  // onFocus: PropTypes.func,
}
