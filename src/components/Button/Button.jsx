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

const ButtonContainer = glamorous.button(
  {
    display: 'inline-block',
    fontFamily: 'inherit',
    fontSize: fontSize[1],
    lineHeight: lineHeight.copy,
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    borderRadius,
    outline: 'none',
    cursor: 'pointer',
    transition: `all ${transition.duration} ${transition.easing}`,
  },
  ({ design, transparent }) => {
    switch (design) {
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
  ({ disabled }) => {
    if (disabled) {
      return {
        color: color.grayAlpha[5],
        backgroundColor: color.grayAlpha[1],
        boxShadow: `inset 0 0 0 1px ${color.grayAlpha[3]}`,
        pointerEvents: 'none',
      };
    }
    return {};
  },
);

const LinkContainer = ButtonContainer.withComponent('a');

const Button = ({ children, link, ...props }) => {
  const Container = link ? LinkContainer : ButtonContainer;

  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  /** Content to display in the button */
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /** Sets width of the button to 100% */
  fullWidth: PropTypes.bool,
  /** If `true`, component will render an `<a>` tag instead of `<button>` tag. Remember to specify an `href` attribute for all links */
  link: PropTypes.bool,
  onClick: PropTypes.func,
  design: PropTypes.oneOf(['default', 'primary', 'outline']),
  /** Sets `background-color` to `transparent`. Does not apply to the `"primary"` design */
  transparent: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  fullWidth: false,
  link: false,
  onClick: () => {},
  design: 'default',
  transparent: false,
  size: 'medium',
  disabled: false,
};

export default Button;
