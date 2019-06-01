import React from 'react'
import PropTypes from 'prop-types'
import { theme, styled } from '@ui/theme'
import { ButtonText } from '@ui/atoms/Typography'

// background: ${({ loading, theme }) =>
//   loading ? theme.pallete.nero : theme.pallete.white};
const Wrapper = styled.div`
  width: 1170px;
  height: 1045px;
  border-radius: 30px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
  padding-top: 73px;
`

const Wrapper2 = styled.div`
  position: absolute;
  width: 1170px;
  height: 73px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f8f8f8;
  border-radius: 30px 30px 0px 0px;
`

const Wrapper3 = styled.div`
  display: block;
  float: left;
  margin-left: 20px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.pallete.pink_2};
  border-radius: 50%;
`
const Wrapper4 = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`

const TextWrapper = styled.div`
  display: block;
  float: left;
  padding-left: 16px;
  width: 563px;
  font-size: 18px;
  font-family: Roboto;
  text-align: left;
`
export const Container = ({ children, text }) => (
  <div>
    <Wrapper2>
      <Wrapper4>
        <Wrapper3>1</Wrapper3>
        <TextWrapper>{text}</TextWrapper>
      </Wrapper4>
    </Wrapper2>
    <Wrapper>{children}</Wrapper>
  </div>
)

Container.propTypes = {}
