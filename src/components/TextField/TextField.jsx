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

const Label = glamorous.label({
  display: 'inline-block',
  color: color.grayAlpha[9],
});

const Span = glamorous.span({
  display: 'inline-block',
  marginBottom: spacing[2],
  lineHeight: lineHeight.copy,
});

const Input = glamorous.input(
  ({ disabled }) => ({
    color: disabled ? color.grayAlpha[5] : color.grayAlpha[9],
  }),
  {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    padding: `${spacing[2]} ${spacing[3]}`,
    fontFamily: 'inherit',
    fontSize: fontSize[2],
    lineHeight: lineHeight.copy,
    backgroundColor: color.white,
    border: `1px solid ${color.grayAlpha[3]}`,
    borderRadius,
    outline: 'none',
    ':focus': {
      borderColor: color.blue[4],
      boxShadow: `0 0 0 1px ${color.blue[4]}`,
    },
  },
);

const TextField = props =>
  <Label className={props.className} htmlFor={props.id}>
    <Span>
      {props.label}
    </Span>
    <Input
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      disabled={props.disabled}
      required={props.required}
    />
  </Label>;

TextField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
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
  value: PropTypes.string,
};

TextField.defaultProps = {
  className: '',
  disabled: false,
  id: '',
  label: '',
  placeholder: '',
  required: false,
  type: 'text',
  value: '',
};

export default TextField;
