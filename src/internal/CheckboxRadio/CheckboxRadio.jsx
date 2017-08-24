import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Icon from '../../components/Icon/Icon';
import constants from '../../constants';

const {
   borderRadius,
   color,
   fontSize,
   lineHeight,
   spacing,
   transition,
} = constants;

const Label = glamorous.label(
   {
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      fontSize: fontSize[2],
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
      boxSizing: 'content-box',
      width: 16,
      height: 16,
      lineHeight: 0,
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

const CheckboxRadio = ({
   className,
   label,
   onMouseEnter,
   onMouseLeave,
   onChange,
   ...props
}) =>
   <Label
      className={className}
      disabled={props.disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
   >
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
   onMouseEnter: PropTypes.func,
   onMouseLeave: PropTypes.func,
};

CheckboxRadio.defaultProps = {
   checked: false,
   className: '',
   disabled: false,
   label: '',
   value: 'on',
   onChange: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default CheckboxRadio;
