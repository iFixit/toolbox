import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import constants from '../../constants';

const { borderRadius, color, fontSize, lineHeight, spacing } = constants;

const Label = glamorous.label({
   display: 'inline-block',
   boxSizing: 'border-box',
   width: '100%',
   fontSize: fontSize[2],
   color: color.grayAlpha[9],
});

const LabelText = glamorous.span({
   display: 'inline-block',
   marginBottom: spacing[3],
   lineHeight: lineHeight.solid,
});

const Input = glamorous.input(
   {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      padding: `${spacing[1]} ${spacing[3]}`,
      fontFamily: 'inherit',
      fontSize: fontSize[2],
      lineHeight: lineHeight.copy,
      border: `1px solid ${color.grayAlpha[3]}`,
      borderRadius,
      outline: 'none',
      ':focus': {
         borderColor: color.blue[4],
         boxShadow: `0 0 0 1px ${color.blue[4]}`,
      },
   },
   ({ disabled, valid }) => {
      const defaultStyle = {
         color: color.grayAlpha[9],
         backgroundColor: color.white,
      };

      const invalidStyle = !valid ? {
         color: color.red[4],
         backgroundColor: color.red[1],
      } : null;

      const disabledStyle = disabled ? {
         color: color.grayAlpha[5],
         backgroundColor: color.grayAlpha[1],
      } : null;

      return {
         ...defaultStyle,
         ...invalidStyle,
         ...disabledStyle,
      };
   },
);

const TextField = ({
   className,
   label,
   onMouseEnter,
   onMouseLeave,
   onChange,
   validityMessage,
   ...props
}) =>
   <Label
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
   >
      {label !== '' && <LabelText> {label} </LabelText>}
      {!props.valid && <LabelText> {validityMessage} </LabelText>}
      <Input {...props} onChange={ev => onChange({ value: ev.target.value })} />
   </Label>;

TextField.propTypes = {
   /** Set class name of containing element. */
   className: PropTypes.string,
   /** Indicates that the form control is not available for interaction. */
   disabled: PropTypes.bool,
   /** Represents a caption for the form control. */
   label: PropTypes.string,
   /** A hint to the user of what can be entered in the control. */
   placeholder: PropTypes.string,
   /** This prop specifies that the user must fill in a value before submitting a form. */
   required: PropTypes.bool,
   /** The supported input types */
   type: PropTypes.oneOf([
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
   /** The validity of the control */
   valid: PropTypes.bool,
   /** The validityMessage of the control */
   validityMessage: PropTypes.string,
   /** The value of the control. */
   value: PropTypes.string,
   /** Callback when focus is removed. */
   onBlur: PropTypes.func,
   /** Callback when value is changed. */
   onChange: PropTypes.func,
   /** Callback when input is focused. */
   onFocus: PropTypes.func,
   /** Callback when mouse enters component. */
   onMouseEnter: PropTypes.func,
   /** Callback when mouse leaves component. */
   onMouseLeave: PropTypes.func,
};

TextField.defaultProps = {
   className: '',
   disabled: false,
   label: '',
   placeholder: '',
   required: false,
   type: 'text',
   value: '',
   onBlur: () => {},
   onChange: () => {},
   onFocus: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
   valid: true,
   validityMessage: 'Test Hi Lol',
};

export default TextField;
