import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Icon from '../Icon/Icon';

import {
   borderRadius,
   color,
   lineHeight,
   spacing,
   transition,
} from '../../constants';

const Label = glamorous.label(
   {
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
   },
   ({ disabled }) => ({
      color: disabled ? color.grayAlpha[5] : color.grayAlpha[9],
   }),
);

// hide native checkbox element
const Input = glamorous.input({
   clip: 'rect(1px, 1px, 1px, 1px)',
   height: 1,
   width: 1,
   overflow: 'hidden',
   position: 'absolute',
   whiteSpace: 'nowrap',
});

const LabelText = glamorous.span({
   marginLeft: spacing[3],
   lineHeight: lineHeight.title,
   userSelect: 'none',
});

const InputIcon = glamorous(Icon)(
   {
      width: 16,
      height: 16,
      transition: `all ${transition.duration} ${transition.easing}`,
      'input:focus + &': {
         borderColor: color.blue[4],
         boxShadow: `0 0 0 3px ${color.blue[2]}`,
      },
   },
   ({ type }) => ({
      borderRadius: type === 'checkbox' ? borderRadius : '50%',
   }),
   ({ checked, disabled }) => {
      if (checked) {
         return {
            color: color.white,
            backgroundColor: disabled ? color.gray[4] : color.blue[4],
            border: `1px solid ${disabled ? color.gray[4] : color.blue[4]}`,
         };
      }
      return {
         color: 'transparent',
         backgroundColor: color.white,
         border: `1px solid ${color.grayAlpha[4]}`,
      };
   },
);

const CheckboxRadio = ({ className, label, onChange, ...props }) =>
  <Label className={className} disabled={props.disabled}>
    <Input
      {...props}
      onChange={ev =>
            onChange({ checked: ev.target.checked, value: ev.target.value })}
    />
    <InputIcon
      name={props.type === 'checkbox' ? 'check' : 'circle'}
      type={props.type}
      checked={props.checked}
      disabled={props.disabled}
    />
    {label !== '' &&
    <LabelText>
      {label}
    </LabelText>}
  </Label>;

CheckboxRadio.propTypes = {
   type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
   checked: PropTypes.bool,
   className: PropTypes.string,
   disabled: PropTypes.bool,
   label: PropTypes.string,
   value: PropTypes.string,
   onChange: PropTypes.func,
};

CheckboxRadio.defaultProps = {
   checked: false,
   className: '',
   disabled: false,
   label: '',
   value: 'on',
   onChange: () => {},
};

export default CheckboxRadio;
