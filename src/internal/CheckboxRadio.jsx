import React from 'react';
import glamorous from 'glamorous';

import Icon from '../components/Icon/Icon';
import constants from '../constants';
import DomProps from './DomProps';

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
      color: color.grayAlpha[9],
   },
   ({ disabled }) => disabled && {
      color: color.grayAlpha[5],
   },
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
      color: 'transparent',
      backgroundColor: color.white,
      border: `1px solid ${color.grayAlpha[4]}`,
   },
   ({ type }) => ({
      borderRadius: type === 'checkbox' ? borderRadius : '50%',
   }),
   ({ domProps: { focus } }) => focus && {
      borderColor: color.blue[4],
      boxShadow: `0 0 0 3px ${color.blue[2]}`,
   },
   ({ showInvalid }) => showInvalid && {
      borderColor: color.red[4],
   },
   ({ showInvalid, domProps: { focus } }) => showInvalid && !focus && {
      boxShadow: `inset 0 0 0 1px ${color.red[4]}`,
   },
   ({ checked }) => checked && {
      color: color.white,
      backgroundColor: color.blue[4],
      borderColor: color.blue[4],
   },
   ({ disabled, checked }) => disabled && {
      backgroundColor: checked ? color.gray[4] : color.gray[1],
      borderColor: color.gray[4],
   },
);

class CheckboxRadio extends React.PureComponent {
   state = {};

   componentDidUpdate() {
      if (this.state.showInvalid && this.props.domProps.valid) {
         this.setState({ showInvalid: false });
      }
   }

   render() {
      const {
         className,
         checked,
         disabled,
         domProps,
         label,
         onChange,
         onInvalid,
         onMouseEnter,
         onMouseLeave,
         showInvalid,
         type,
         ...passedThroughProps
      } = { ...this.state, ...this.props };

      const propsLabel = {
         className,
         disabled,
         onMouseEnter,
         onMouseLeave,
      };

      const propsInput = {
         ...passedThroughProps,
         checked,
         disabled,
         domProps,
         innerRef: domProps.setRef,
         type,
         onChange: ev => onChange({
            checked: ev.target.checked,
            value: ev.target.value,
         }),
         onInvalid: ev => {
            onInvalid(ev);
            ev.preventDefault();
            this.setState({ showInvalid: true });
         },
      };

      const propsInputIcon = {
         name: type === 'checkbox' ? 'check' : 'circle',
         type,
         checked,
         disabled,
         domProps,
         showInvalid,
      };

      return (
         <Label {...propsLabel}>
            <DomProps.Target>
               <Input {...propsInput} />
            </DomProps.Target>
            <InputIcon {...propsInputIcon} />
            <LabelText> {label} </LabelText>
         </Label>
      );
   }
}

export default DomProps.container(CheckboxRadio);
