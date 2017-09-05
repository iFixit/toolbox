import React from 'react';
import glamorous from 'glamorous';

import constants from '../constants';
import DomProps from './DomProps';
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
   ({ toggleValidationMessage }) => toggleValidationMessage && {
      color: color.red[4],
   },
);

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
      outline: 'none',
      color: color.grayAlpha[9],
      backgroundColor: color.white,
      transition: `padding ${transition.duration} ${transition.easing}`,
   },
   ({ showValidity, validityIconPosition }) => showValidity && (
      validityIconPosition === 'left' ? {
         paddingLeft: ValidityIcon.size,
      } : {
         paddingBottom: ValidityIcon.size,
      }
   ),
   ({ domProps: { focus } }) => focus && {
      borderColor: color.blue[4],
   },
   ({ disabled }) => disabled && {
      color: color.grayAlpha[5],
      backgroundColor: color.grayAlpha[1],
   },
   ({ resize }) => resize && {
      resize,
   },
);

Input.defaultProps = {
   validityIconPosition: 'left',
};

const TextareaContainer = Input.withComponent('textarea');

TextareaContainer.defaultProps = {
   validityIconPosition: 'bottom',
};

class TextareaTextField extends React.PureComponent {
   state = {};

   componentDidUpdate() {
      if (this.state.toggleValidationMessage && this.props.domProps.valid) {
         this.setState({ toggleValidationMessage: false });
      }
   }

   render() {
      const {
         className,
         component,
         domProps,
         label,
         onChange,
         onMouseEnter,
         onMouseLeave,
         toggleValidationMessage,
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
         toggleValidationMessage,
         children: toggleValidationMessage ? validationMessage : label,
      };

      const propsValidityIcon = {
         showValidity,
         valid: domProps.valid,
         validityIconPosition: Component.defaultProps.validityIconPosition,
         onClick: () => !domProps.valid && this.setState({
            toggleValidationMessage: !toggleValidationMessage,
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
         },
         onBlur: () => domProps.valid && this.setState({
            showValidity: false,
            toggleValidationMessage: false,
         }),
         onInvalid: ev => {
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
            <glamorous.Div position="relative" overflow="hidden">
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
