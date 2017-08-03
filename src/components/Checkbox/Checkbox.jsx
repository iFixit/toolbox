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

const Label = glamorous.label({
  display: 'inline-flex',
  alignItems: 'center',
  color: color.grayAlpha[9],
});

// hide native checkbox element
const Input = glamorous.input({
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: 1,
  width: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  '&:focus + span': {
    borderColor: color.blue[4],
    boxShadow: `0 0 0 3px ${color.blue[2]}`,
  },
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
  },
  ({ checked }) => ({
    color: checked ? color.white : 'transparent',
    backgroundColor: checked ? color.blue[4] : color.white,
    border: `1px solid ${checked ? color.blue[4] : color.grayAlpha[4]}`,
  }),
);

const Checkbox = ({ className, label, ...props }) =>
  <Label className={className}>
    <Input {...props} type="checkbox" />
    <CheckIcon checked={props.checked} />
    <LabelText>
      {label}
    </LabelText>
  </Label>;

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  className: '',
  label: '',
  checked: false,
};

export default Checkbox;
