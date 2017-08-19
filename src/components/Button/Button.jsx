import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
   borderRadius,
   color,
   fontSize,
   lineHeight,
   spacing,
   transition,
} from '../../constants';

const propTypes = {
   /** Text to display inside the button. */
   children: PropTypes.string.isRequired,
   /** Choose a button design. */
   design: PropTypes.oneOf(['default', 'primary', 'outline', 'plain']),
   /** Disable button. */
   disabled: PropTypes.bool,
   /** Set width of the button to 100%. */
   fullWidth: PropTypes.bool,
   /** If an `href` is provided, the underlying element will be an `<a>` instead of a `<button>`. */
   href: PropTypes.string,
   /** Size of button. */
   size: PropTypes.oneOf(['small', 'medium', 'large']),
   /** Callback when clicked. */
   onClick: PropTypes.func,
};

const defaultProps = {
   design: 'default',
   disabled: false,
   fullWidth: false,
   href: '',
   size: 'medium',
   onClick: () => {},
};

const designs = {
   default: {
      color: color.grayAlpha[9],
      backgroundColor: 'transparent',
      borderColor: color.grayAlpha[3],
      ':hover': {
         backgroundColor: color.grayAlpha[1],
      },
      ':focus': {
         boxShadow: `0 0 0 3px ${color.grayAlpha[3]}`,
      },
   },
   primary: {
      color: color.white,
      backgroundColor: color.blue[4],
      borderColor: color.blue[4],
      ':hover': {
         color: color.white,
         backgroundColor: color.blue[5],
         borderColor: color.blue[5],
      },
      ':focus': {
         boxShadow: `0 0 0 3px ${color.blueAlpha[2]}`,
      },
   },
   outline: {
      color: color.blue[4],
      backgroundColor: 'transparent',
      borderColor: color.blue[4],
      ':hover': {
         color: color.white,
         backgroundColor: color.blue[4],
         borderColor: color.blue[4],
      },
      ':focus': {
         boxShadow: `0 0 0 3px ${color.blueAlpha[2]}`,
      },
   },
   plain: {
      color: color.grayAlpha[9],
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      ':hover': {
         color: color.blue[4],
      },
      ':focus': {
         backgroundColor: color.grayAlpha[1],
      },
   },
};

const sizes = {
   small: {
      padding: `${spacing[0]} ${spacing[2]}`,
      fontSize: fontSize[1],
      lineHeight: lineHeight.copy,
   },
   medium: {
      padding: `${spacing[1]} ${spacing[3]}`,
      fontSize: fontSize[1],
      lineHeight: lineHeight.copy,
   },
   large: {
      padding: `${spacing[3]} ${spacing[4]}`,
      fontSize: fontSize[2],
      lineHeight: lineHeight.title,
   },
};

const ButtonContainer = glamorous.button(
   {
      display: 'inline-block',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      textAlign: 'center',
      textDecoration: 'none',
      border: '1px solid transparent',
      borderRadius,
      outline: 0,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      userSelect: 'none',
      transition: `all ${transition.duration} ${transition.easing}`,
   },
   ({ design }) => designs[design],
   ({ size }) => sizes[size],
   ({ fullWidth }) => {
      if (fullWidth) {
         return { display: 'block', width: '100%' };
      }
      return null;
   },
   ({ disabled }) => {
      if (disabled) {
         return { opacity: 0.5, pointerEvents: 'none' };
      }
      return null;
   },
);

const LinkContainer = ButtonContainer.withComponent('a');

const Button = props => {
   const Container = props.href === '' ? ButtonContainer : LinkContainer;

   return <Container {...props} tabIndex={props.disabled ? -1 : 0} />;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
