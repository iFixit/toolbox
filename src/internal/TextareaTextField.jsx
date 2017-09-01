import React from 'react';
import glamorous from 'glamorous';

import constants from '../constants';
import DomProps from './DomProps';
import ValidityIcon from './ValidityIcon';

const { borderRadius, color, fontSize, lineHeight, spacing, transition } = constants;

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

const Input = glamorous('input', { forwardProps: 'onInvalid' })(
   {
      display: 'block',
      WebkitAppearance: 'none',
      width: '100%',
      boxSizing: 'border-box',
      padding: `${spacing[1]} ${spacing[3]}`,
      margin: 0,
      fontFamily: 'inherit',
      fontSize: fontSize[2],
      lineHeight: lineHeight.copy,
      border: `1px solid ${color.grayAlpha[3]}`,
      borderRadius,
      boxShadow: 'none',
      outline: 'none',
      color: color.grayAlpha[9],
      backgroundColor: color.white,
      transition: `padding ${transition.duration} ${transition.easing}`,
   },
   ({ showValidity }) => showValidity && {
      paddingLeft: ValidityIcon.width,
   },
   ({ domProps: { focus } }) => focus && {
      borderColor: color.blue[4],
      boxShadow: `0 0 0 1px ${color.blue[4]}`,
   },
   ({ disabled }) => disabled && {
      color: color.grayAlpha[5],
      backgroundColor: color.grayAlpha[1],
   },
   ({ resize }) => resize && {
      resize,
   },
);

const TextareaContainer = Input.withComponent('textarea');

class TextareaTextField extends React.Component {
   state = {};

   render() {
      const {
         className,
         component,
         domProps,
         label,
         onChange,
         onMouseEnter,
         onMouseLeave,
         showValidationMessage,
         showValidity,
         validationMessage,
         ...passedThroughProps
      } = { ...this.state, ...this.props };

      const Component = component === 'TextField' ? Input : TextareaContainer;

      console.log('test');

      const propsLabel = {
         className,
         onMouseEnter,
         onMouseLeave,
      };

      const propsValidityIcon = {
         showValidity,
         valid: domProps.valid,
         onClick: () => this.setState({
            showValidationMessage: !showValidationMessage,
            validationMessage: domProps.validationMessage,
         }),
      };

      const propsComponent = {
         ...passedThroughProps,
         domProps,
         innerRef: domProps.setRef,
         showValidity,
         onChange: ({ target: { value } }) => {
            onChange({ value });
            console.log(domProps.valid);
         },
         onBlur: () => showValidity && domProps.valid && this.setState({
            showValidity: false,
            showValidationMessage: false,
         }),
         onInvalid: ev => {
            ev.preventDefault();
            this.setState({
               showValidity: true,
            });
         },
      };

      return (
         <Label {...propsLabel}>
            {showValidationMessage && !domProps.valid ?
               <LabelText style={{ color: color.red[4] }}> {validationMessage} </LabelText> :
               <LabelText> {label} </LabelText>
            }
            <glamorous.Div position="relative">
               <ValidityIcon {...propsValidityIcon} />
               <DomProps.Target>
                  <Component {...propsComponent} />
               </DomProps.Target>
            </glamorous.Div>
         </Label>
      );
   }
}

export default DomProps(TextareaTextField);
