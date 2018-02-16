import React from 'react';
import { string, bool, oneOf, func } from 'prop-types';
import glamorous from 'glamorous';
import constants from '../../constants';

const { spacing, fontSize, lineHeight, color, borderRadius } = constants;

const InputContainer = glamorous.input(
   {
      WebkitAppearance: 'none',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      margin: 0,
      padding: `${spacing[1]} ${spacing[3]}`,
      fontFamily: 'inherit',
      fontSize: fontSize[2],
      lineHeight: lineHeight.copy,
      border: `1px solid ${color.grayAlpha[3]}`,
      borderRadius,
      outline: 'none',
      color: color.grayAlpha[9],
      backgroundColor: color.white,
      boxShadow: 'none',

      ':focus': {
         borderColor: color.blue[4],
         boxShadow: `0 0 0 1px ${color.blue[4]}`,
      },
   },
   ({ disabled }) => disabled && {
      color: color.grayAlpha[5],
      backgroundColor: color.grayAlpha[1],
   },
);

const Input = props => (
   <InputContainer {...props} />
);

Input.propTypes = {
  /** Set class name of containing element. */
   className: string,
  /** Indicates that the form control is not available for interaction. */
   disabled: bool,
  /** A hint to the user of what can be entered in the control. */
   placeholder: string,
  /** This prop specifies that the user must fill in a value before submitting a form. */
   required: bool,
  /** The supported input types */
   type: oneOf([
      'text',
      'email',
      'number',
      'password',
      'tel',
      'search',
      'url',
      'date',
      'datetime-local',
      'month',
      'week',
      'time',
   ]),
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

Input.defaultProps = {
   className: '',
   disabled: false,
   placeholder: '',
   required: false,
   type: 'text',
   value: '',
   onBlur: () => {},
   onChange: () => {},
   onFocus: () => {},
   onInvalid: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default Input;
