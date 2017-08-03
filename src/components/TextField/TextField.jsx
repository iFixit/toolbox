import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
  color,
  spacing,
  fontSize,
  lineHeight,
  borderRadius,
} from '../../constants';

const Label = glamorous.label(
  {
    display: 'inline-block',
    boxSizing: 'border-box',
    color: color.grayAlpha[9],
  },
  ({ fullWidth }) => ({ width: fullWidth ? '100%' : 'auto' }),
);

const LabelText = glamorous.span({
  display: 'inline-block',
  marginBottom: spacing[2],
  lineHeight: lineHeight.solid,
});

const Input = glamorous.input(
  {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    padding: `${spacing[1]} ${spacing[2]}`,
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
  ({ disabled }) => ({
    color: disabled ? color.grayAlpha[5] : color.grayAlpha[9],
    backgroundColor: disabled ? color.grayAlpha[1] : color.white,
  }),
);

const TextField = props =>
  <Label
    className={props.className}
    htmlFor={props.id}
    fullWidth={props.fullWidth}
  >
    {props.label !== '' &&
      <LabelText>
        {props.label}
      </LabelText>}
    <Input
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      disabled={props.disabled}
      required={props.required}
      onChange={ev => props.onChange({ value: ev.target.value })}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </Label>;

TextField.propTypes = {
  className: PropTypes.string,

  /** Disable input */
  disabled: PropTypes.bool,

  /** Set `width` to `100%` */
  fullWidth: PropTypes.bool,

  /** Id of input. Used to connect `<label>` and `<input>` */
  id: PropTypes.string,

  /** Label for input */
  label: PropTypes.string,

  /** Callback when focus is removed */
  onBlur: PropTypes.func,

  /** Callback when value is changed */
  onChange: PropTypes.func,

  /** Callback when input is focused */
  onFocus: PropTypes.func,

  /** Placeholder text for input */
  placeholder: PropTypes.string,

  /** Make input required */
  required: PropTypes.bool,

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

  /** Value of input */
  value: PropTypes.string,
};

TextField.defaultProps = {
  className: '',
  disabled: false,
  fullWidth: false,
  id: '',
  label: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  placeholder: '',
  required: false,
  type: 'text',
  value: '',
};

export default TextField;
