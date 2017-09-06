import React from 'react';
import glamorous from 'glamorous';

import constants from '../constants';
import withDomProps from './withDomProps';
import ValidityIcon from './ValidityIcon';

const {
   borderRadius,
   color,
   fontSize,
   lineHeight,
   spacing,
   transition,
} = constants;

const Label = glamorous.label({
   display: 'inline-block',
   boxSizing: 'border-box',
   width: '100%',
   fontSize: fontSize[2],
   color: color.grayAlpha[9],
});

const LabelText = glamorous.span(
   {
      display: 'inline-block',
      marginBottom: spacing[3],
      lineHeight: lineHeight.solid,
   },
   ({ showValidationMessage }) => showValidationMessage && {
      color: color.red[4],
   },
);

const Input = glamorous.input(
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
      outline: 'none',
      color: color.grayAlpha[9],
      backgroundColor: color.white,
      transition: `padding ${transition.duration} ${transition.easing}`,
      boxShadow: 'none',
   },
   ({ showValidity }) => showValidity && {
      paddingLeft: `calc(${spacing[3]} * 2)`,
      paddingRight: 0,
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

   componentDidUpdate() {
      if (this.state.showValidationMessage && this.props.domProps.valid) {
         this.setState({ showValidationMessage: false });
      }
   }

   render() {
      const {
         className,
         component,
         domProps,
         label,
         onBlur,
         onChange,
         onInvalid,
         onMouseEnter,
         onMouseLeave,
         showValidationMessage,
         showValidity,
         validationMessage,
         ...passedThroughProps
      } = { ...this.state, ...this.props };

      const Component = component === 'TextField' ? Input : TextareaContainer;

      const propsLabel = {
         className,
         onMouseEnter,
         onMouseLeave,
      };

      const propsLabelText = {
         showValidationMessage,
         children: showValidationMessage ? validationMessage : label,
      };

      const propsValidityIcon = {
         showValidity,
         valid: domProps.valid,
         onClick: () => {
            if (!domProps.valid) {
               this.setState({
                  showValidationMessage: !showValidationMessage,
                  validationMessage: domProps.validationMessage,
               });
            }
         },
      };

      const propsComponent = {
         ...passedThroughProps,
         domProps,
         innerRef: domProps.setRef,
         showValidity,
         onChange: ({ target: { value } }) => {
            onChange({ value });
         },
         onBlur: ev => {
            onBlur(ev);
            if (domProps.valid) {
               this.setState({
                  showValidity: false,
                  showValidationMessage: false,
               });
            }
         },
         onInvalid: ev => {
            onInvalid(ev);
            ev.preventDefault();
            this.setState({
               showValidity: true,
               validationMessage: domProps.validationMessage,
            });
         },
      };

      return (
         <Label {...propsLabel}>
            <LabelText {...propsLabelText} />
            <glamorous.Div position="relative">
               <ValidityIcon {...propsValidityIcon} />
               <withDomProps.Target>
                  <Component {...propsComponent} />
               </withDomProps.Target>
            </glamorous.Div>
         </Label>
      );
   }
}

export default withDomProps(TextareaTextField);
