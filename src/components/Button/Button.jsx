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
      border: '1px solid',
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
            borderColor: color.blue[4],
            ':hover': {
               backgroundColor: color.blue[5],
               borderColor: color.blue[5],
            },
            ':focus': {
               boxShadow: `0 0 0 3px ${color.blue[2]}`,
            },
         };

      case 'outline':
         return {
            color: color.blue[4],
            backgroundColor: transparent ? 'transparent' : color.white,
            borderColor: color.blue[2],
            ':hover': {
               color: color.white,
               backgroundColor: color.blue[4],
               borderColor: color.blue[4],
            },
            ':focus': {
               boxShadow: ` 0 0 0 3px ${color.blue[2]}`,
            },
         };

      default:
         return {
            color: color.grayAlpha[9],
            backgroundColor: transparent ? 'transparent' : color.white,
            borderColor: color.grayAlpha[3],
            ':hover': {
               backgroundColor: transparent
                     ? color.grayAlpha[0]
                     : color.gray[0],
               borderColor: color.grayAlpha[4],
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
            borderColor: color.grayAlpha[3],
            pointerEvents: 'none',
         };
      }
      return {};
   },
);

const LinkContainer = ButtonContainer.withComponent('a');

const Button = ({ children, ...props }) => {
   const Container = props.href === '' ? ButtonContainer : LinkContainer;

   return (
     <Container {...props}>
       {children}
     </Container>
   );
};

Button.propTypes = {
   /** Text to display in the button */
   children: PropTypes.string.isRequired,

   design: PropTypes.oneOf(['default', 'primary', 'outline']),

   /** Disable button */
   disabled: PropTypes.bool,

   /** Set width of the button to 100% */
   fullWidth: PropTypes.bool,

   /** If an `href` is provided, the underlying element will be an `<a>` instead of a `<button>` */
   href: PropTypes.string,

   /** Callback when clicked */
   onClick: PropTypes.func,

   /** Set `background-color` to `transparent`. Does not apply to the `"primary"` design */
   transparent: PropTypes.bool,

   /** Size of button */
   size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
   design: 'default',
   disabled: false,
   fullWidth: false,
   href: '',
   onClick: () => {},
   transparent: false,
   size: 'medium',
};

export default Button;
