import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Icon from '../Icon/Icon';

import {
  color,
  spacing,
  borderRadius,
  lineHeight,
  transition,
} from '../../constants';

const Label = glamorous.label(
  {
    display: 'inline-flex',
    alignItems: 'center',
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
  lineHeight: lineHeight.title,
});

const CheckIcon = glamorous(Icon, {
  withProps: { name: 'check' },
})(
  {
    width: 16,
    height: 16,
    marginRight: spacing[2],
    borderRadius,
    transition: `all ${transition.duration} ${transition.easing}`,
    '[type=checkbox]:focus + &': {
      borderColor: color.blue[4],
      boxShadow: `0 0 0 3px ${color.blue[2]}`,
    },
  },
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

const Checkbox = ({ className, label, onChange, ...props }) =>
  <Label className={className} disabled={props.disabled}>
    <Input
      {...props}
      type="checkbox"
      onChange={ev => onChange({ checked: ev.target.checked })}
    />
    <CheckIcon checked={props.checked} disabled={props.disabled} />
    <LabelText>
      {label}
    </LabelText>
  </Label>;

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  label: '',
  onChange: () => {},
  value: '',
};

export default Checkbox;
