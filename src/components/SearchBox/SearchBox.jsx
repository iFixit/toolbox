import React from 'react';
import { string, bool, func } from 'prop-types';
import glamorous, { Div } from 'glamorous';
import Icon from '../Icon/Icon';
import constants from '../../constants';

const {
   spacing,
   fontSize,
   lineHeight,
   color,
   borderRadius,
   shadows,
} = constants;

const IconContainer = glamorous.div({
   display: 'flex',
   alignItems: 'center',
   boxSizing: 'border-box',
   width: '100%',
   height: '100%',
   paddingLeft: spacing[3],
   paddingRight: spacing[3],
});

const InputContainer = glamorous.input(
   {
      WebkitAppearance: 'none',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      margin: 0,
      padding: `${spacing[2]} ${spacing[3]} ${spacing[2]} 56px`,
      fontFamily: 'inherit',
      fontSize: fontSize[2],
      lineHeight: lineHeight.copy,
      border: 'none',
      borderRadius,
      outline: 'none',
      color: color.grayAlpha[9],
      backgroundColor: color.white,
      boxShadow: `${shadows[0]}, ${shadows[1]}`,

      ':focus': {
         boxShadow: `${shadows[0]}, ${shadows[2]}`,
      },

      '::-webkit-search-decoration': {
         display: 'none',
      },
   },
   ({ disabled }) =>
      disabled && {
         color: color.grayAlpha[5],
         backgroundColor: color.grayAlpha[1],
         boxShadow: `inset ${shadows[0]}`,
      },
);

const SearchBox = props => (
   <Div position="relative">
      <InputContainer type="search" {...props} />
      <Div position="absolute" top={0} bottom={0} left={0}>
         <IconContainer>
            <Icon name="search" color={color.gray[4]} />
         </IconContainer>
      </Div>
   </Div>
);

SearchBox.propTypes = {
   /** Set class name of containing element. */
   className: string,
   /** Indicates that the form control is not available for interaction. */
   disabled: bool,
   /** A hint to the user of what can be entered in the control. */
   placeholder: string,
   /** This prop specifies that the user must fill in a value before submitting a form. */
   required: bool,
   /** The value of the control. */
   value: string,
   /** Callback when focus is removed. */
   onBlur: func,
   /** Callback when value is changed. */
   onChange: func,
   /** Callback when input is focused. */
   onFocus: func,
   /** Callback when the control is invalid. */
   onInvalid: func,
   /** Callback when mouse enters component. */
   onMouseEnter: func,
   /** Callback when mouse leaves component. */
   onMouseLeave: func,
};

SearchBox.defaultProps = {
   className: '',
   disabled: false,
   placeholder: 'Search',
   required: false,
   value: '',
   onBlur: () => {},
   onChange: () => {},
   onFocus: () => {},
   onInvalid: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default SearchBox;
