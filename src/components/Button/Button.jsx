import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
  color,
  spacing,
  fontSize,
  lineHeight,
  borderRadius,
  transition,
} from '../../constants';

const Container = glamorous.button(
  {
    fontFamily: 'inherit',
    fontSize: fontSize[1],
    lineHeight: lineHeight.copy,
    textAlign: 'center',
    border: 'none',
    borderRadius,
    outline: 'none',
    cursor: 'pointer',
    transition: `all ${transition.duration} ${transition.easing}`,
  },
  ({ theme, transparent }) => {
    switch (theme) {
      case 'primary':
        return {
          color: color.white,
          backgroundColor: color.blue[4],
          ':hover': {
            backgroundColor: color.blue[5],
          },
          ':focus': {
            boxShadow: `0 0 0 3px ${color.blue[2]}`,
          },
        };

      case 'outline':
        return {
          color: color.blue[4],
          backgroundColor: transparent ? 'transparent' : color.white,
          boxShadow: `inset 0 0 0 1px ${color.blue[2]}`,
          ':hover': {
            color: color.white,
            backgroundColor: color.blue[4],
            boxShadow: 'none',
          },
          ':focus': {
            boxShadow: ` 0 0 0 3px ${color.blue[2]}`,
          },
        };

      default:
        return {
          color: color.grayAlpha[9],
          backgroundColor: transparent ? 'transparent' : color.white,
          boxShadow: `inset 0 0 0 1px ${color.grayAlpha[3]}`,
          ':hover': {
            backgroundColor: transparent ? color.grayAlpha[0] : color.gray[0],
          },
          ':focus': {
            boxShadow: `0 0 0 3px ${color.grayAlpha[3]}`,
          },
        };
    }
  },
  ({ size }) => {
    switch (size) {
      case 'small':
        return {
          padding: `${spacing[0]} ${spacing[1]}`,
        };

      case 'large':
        return {
          fontSize: fontSize[2],
          lineHeight: lineHeight.title,
          padding: `${spacing[2]} ${spacing[3]}`,
        };

      default:
        return {
          padding: `${spacing[1]} ${spacing[2]}`,
        };
    }
  },
  ({ fullWidth }) => ({ width: fullWidth ? '100%' : 'auto' }),
);

const Button = ({ children, ...props }) =>
  <Container {...props}>
    {children}
  </Container>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  theme: PropTypes.oneOf(['default', 'primary', 'outline']),
  transparent: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  fullWidth: false,
  theme: 'default',
  transparent: false,
  size: 'medium',
};

export default Button;
