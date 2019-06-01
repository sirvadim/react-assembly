import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const ButtonText = styled.div`
  font-family: Roboto;
  font-weight: lighter;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  /* letter-spacing: 0.5px; */
  color: ${props => (props.color ? props.color : props.theme.pallete.tf_color)};
`

ButtonText.propTypes = {
  color: PropTypes.string,
}
