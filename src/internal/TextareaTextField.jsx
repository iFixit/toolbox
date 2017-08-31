import React from 'react';
import glamorous from 'glamorous';

import constants from '../constants';
import domProps from './domProps';
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

class TextareaTextField extends React.PureComponent {
   state = {};

   ValidityIconOnClick = () => {
      this.setState(({ showValidationMessage = false }) => ({
         showValidationMessage: !showValidationMessage,
         validationMessage: this.props.domProps.validationMessage,
      }));
   }

   ComponentOnInvalid = ev => {
      ev.preventDefault();
      this.setState({
         showValidity: true,
      });
   }

   render() {
      const {
         className,
         label,
         onMouseEnter,
         onMouseLeave,
         onChange,
         component,
         ...props
      } = { ...this.state, ...this.props };

      const Component = component === 'TextField' ? Input : TextareaContainer;

      return (
         <Label
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
         >
            {props.showValidationMessage && !props.domProps.valid ?
               <LabelText style={{ color: color.red[4] }}> {props.validationMessage} </LabelText> :
               <LabelText> {label} </LabelText>
            }
            <glamorous.Div position="relative">
               <ValidityIcon
                  showValidity={props.showValidity}
                  valid={props.domProps.valid}
                  onClick={this.ValidityIconOnClick}
               />
               <domProps.Target>
                  <Component
                     {...props}
                     onInvalid={this.ComponentOnInvalid}
                     onChange={({ target: { value } }) => onChange({ value })}
                     innerRef={props.domProps.setRef}
                     onBlur={() => {
                        if (props.showValidity && props.domProps.valid) {
                           this.setState({
                              showValidity: false,
                              showValidationMessage: false,
                           });
                        }
                     }}
                  />
               </domProps.Target>
            </glamorous.Div>
         </Label>
      );
   }
}

export default domProps(TextareaTextField);
